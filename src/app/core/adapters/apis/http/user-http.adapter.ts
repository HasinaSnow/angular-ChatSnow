import { Observable } from "rxjs";
import { TUniqId } from "../../../../shared/types/uniq-id.type";
import { UserEntity } from "../../../entities/user.entity";
import { UserGateway } from "../../../ports/user.gateway";

export class UserHttpAdapter extends UserGateway {

    override searchByName(key: string): Observable<UserEntity[]> {
        throw new Error("Method not implemented.");
    }
    override retrieveByIds(ids: TUniqId[]): Observable<UserEntity[]> {
        throw new Error("Method not implemented.");
    }
    override retrieveAll(): Observable<UserEntity[]> {
        throw new Error("Method not implemented.");
    }
    override retrieveOne(id: TUniqId): Observable<UserEntity | null> {
        throw new Error("Method not implemented.");
    }
    override update(data: Partial<UserEntity>, id: string): Observable<UserEntity> {
        throw new Error("Method not implemented.");
    }
    override addNew(data: Partial<UserEntity>): Observable<UserEntity> {
        throw new Error("Method not implemented.");
    }
    override remove(id: string): Observable<void> {
        throw new Error("Method not implemented.");
    }

}