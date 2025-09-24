import { Observable } from "rxjs";
import { UserEntity } from "../entities/user.entity";

export abstract class ProfileGateway {
    abstract get(): Observable<UserEntity>
    abstract update(data: Partial<UserEntity>): Observable<UserEntity>
}