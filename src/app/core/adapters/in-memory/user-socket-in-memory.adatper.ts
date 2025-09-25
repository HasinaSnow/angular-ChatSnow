import { interval, map, Observable } from "rxjs";
import { SocketGateway } from "../../ports/socket.gateway";
import { _FAKE_RANDOM_STREAM_USERS } from "../../data/fake.data";
import { UserEntity } from "../../entities/user.entity";

export class UserSocketInMemoryAdapter extends SocketGateway<UserEntity[]> {

    emit(eventName: string, data: any): void {
        throw new Error("Method not implemented.");
    }

    on(): Observable<UserEntity[]> {
        return interval(4000).pipe(
            map(_ => _FAKE_RANDOM_STREAM_USERS())
        )
    }

}