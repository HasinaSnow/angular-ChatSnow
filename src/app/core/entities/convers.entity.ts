import { TUniqId } from "../../shared/types/uniq-id.type";
import { faker } from "@faker-js/faker"
import { UserEntity } from "./user.entity";

export interface ConversEntity {
    id: TUniqId
    name: string|null,
    type: 'private'|'group',
    urlAvatar: string|null,
    participants: IConversPrtcipant[],
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

export function RandomConversPrtcipant(fields?: Partial<IConversPrtcipant>, count?: number, randomUsers?: () => UserEntity[]): IConversPrtcipant|IConversPrtcipant[] {
    const random = (fields?: Partial<IConversPrtcipant>): IConversPrtcipant => ({
        idUser: faker.string.uuid(),
        urlAvatar: './images/pdp1.jpg',
        unreadCount: faker.number.int({min: 0, max: 15}),
        name: faker.person.fullName(),
        ...fields
    })
    if(count) {
        let arrays: IConversPrtcipant[] = []
        if(randomUsers) {
            const prtcipants = randomUsers().map(user => random({
                idUser: user.id,
                urlAvatar: user.urlAvatar,
                name: user.name
            }))
            for (let i = 0; i < count; i++) {
                const p = faker.helpers.arrayElement(prtcipants)
                arrays = [...arrays, p]
            }
        } else {
            for (let i = 0; i < count; i++) arrays.push(random(fields))
        }
        return arrays
    } else return random(fields)

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
    count?: number,
    randomPrtcipants?: IConversPrtcipant[]
): ConversEntity|ConversEntity[] {
    const type = () => faker.helpers.arrayElement(['group','private'])
    const random = (t: 'group'|'private'): ConversEntity => {
        let p = (count: number) => RandomConversPrtcipant({}, count)
        if(randomPrtcipants)
            p = (count: number) => faker.helpers.arrayElements(randomPrtcipants, count)
        return {
            id: faker.string.uuid(),
            name: t=== 'group' ? faker.person.fullName() : null,
            type: t,
            participants: t === 'private'
                ? p(2) as IConversPrtcipant[]
                : p(faker.number.int({min: 2, max: 10})) as IConversPrtcipant[],
            lastMsg: RandomConversLstMsg(),
            createdAt: faker.date.recent(),
            createdBy: faker.person.fullName(),
            urlAvatar: null,
            updatedAt: null,
            updatedBy: null,
            ...fields
        }
    }

    if(count) {
        let arrays = [] as ConversEntity[]
        for (let i = 0; i < count; i++) arrays.push(random(type())) 
        return arrays
    } else return random(type())

}
