import { faker } from "@faker-js/faker";
import { ConversEntity, IConversPrtcipant, RandomConversEntity, RandomConversPrtcipant } from "../entities/convers.entity";
import { RandomUserEntity, UserEntity } from "../entities/user.entity";
import { RandomOnlineUserEntity } from "../entities/online-user.entity";

export let _FAKE_DATA_USERS = RandomUserEntity({urlAvatar: './images/pdp1.jpg'}, 10) as UserEntity[]
export let participants = _FAKE_DATA_USERS.map(user => RandomConversPrtcipant({idUser: user.id, name: user.name, urlAvatar: user.urlAvatar})) as IConversPrtcipant[]
export let _FAKE_DATA_CONVERS = RandomConversEntity({urlAvatar: './images/pdp1.jpg'}, 10, participants) as ConversEntity[]
export const _FAKE_RANDOM_ONLINE_USERS = () => faker.helpers.arrayElements(_FAKE_DATA_USERS
    .map(user => RandomOnlineUserEntity({
        id: user.id,
        name: user.name,
        urlAvatar: user.urlAvatar
    }) as UserEntity
), 5)


export function pushUserInData(newUser: UserEntity) {
    _FAKE_DATA_USERS.push(newUser)
    const newPrtcipant = RandomConversPrtcipant({idUser: newUser.id, name: newUser.name, urlAvatar: newUser.urlAvatar}) as IConversPrtcipant
    pushPrtcipantInConvers(newPrtcipant)
}

export function pushPrtcipantInConvers(newPartcipant: IConversPrtcipant) {
    _FAKE_DATA_CONVERS.map(convers => {
        convers.participants.pop()
        convers.participants.push(newPartcipant)
        return convers
    })
}