import { Observable } from "rxjs";
import { UserEntity } from "../../../entities/user.entity";
import { SocketGateway } from "../../../ports/socket.gateway";

export class UserSocketAdapter extends SocketGateway<UserEntity[]> {
    override emit(eventName: string, data: any): void {
        throw new Error("Method not implemented.");
    }

    override on(): Observable<UserEntity[]> {
        throw new Error("Method not implemented.");
    }

}