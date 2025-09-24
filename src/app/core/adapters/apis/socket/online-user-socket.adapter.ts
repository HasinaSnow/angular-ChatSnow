import { Observable } from "rxjs";
import { SocketGateway } from "../../ports/socket.gateway";
import { UserEntity } from "../../entities/user.entity";

export class OnlineUserSocketAdapter extends SocketGateway<UserEntity[]> {
    override emit(eventName: string, data: any): void {
        throw new Error("Method not implemented.");
    }

    override on(): Observable<UserEntity[]> {
        throw new Error("Method not implemented.");
    }

}