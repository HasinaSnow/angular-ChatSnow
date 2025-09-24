import { faker } from "@faker-js/faker";
import { TUniqId } from "../../shared/types/uniq-id.type";

export interface OnlineUserEntity {
    id: TUniqId,
    name: string,
    urlAvatar: string|null
}

export function RandomOnlineUserEntity(fields: Partial<OnlineUserEntity>, count?: number): OnlineUserEntity|OnlineUserEntity[] {
    const random = (): OnlineUserEntity => ({
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        urlAvatar: null,
        ...fields
    })
    if(count) {
        let arrays = [] as OnlineUserEntity[]
        for (let i = 0; i < count; i++) arrays.push(random())
        return arrays
    } else return random()
}