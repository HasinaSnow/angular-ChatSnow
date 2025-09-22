import { Observable } from "rxjs";
import { TUniqId } from "../../shared/types/uniq-id.type";
import { UserEntity } from "../entities/user.entity";
import { Gateway } from "./gateway";

export abstract class UserGateway extends Gateway<UserEntity, Partial<UserEntity>, Partial<UserEntity>> {
    abstract retrieveByIds(ids: TUniqId[]): Observable<UserEntity[]>
    abstract searchByName(key: string): Observable<UserEntity[]>
}