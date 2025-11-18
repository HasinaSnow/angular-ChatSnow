import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { WithEntityCrud } from "../with-entity-crud.store";
import { ConversEntity } from "../../entities/convers.entity";
import { ConversGateway } from "../../ports/convers.gateway";
import { computed, inject } from "@angular/core";
import { ProfileStore } from "../profile/profile.store";
import { UserStore } from "../user/user.store";
import { debounceTime, exhaustMap, of, pipe, Subscription, switchMap, tap } from "rxjs";
import { ConversSocketGateway } from "../../ports/convers-soket.gateway";
import { setEntities, setEntity } from "@ngrx/signals/entities";
import { TUniqId } from "../../../shared/types/uniq-id.type";
import { rxMethod } from "@ngrx/signals/rxjs-interop";
import { UserGateway } from "../../ports/user.gateway";
import { TSuggestion } from "../../../shared/types/suggestion.type";
import { Router } from "@angular/router";
import { BreakpointService } from "../../../shared/services/breakpoint.service";

export const ConversStore = signalStore(
    WithEntityCrud<ConversEntity, Partial<ConversEntity>, Partial<ConversEntity>>(ConversGateway),
    withState({
        searchKey: '' as string,
        newConversUser: null as TSuggestion|null,
        suggestionResult: [] as TSuggestion[]
    }),
    withComputed((
        store,
        userStore = inject(UserStore),
        profileStore = inject(ProfileStore)
    ) => ({
        conversList: computed(() => {
            const myId = profileStore.profile()?.id
            const key = store.searchKey()
            if(myId) {
                const users = userStore.entities()
                return store.entities().map((convers) => ({
                    ...convers,
                    lastMsg: {
                        ...convers.lastMsg,
                        authorName: convers.lastMsg.authorId === myId ? 'You' : convers.lastMsg.authorName
                    },
                    name: convers.name
                        ?? convers.type === 'group'
                            ? convers.participants.filter(p => p.idUser !== myId).map(p => p.name).join(', ')
                            : convers.participants.filter(p => p.idUser !== myId).map(p => p.name).join(''),
                    isOnline: users
                        .filter(user => user.isOnline)
                        .map(user => user.id)
                        .some(idUser => convers.participants
                            .map(p => p.idUser)
                            .includes(idUser)
                        ),
                    unreadCount: convers.participants.find(p => p.idUser === myId)?.unreadCount as number
                })).sort((a, b) => {
                    const dateA = (a.updatedAt ?? a.createdAt).getTime()
                    const dateB = (b.updatedAt ?? b.createdAt).getTime()
                    return dateB - dateA
                }).filter(user => key.length > 0
                    ? user.name.toLowerCase().includes(key)
                    : true
                )
            } return []
        }),
        streamUsers: computed(() => {
            const myId = profileStore.profile()?.id
            const users = userStore.entities().filter(user => user.id !== myId)
            const usersInPrivateConvers = store.entities()
                .filter(convers => convers.type === 'private')
                .map<TSuggestion>(convers => {
                    const p = convers.participants.find(p => p.idUser !== myId)
                    return {
                        idUser: p?.idUser as string,
                        name: p?.name as string,
                        urlAvatar: p?.urlAvatar as string,
                        isOnline: false
                    }
                })
            const streamUsers = users.map<TSuggestion>(user => ({
                idUser: user.id,
                name: user.name,
                urlAvatar: user.urlAvatar,
                isOnline: user.isOnline
            }))
            return [...new Map([
                ...usersInPrivateConvers,
                ...streamUsers
            ].map(user => [user.idUser, user])).values()]
        }),
        suggestions: computed<TSuggestion[]>(() => {
            const myId = profileStore.profile()?.id
            const key = store.searchKey()
            const users = userStore.entities()
            const suggestionResult = store.suggestionResult().filter(user => user.idUser !== myId)
            const usersInStore = users.map<TSuggestion>(user => ({
                idUser: user.id,
                name: user.name,
                urlAvatar: user.urlAvatar,
                isOnline: user.isOnline
            })).filter(user => key.length > 0
                ? user.name.toLowerCase().includes(key)
                : true
            ).filter(user => user.idUser !== myId)

            return [...new Map([
                ...usersInStore,
                ...suggestionResult
            ].map(sugg => [sugg.idUser, sugg])).values()]
        })
    })),
    withMethods((
        store,
        userGateway = inject(UserGateway),
        conversGateway = inject(ConversGateway),
        profileStore = inject(ProfileStore),
        router = inject(Router),
        pbService = inject(BreakpointService),
        conversSocketGateway = inject(ConversSocketGateway)
    ) => {
        let sub: Subscription

        const patchOneConvers = (convers: ConversEntity) => {
            patchState(store, setEntity(convers))
        }

        const resetUnreadCount = (idConvers: TUniqId) => {
            const myId = profileStore.profile()?.id
            let toUpdated = store.entities().find(c => c.id === idConvers)
            if(toUpdated && myId) {
                const participants = toUpdated.participants.map(p => {
                    p.idUser === myId
                        ? p.unreadCount = 0
                        : null
                    return p
                })
                toUpdated = {...toUpdated, participants}
                patchState(store, setEntity(toUpdated))
            }
        }

        const searchConvers = rxMethod<string>(
            pipe(
                debounceTime(400),
                tap(key => { 
                    patchState(store, {searchKey: key})
                }),
                switchMap(key => conversGateway.searchByName(key)),
                tap(convers => {
                    patchState(store, setEntities(convers))
                })
            )
        )

        const searchSuggestions = rxMethod<string>(
            pipe(
                debounceTime(400),
                tap(key => { 
                    patchState(store, {searchKey: key})
                }),
                switchMap(key => userGateway.searchByName(key)),
                tap(users => {
                    const suggestions = users.map(user => ({
                        idUser: user.id,
                        name: user.name,
                        urlAvatar: user.urlAvatar,
                        isOnline: user.isOnline
                    }))

                    patchState(store, {suggestionResult: suggestions})
                })
            )
        )

        const startConvers = rxMethod<TSuggestion>(
            pipe(
                debounceTime(300),
                tap(sugg => {
                    const idUser = sugg.idUser
                    const existingConvers = store.entities().find(convers =>
                        convers.type === "private" &&
                        convers.participants.map(p => p.idUser).includes(idUser)
                    )
                    const url = pbService.isMobile() ? './mobile' : '.'

                    if(existingConvers) {
                        router.navigate([`${url}/convers/`, existingConvers.id])
                    } else of(idUser)
                        .pipe(switchMap(idUser => conversGateway.findByIdUser(idUser)))
                        .subscribe(convers => {
                            if(convers) router.navigate([`${url}/convers/`, convers.id])
                            else {
                                console.log('new convers', sugg)
                                patchState(store, {newConversUser: sugg})
                                router.navigate([`${url}/convers/new/`])
                            }
                        })
                }),
            )
        )

        const createWithNewMsg = rxMethod<{idUser: TUniqId, msgContent: string}> (
            pipe(
                exhaustMap(data => conversGateway.createWithNewMsg(data.idUser, data.msgContent)),
                tap(convers => {
                    patchState(store, setEntity(convers))
                    const url = pbService.isMobile() ? './mobile' : '.'
                    router.navigate([`${url}/convers`, convers.id])
                })
            )
        )

        const listenUpdateConvers = () => {
            sub = conversSocketGateway.on().subscribe(convers => {
                patchState(store, setEntity(convers))
            })
        }

        const emitUnreadCountTo0 = (convers: ConversEntity, idUser: TUniqId) => {
            // mise à jour immediat de la list côté store (front)
            const entity = store.entities().find(c => c.id === convers.id)
            if(!entity) return
            const participants = entity.participants.map(p => {
                if(p.idUser === idUser) p.unreadCount = 0
                return p
            })
            entity.participants = participants
            patchState(store, setEntity(entity))

            // emettre via websocket la mise à jour
            conversSocketGateway.emit('unread-count-to-0', { convers: entity, idUser})
        }

        const unsubscribe = () => {
            sub.unsubscribe()
        }

        return  {patchOneConvers, resetUnreadCount, createWithNewMsg, searchSuggestions, searchConvers, startConvers, listenUpdateConvers, emitUnreadCountTo0, unsubscribe}
    })
)