import { TUniqId } from "../../shared/types/uniq-id.type";
import { faker } from "@faker-js/faker"

export interface ConversEntity {
    id: TUniqId
    name: string,
    type: 'private'|'group',
    participants: TUniqId[], //idUser
    lastMessageId?: TUniqId, // charger rapidement le dernier msg sans les charger toutes
    createdAt: Date,
    createdBy: TUniqId,
    updatedAt?: Date
    updatedBy?: TUniqId
}

export function RandomConversEntity(fields: Partial<ConversEntity>, count?: number): ConversEntity|ConversEntity[] {
    if(count) {
        let arrays = [] as ConversEntity[]
        for (let i = 0; i < count; i++) arrays.push({
            id: faker.string.uuid(),
            name: faker.person.fullName(),
            type: faker.helpers.arrayElement(['group','private']),
            participants: [faker.string.uuid()],
            createdAt: faker.date.recent(),
            createdBy: faker.person.fullName(),
            ...fields
        })
        return arrays
    }
    else return {
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        type: faker.helpers.arrayElement(['group','private']),
        participants: [faker.string.uuid()],
        createdAt: faker.date.recent(),
        createdBy: faker.person.fullName(),
        ...fields
    }

}
