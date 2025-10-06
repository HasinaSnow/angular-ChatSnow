import { BehaviorSubject, map, Observable, of } from "rxjs";
import { TUniqId } from "../../../shared/types/uniq-id.type";
import { ConversEntity, generateConvers, RandomConversEntity, RandomConversLstMsg, RandomConversPrtcipant } from "../../entities/convers.entity";
import { ConversGateway } from "../../ports/convers.gateway";
import { _FAKE_DATA_CONVERS, _FAKE_DATA_MSGS, _FAKE_DATA_USERS, _ID_USER_AUTH } from "../../data/fake.data";
import { MsgEntity, randomMsgEntity } from "../../entities/msg.entity";

export class ConversInMemoryAdapter extends ConversGateway {

    convers!: BehaviorSubject<ConversEntity[]>

    withConvers(convers: BehaviorSubject<ConversEntity[]>) {
        this.convers = convers
        return this
    }

    override retrieveAll(): Observable<ConversEntity[]> {
        return of(this.convers.getValue()).pipe(
            map(convers => {
                const msgs = _FAKE_DATA_MSGS.getValue()
                return convers.map<ConversEntity>(c => {
                    const lastMsg = msgs.filter(m => m.idConvers === c.id).reduce((p, n) => p.timestamp > n.timestamp ? p : n)
                    return {
                        ...c,
                        lastMsg: {
                            idMsg: lastMsg.id,
                            authorId: lastMsg.author,
                            content: lastMsg.content,
                            authorName: c.participants.find(p => p.idUser === lastMsg.author)?.name ?? '',
                            createdAt: lastMsg.timestamp
                        }
                    }
                })
            })
        )
    }

    override findByIdUser(idUser: TUniqId): Observable<ConversEntity | null> {
        return of(this.convers.getValue()
            .find(c => 
                c.type === 'private' 
                && c.participants.map(p => p.idUser).includes(idUser)
            ) ?? null)
    }

    override searchByName(key: string): Observable<ConversEntity[]> {
        return of(this.convers.getValue().filter(convers => convers.name?.includes(key)))
    }

    override retrieveOne(id: TUniqId): Observable<ConversEntity | null> {
        return of(this.convers.getValue()).pipe(
            map(convers => convers
                .find(c => c.id === id) ?? null
            )
        )
    }

    override createWithNewMsg(idUser: TUniqId, msgContent: string): Observable<ConversEntity> {
        const conversList = _FAKE_DATA_CONVERS.getValue()
        const users = _FAKE_DATA_USERS.getValue()
        const msgs = _FAKE_DATA_MSGS.getValue()

        const user = users.find(user => user.id === idUser)
        const myId = _ID_USER_AUTH.getValue()
        const me = users.find(user => user.id === myId)
        if(myId && me && user) {
            const newMsg = randomMsgEntity({
                author: myId,
                content: msgContent,
                emojiReactions: [],
                type: 'text',
                replyToMsg: null,
                attachments: [],
                timestamp: new Date()
            })

            const newConvers = RandomConversEntity({
                name: null,
                type: "private",
                urlAvatar: null,
                exParticipants: [],
                participants: [me, user].map(u => RandomConversPrtcipant({
                    idUser: u.id,
                    urlAvatar: u.urlAvatar,
                    unreadCount: 0,
                    name: u.name
                })),
                lastMsg: RandomConversLstMsg({
                    idMsg: newMsg.id,
                    content: newMsg.content,
                    authorName: users.find(user => user.id === newMsg.author)?.name ?? 'user not found',
                    authorId: newMsg.author,
                    createdAt: newMsg.timestamp
                }),
                createdAt: new Date(),
                createdBy: myId,
            })

            newMsg.idConvers = newConvers.id
            _FAKE_DATA_CONVERS.next([...conversList, newConvers])
            _FAKE_DATA_MSGS.next([...msgs, newMsg])

            return of(newConvers)
        }
        else {
            throw new Error('id user auth not initialized..')
        }
    }

    override update(data: Partial<ConversEntity>, id: string): Observable<ConversEntity> {
        const convers = this.convers.getValue().map(c => c.id === id
            ? ({...c, ...data})
            : c
        )
        const existingConvers = convers.find(conv => conv.id === id)
        if(existingConvers) {
            this.convers.next(convers)
            return of(existingConvers)
        } else throw new Error('Conversation not found')
    }

    override addNew(data: Partial<ConversEntity>): Observable<ConversEntity> {
        const newConvers: ConversEntity = RandomConversEntity({createdAt: new Date(), ...data})
        const current = this.convers.getValue()
        current.push(newConvers)
        this.convers.next(current)
        return of(newConvers)
    }

    override remove(id: string): Observable<void> {
        const current = this.convers.getValue().filter(c => c.id !== id)
        this.convers.next(current)
        return of()
    }

}