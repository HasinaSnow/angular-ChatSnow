import { RandomUserEntity, UserEntity } from "../../entities/user.entity";
import { delay, mergeMap, Observable, of, throwError, timer } from "rxjs";
import { _FAKE_DATA_CONVERS, _FAKE_DATA_MSGS, _FAKE_DATA_USERS, generateDataUsers } from "../../data/fake.data";
import { faker } from "@faker-js/faker";
import { LoginEntity } from "../../entities/login.entity";
import { AuthGateway } from "../../ports/auth.gateway";
import { DelayMs } from "../../../shared/helpers/delayMs";

type TAccounts = {
    name: string,
    email: string,
    password: string
}

export class AuthInMemoryAdapter extends AuthGateway {

    accounts: TAccounts[] = []

    withAccounts(accounts: TAccounts[]) {
        this.accounts = accounts
        return this
    }

    register(name: string, email: string, password: string): Observable<null> {
        const userExists = this.accounts.find(account => account.email === email)
        if(userExists)
            return timer(DelayMs).pipe(mergeMap(() => throwError(() => new Error('user account already existing')).pipe(delay(DelayMs))))
        else {
            this.accounts.push({name, email, password})
            generateDataUsers(10, {name, email})
            return of(null).pipe(delay(DelayMs))
        }
    }

    login(email: string, password: string): Observable<LoginEntity> {
        const userExists = this.accounts.find(account => account.email === email)
        if(!userExists || userExists.password !== password)
            return timer(DelayMs).pipe(mergeMap(() => throwError(() => new Error('invalid credentials')).pipe(delay(DelayMs))))
        else {
            const profile = _FAKE_DATA_USERS.getValue().find(user => user.email === email)
            console.log('fake users => ', profile)
            if(!profile)
            return timer(DelayMs).pipe(mergeMap(() => throwError(() => new Error('internal error, profile not found')).pipe(delay(DelayMs))))
            const result: LoginEntity = {
                user: profile,
                accessToken: faker.string.uuid(),
                refreshToken: faker.string.uuid()
            }
            return of(result).pipe(delay(DelayMs))
        }
    }

}