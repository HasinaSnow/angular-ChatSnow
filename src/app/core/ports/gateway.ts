import { Observable } from "rxjs";
import { TUniqId } from "../../shared/types/uniq-id.type";

export abstract class Gateway<entity, dataCreate, dataUpdate> {
    abstract retrieveAll(): Observable<entity[]>
    abstract retrieveOne(id: TUniqId): Observable<entity|null>
    abstract update(data: dataUpdate, id: string): Observable<entity>
    abstract addNew(data: dataCreate): Observable<entity>
    abstract remove(id: string): Observable<void>
}