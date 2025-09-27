import { TUniqId } from "../../shared/types/uniq-id.type";
import { faker } from "@faker-js/faker"
import { UserEntity } from "./user.entity";

export interface ConversEntity {
    id: TUniqId
    name: string|null,
    type: 'private'|'group',
    urlAvatar: string|null,
    participants: IConversPrtcipant[],
    exParticipants: IConversPrtcipant[],
    lastMsg: IConversLastMsg|null,
    createdAt: Date,
    createdBy: TUniqId,
    updatedAt: Date|null
    updatedBy: TUniqId|null
}

export interface IConversPrtcipant {
    idUser: TUniqId,
    name: string,
    urlAvatar: string|null,
    unreadCount: number
}

export interface IConversLastMsg {
    idMsg: TUniqId,
    content: string,
    authorName: string,
    authorId: TUniqId,
    createdAt: Date
}

export function RandomConversPrtcipant(fields?: Partial<IConversPrtcipant>): IConversPrtcipant {
    const randomUnreadCount = () => faker.number.int({min: 0, max: 15})
    return {
        idUser: faker.string.uuid(),
        urlAvatar: './images/pdp1.jpg',
        unreadCount: randomUnreadCount(),
        name: faker.person.fullName(),
        ...fields
    }

}

export function RandomConversLstMsg(fields?: Partial<IConversLastMsg>): IConversLastMsg {
    return {
        idMsg: faker.string.uuid(),
        content: faker.word.words(faker.number.int({min: 3, max: 30})),
        authorName: faker.person.fullName(),
        authorId: faker.string.uuid(),
        createdAt: faker.date.recent(),
        ...fields
    }
}

export function RandomConversEntity(
    fields: Partial<ConversEntity>,
): ConversEntity {
    return {
        id: faker.string.uuid(),
        name: null,
        type: 'private',
        urlAvatar: './images/pdp1.jpg',
        participants: [],
        exParticipants: [],
        lastMsg: null,
        createdAt: faker.date.recent(),
        createdBy: "",
        updatedAt: null,
        updatedBy: null,
        ...fields
    }
}

export function generateConvers(users: UserEntity[], count: number, currentUserId: TUniqId): ConversEntity[] {
    const allPartcipants: IConversPrtcipant[] = users.map(user => RandomConversPrtcipant({
        idUser: user.id,
        name: user.name
    }))

    return Array.from({length: count}, () => {
        const type = faker.helpers.arrayElement(['group','private'])
        const partcipants: IConversPrtcipant[] = type === 'private'
            ? faker.helpers.arrayElements(allPartcipants, 2)
            : faker.helpers.arrayElements(allPartcipants, {min: 3, max: 5})

        partcipants.pop()
        partcipants.unshift(allPartcipants.find(p => p.idUser === currentUserId) as IConversPrtcipant)
        return RandomConversEntity({
            participants: partcipants
        })
    })
}