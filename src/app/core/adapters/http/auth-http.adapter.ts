import { Observable } from "rxjs";
import { LoginEntity } from "../../entities/login.entity";
import { AuthGateway } from "../../ports/auth.gateway";

export class AuthHttpAdapter extends AuthGateway {

    override login(email: string, password: string): Observable<LoginEntity> {
        throw new Error("Method not implemented.");
    }
    override register(name: string, email: string, password: string): Observable<null> {
        throw new Error("Method not implemented.");
    }

}