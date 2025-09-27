import { ConversEntity, generateConvers,  } from "../entities/convers.entity";
import { generateUsers, UserEntity } from "../entities/user.entity";
import { generateMsgs, MsgEntity } from "../entities/msg.entity";
import { TUniqId } from "../../shared/types/uniq-id.type";
import { BehaviorSubject } from "rxjs";

export const _FAKE_DATA_USERS = new BehaviorSubject<UserEntity[]>([])
export const _FAKE_DATA_CONVERS = new BehaviorSubject<ConversEntity[]>([])
export const _FAKE_DATA_MSGS = new BehaviorSubject<MsgEntity[]>([])
export const _ID_USER_AUTH = new BehaviorSubject<TUniqId|null>(null)

export function generateDataUsers(count: number, userRegister: {name: string, email: string}) {
    _FAKE_DATA_USERS.next(generateUsers(count, {name: userRegister.name, email: userRegister.email}))
    const idAuth = _FAKE_DATA_USERS.getValue().find(user => user.email === userRegister.email)?.id
    _FAKE_DATA_CONVERS.next(generateConvers(_FAKE_DATA_USERS.getValue(), count, idAuth ?? ''))
    const convers = _FAKE_DATA_CONVERS.getValue()
    _FAKE_DATA_MSGS.next(generateMsgs(convers))

}