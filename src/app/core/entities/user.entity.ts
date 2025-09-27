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

export function RandomUserEntity(fields?: Partial<UserEntity>): UserEntity {
    const isOnline = faker.datatype.boolean()
    return {
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        email: faker.internet.email(),
        urlAvatar: './images/pdp1.jpg',
        avatarName: '',
        isOnline: isOnline,
        authTokenIds: [],
        lastSeen: isOnline ? null : faker.date.recent(),
        emailVerified: true,
        createdAt: faker.date.recent(),
        updatedAt: null,
        ...fields
    }
}

export function generateUsers(count: number, currentUser: {name: string, email: string}) : UserEntity[] {
    const users = Array.from({length: count}, () => RandomUserEntity())
    if(currentUser)
        users.push(RandomUserEntity({name: currentUser.name, email: currentUser.email, createdAt: new Date()}))
    return users
}


