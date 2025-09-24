import { faker } from "@faker-js/faker";
import { ConversEntity, IConversPrtcipant, RandomConversEntity, RandomConversPrtcipant } from "../entities/convers.entity";
import { RandomUserEntity, UserEntity } from "../entities/user.entity";
import { interval, map } from "rxjs";
import { RandomOnlineUserEntity } from "../entities/online-user.entity";

export let _FAKE_DATA_USERS = RandomUserEntity({urlAvatar: './images/pdp1.jpg'}, 10) as UserEntity[]
export let participants = _FAKE_DATA_USERS.map(user => RandomConversPrtcipant({idUser: user.id, name: user.name, urlAvatar: user.urlAvatar})) as IConversPrtcipant[]
export let _FAKE_DATA_CONVERS = RandomConversEntity({urlAvatar: './images/pdp1.jpg'}, 10, participants) as ConversEntity[]
export let _FAKE_DATA_USERS_ONLINE = interval(5000).pipe(
    map(i => {
        console.log('build online users')
        const buildOnlineUsers = faker.helpers.arrayElements(_FAKE_DATA_USERS
            .map(user => RandomOnlineUserEntity({
                id: user.id,
                name: user.name,
                urlAvatar: user.urlAvatar
            }) as UserEntity
        ), 5)
        return buildOnlineUsers
    })
)


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