import { faker } from "@faker-js/faker";
import { TUniqId } from "../../shared/types/uniq-id.type";

export interface UserEntity {
    id: TUniqId;
    name: string;
    email: string;
    urlAvatar: string | null;
    avatarName: string | null;
    isOnline: boolean;
    authTokenIds: string[];
    lastSeen: Date | null;
    emailVerified: boolean;
    createdAt: Date;
    updatedAt: Date | null;
};

export function RandomUserEntity(fields: Partial<UserEntity>, count?: number): UserEntity|UserEntity[] {
    const isOnline = faker.datatype.boolean()
    if(count) {
        let arrays = [] as UserEntity[]
        for (let i = 0; i < count; i++) {
            const recentDate = faker.date.recent()
            arrays.push({
                id: faker.string.uuid(),
                name: faker.person.fullName(),
                email: faker.internet.email(),
                urlAvatar: '',
                avatarName: '',
                isOnline: isOnline,
                authTokenIds: [],
                lastSeen: isOnline ? null : faker.date.recent(),
                emailVerified: true,
                createdAt: recentDate,
                updatedAt: new Date(recentDate.getFullYear(), recentDate.getMonth(), recentDate.getDay() + 1),
                ...fields
            })
        }
        return arrays
    } else {
        const recentDate = faker.date.recent()
        return {
            id: faker.string.uuid(),
            name: faker.person.fullName(),
            email: faker.internet.email(),
            urlAvatar: '',
            avatarName: '',
            isOnline: isOnline,
            authTokenIds: [],
            lastSeen: isOnline ? null : faker.date.recent(),
            emailVerified: true,
            createdAt: recentDate,
            updatedAt: new Date(recentDate.getFullYear(), recentDate.getMonth(), recentDate.getDay() + 1),
            ...fields
        }
    }
}
