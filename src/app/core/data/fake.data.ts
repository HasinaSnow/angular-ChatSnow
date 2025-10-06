import { ConversEntity, generateConvers,  } from "../entities/convers.entity";
import { generateUsers, UserEntity } from "../entities/user.entity";
import { generateMsgs, MsgEntity } from "../entities/msg.entity";
import { TUniqId } from "../../shared/types/uniq-id.type";
import { BehaviorSubject, interval, map, share, switchMap, tap } from "rxjs";
import { faker } from "@faker-js/faker";

export const _FAKE_DATA_USERS = new BehaviorSubject<UserEntity[]>([])
export const _FAKE_DATA_CONVERS = new BehaviorSubject<ConversEntity[]>([])
export const _FAKE_DATA_MSGS = new BehaviorSubject<MsgEntity[]>([])
export const _ID_USER_AUTH = new BehaviorSubject<TUniqId|null>(null)

export function generateDataUsers(count: number, userRegister: {name: string, email: string}) {
    _FAKE_DATA_USERS.next(generateUsers(count, {name: userRegister.name, email: userRegister.email}))
    const idAuth = _FAKE_DATA_USERS.getValue().find(user => user.email === userRegister.email)?.id
    _ID_USER_AUTH.next(idAuth ?? null)
    _FAKE_DATA_CONVERS.next(generateConvers(_FAKE_DATA_USERS.getValue(), count, idAuth ?? ''))
    const convers = _FAKE_DATA_CONVERS.getValue()
    _FAKE_DATA_MSGS.next(generateMsgs(convers))

}

export const listenMsg = _ID_USER_AUTH.pipe(
    switchMap(idAuth => interval(7000).pipe(
        map(_ => {
            const convers = _FAKE_DATA_CONVERS.getValue()
            return generateMsgs(convers)[faker.number.int({min: 0, max: 8})]
        }),
        // optimiser le tableau de tous les msgs en mémoire 
        tap(msg => {
            console.log('push[newMsg]')
            let allMsgs = _FAKE_DATA_MSGS.getValue()
            const allMsgsByIdConvers = allMsgs
                .filter(m => m.idConvers === msg.idConvers)
                .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime())
            if(allMsgsByIdConvers.length > 10) {
                const idMsgToRemoved = allMsgsByIdConvers.shift()?.id ?? ''
                allMsgs = allMsgs.filter(msg => msg.id !== idMsgToRemoved)
            }
            allMsgs.push(msg)
            _FAKE_DATA_MSGS.next(allMsgs)
        }),
    )),
    share() // partager le même valeur de retour pour chaque abonnés
)