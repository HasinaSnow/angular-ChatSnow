import { UserEntity } from "./user.entity";

export interface LoginEntity {
    user: UserEntity,
    accessToken: string,
    refreshToken: string
}