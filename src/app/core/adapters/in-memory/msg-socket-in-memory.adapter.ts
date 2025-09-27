import { interval, map, Observable, switchMap } from "rxjs";
import { generateMsgs, MsgEntity } from "../../entities/msg.entity";
import { SocketGateway } from "../../ports/socket.gateway";
import { _FAKE_DATA_CONVERS } from "../../data/fake.data";

export class MsgSocketInMemoryAdapter extends SocketGateway<MsgEntity> {

    override emit(eventName: string, data: any): void {
        throw new Error("Method not implemented.");
    }

    override on(): Observable<MsgEntity> {
        return _FAKE_DATA_CONVERS.asObservable().pipe(
            switchMap(convers => interval(4000)
                .pipe(map(_ => generateMsgs(convers)[0]))
            ))
    }

}