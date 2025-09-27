import { Observable } from "rxjs";
import { TUniqId } from "../../../../shared/types/uniq-id.type";
import { MsgEntity } from "../../../entities/msg.entity";
import { MsgGateway } from "../../../ports/msg.gateway";

export class MsgAdapter extends MsgGateway {
    override retrieveByConversId(conversId: TUniqId): Observable<MsgEntity[]> {
        throw new Error("Method not implemented.");
    }
    override retrieveAll(): Observable<MsgEntity[]> {
        throw new Error("Method not implemented.");
    }
    override retrieveOne(id: TUniqId): Observable<MsgEntity | null> {
        throw new Error("Method not implemented.");
    }
    override update(data: Partial<MsgEntity>, id: string): Observable<MsgEntity> {
        throw new Error("Method not implemented.");
    }
    override addNew(data: Partial<MsgEntity>): Observable<MsgEntity> {
        throw new Error("Method not implemented.");
    }
    override remove(id: string): Observable<void> {
        throw new Error("Method not implemented.");
    }

}