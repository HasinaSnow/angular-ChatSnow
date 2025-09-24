import { delay, mergeMap, Observable, of, throwError, timer } from "rxjs";
import { UserEntity } from "../../entities/user.entity";
import { ProfileGateway } from "../../ports/profile.gateway"
import { DelayMs } from "../../../shared/helpers/delayMs";

export class ProfileInMemoryAdpater extends ProfileGateway {

    profile: UserEntity|null = null

    withProfile(user: UserEntity) {
        this.profile = user
        return this
    }

    override get(): Observable<UserEntity> {
        return !this.profile
            ? timer(DelayMs).pipe(mergeMap(() => throwError(() => new Error('User Profile not found')).pipe(delay(DelayMs))))
            : of(this.profile).pipe(delay(DelayMs))
    }

    override update(data: Partial<UserEntity>): Observable<UserEntity> {
        return !this.profile
            ? timer(DelayMs).pipe(mergeMap(() => throwError(() => new Error('User Profile not found')).pipe(delay(DelayMs))))
            : of({...this.profile, ...data})

    }

}