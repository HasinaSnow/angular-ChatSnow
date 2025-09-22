import { Observable, of } from "rxjs";
import { TUniqId } from "../../../shared/types/uniq-id.type";
import { UserEntity } from "../../entities/user.entity";
import { UserGateway } from "../../ports/user.gateway";

export class UserInMemoryAdapter extends UserGateway {

    users: UserEntity[] = []

    withUsers(users: UserEntity[]) {
        this.users = users
        return this
    }

    override retrieveByIds(ids: TUniqId[]): Observable<UserEntity[]> {
        return of(this.users.filter(user => ids.includes(user.id)))
    }

    override searchByName(key: string): Observable<UserEntity[]> {
        return of(this.users.filter(user => user.name.includes(key)))
    }
    override retrieveAll(): Observable<UserEntity[]> {
        return of([] as UserEntity[])
    }

    override retrieveOne(id: TUniqId): Observable<UserEntity | null> {
        const user = this.users.find(user => user.id === id)
        return of(user ?? null)
    }

    override update(data: Partial<UserEntity>, id: string): Observable<UserEntity> {
        this.users = this.users.map(user => user.id === id
            ? ({...user, ...data})
            : user
        )
        const user = this.users.find(user => user.id === id)
        if(user) return of(user)
        else throw new Error('User not found')
    }

    override addNew(data: Partial<UserEntity>): Observable<UserEntity> {
        const newUser: UserEntity = {
            id: "",
            name: "",
            email: "",
            urlAvatar: null,
            avatarName: null,
            isOnline: false,
            authTokenIds: [],
            lastSeen: null,
            emailVerified: false,
            createdAt: new Date(),
            updatedAt: null,
            ...data
        }
        this.users.push(newUser)
        return of(newUser)
    }

    override remove(id: string): Observable<void> {
        this.users = this.users.filter(user => user.id !== id)
        return of()
    }

}