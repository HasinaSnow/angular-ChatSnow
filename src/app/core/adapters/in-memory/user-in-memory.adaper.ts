import { BehaviorSubject, map, Observable, of } from "rxjs";
import { TUniqId } from "../../../shared/types/uniq-id.type";
import { UserEntity } from "../../entities/user.entity";
import { UserGateway } from "../../ports/user.gateway";

export class UserInMemoryAdapter extends UserGateway {

    users!: BehaviorSubject<UserEntity[]>

    withUsers(users: BehaviorSubject<UserEntity[]>) {
        this.users = users
        return this
    }

    override retrieveByIds(ids: TUniqId[]): Observable<UserEntity[]> {
        return this.users.asObservable().pipe(
            map(users => users.
                filter(user => ids.includes(user.id))
            )
        )
    }

    override searchByName(key: string): Observable<UserEntity[]> {
        return this.users.asObservable().pipe(
            map(users => users
                .filter(user => user.name.includes(key))
            )
        )
    }

    override retrieveAll(): Observable<UserEntity[]> {
        return of([] as UserEntity[])
    }

    override retrieveOne(id: TUniqId): Observable<UserEntity | null> {
        return this.users.asObservable().pipe(
            map(users => users
                .find(user => user.id === id) ?? null
            )
        )
    }

    override update(data: Partial<UserEntity>, id: string): Observable<UserEntity> {
        const users = this.users.getValue().map(user => user.id === id
            ? ({...user, ...data})
            : user
        )
        const user = users.find(user => user.id === id)
        if(user) {
            this.users.next(users)
            return of(user)
        } else throw new Error('User not found')
    }

    override addNew(data: Partial<UserEntity>): Observable<UserEntity> {
        const newUser: UserEntity = {
            id: "",
            name: "",
            email: "",
            urlAvatar: '',
            avatarName: '',
            isOnline: false,
            authTokenIds: [],
            lastSeen: null,
            emailVerified: false,
            createdAt: new Date(),
            updatedAt: null,
            ...data
        }
        const current = this.users.getValue()
        current.push(newUser)
        this.users.next(current)
        return of(newUser)
    }

    override remove(id: string): Observable<void> {
        const current = this.users.getValue().filter(user => user.id !== id)
        this.users.next(current)
        return of()
    }

}