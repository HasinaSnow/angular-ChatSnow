import { Observable } from "rxjs";
import { TUniqId } from "../../../shared/types/uniq-id.type";
import { ConversEntity } from "../../entities/convers.entity";
import { ConversGateway } from "../../ports/convers.gateway";

export class ConversHttpAdapter extends ConversGateway {

    override retrieveAll(): Observable<ConversEntity[]> {
        throw new Error("Method not implemented.");
    }
    override retrieveOne(id: TUniqId): Observable<ConversEntity | null> {
        throw new Error("Method not implemented.");
    }
    override update(data: Partial<ConversEntity>, id: string): Observable<ConversEntity> {
        throw new Error("Method not implemented.");
    }
    override addNew(data: Partial<ConversEntity>): Observable<ConversEntity> {
        throw new Error("Method not implemented.");
    }
    override remove(id: string): Observable<void> {
        throw new Error("Method not implemented.");
    }

}