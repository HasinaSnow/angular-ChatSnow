import { Observable } from "rxjs";
import { MsgEntity } from "../../entities/msg.entity";
import { SocketGateway } from "../../ports/socket.gateway";
import { _FAKE_DATA_CONVERS, _FAKE_DATA_MSGS, listenMsg } from "../../data/fake.data";

export class MsgSocketInMemoryAdapter extends SocketGateway<MsgEntity> {

    override emit(eventName: string, data: any): void {
        throw new Error("Method not implemented.");
    }

    override on(): Observable<MsgEntity> {
        return listenMsg
    }

}