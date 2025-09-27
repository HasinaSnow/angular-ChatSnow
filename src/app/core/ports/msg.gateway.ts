import { Observable } from "rxjs";
import { TUniqId } from "../../shared/types/uniq-id.type";
import { MsgEntity } from "../entities/msg.entity";
import { Gateway } from "./gateway";

export abstract class MsgGateway extends Gateway<MsgEntity, Partial<MsgEntity>, Partial<MsgEntity>> {
    abstract retrieveByIdConvers(conversId: TUniqId): Observable<MsgEntity[]>
}