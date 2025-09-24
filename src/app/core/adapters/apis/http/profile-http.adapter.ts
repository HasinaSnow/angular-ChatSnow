import { Observable } from "rxjs";
import { TUniqId } from "../../../shared/types/uniq-id.type";
import { UserEntity } from "../../entities/user.entity";
import { ProfileGateway } from "../../ports/profile.gateway";

export class ProfileHttpAdapter extends ProfileGateway {

    override get(): Observable<UserEntity> {
        throw new Error("Method not implemented.");
    }
    override update(data: Partial<UserEntity>): Observable<UserEntity> {
        throw new Error("Method not implemented.");
    }
}