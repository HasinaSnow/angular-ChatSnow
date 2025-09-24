import { faker } from "@faker-js/faker";
import { TUniqId } from "../../shared/types/uniq-id.type";

export interface UserEntity {
    id: TUniqId,
    name: string,
    email: string,
    urlAvatar: string | null,
    avatarName: string | null,
    isOnline: boolean,
    authTokenIds: string[],
    lastSeen: Date | null,
    emailVerified: boolean,
    createdAt: Date,
    updatedAt: Date | null,
};

export function RandomUserEntity(fields: Partial<UserEntity>, count?: number): UserEntity|UserEntity[] {
    const isOnline = () => faker.datatype.boolean()
    const random = (): UserEntity => ({
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        email: faker.internet.email(),
        urlAvatar: '',
        avatarName: '',
        isOnline: isOnline(),
        authTokenIds: [],
        lastSeen: isOnline() ? null : faker.date.recent(),
        emailVerified: true,
        createdAt: faker.date.recent(),
        updatedAt: null,
        ...fields
    })
    const recentDate = () => faker.date.recent()
    if(count) {
        let arrays = [] as UserEntity[]
        for (let i = 0; i < count; i++) {
            const recent = recentDate()
            arrays.push({...random(), ...{
                createdAt: recent,
                updatedAt: new Date(recent.getFullYear(), recent.getMonth(), recent.getDay() + 1)
            }})
        }
        return arrays
    } else return {
        ...random(),
        ...{
            createdAt: recentDate(),
            updatedAt: new Date(recentDate().getFullYear(), recentDate().getMonth(), recentDate().getDay() + 1)
        }
    }

}
