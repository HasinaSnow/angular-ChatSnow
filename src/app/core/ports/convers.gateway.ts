import { Observable } from "rxjs";
import { ConversEntity } from "../entities/convers.entity";
import { Gateway } from "./gateway";
import { TUniqId } from "../../shared/types/uniq-id.type";

export abstract class ConversGateway extends Gateway<ConversEntity, Partial<ConversEntity>, Partial<ConversEntity>> {
    abstract searchByName(key: string): Observable<ConversEntity[]>
    abstract findByIdUser(idUser: TUniqId): Observable<ConversEntity|null>
    abstract createWithNewMsg(idUser: TUniqId, msgcontent: string): Observable<ConversEntity>
}