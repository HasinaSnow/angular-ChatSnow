import { interval, map, Observable, switchMap } from "rxjs";
import { SocketGateway } from "../../ports/socket.gateway";
import { _FAKE_DATA_USERS } from "../../data/fake.data";
import { RandomUserEntity, UserEntity } from "../../entities/user.entity";
import { faker } from "@faker-js/faker";

export class UserSocketInMemoryAdapter extends SocketGateway<UserEntity[]> {

    emit(eventName: string, data: any): void {
        throw new Error("Method not implemented.");
    }

    on(): Observable<UserEntity[]> {
        return _FAKE_DATA_USERS.asObservable().pipe(
            switchMap(users => interval(4000)
                .pipe(map(_ => users
                    .map(user => RandomUserEntity({
                        ...user,
                        isOnline: faker.datatype.boolean({probability: 0.6})
                    }))
                )))
        )
    }

}