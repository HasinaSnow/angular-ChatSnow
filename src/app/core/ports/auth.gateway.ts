import { Observable } from "rxjs";
import { LoginEntity } from "../entities/login.entity";

export abstract class AuthGateway {
    abstract register(name: string, email: string, password: string): Observable<null>
    abstract login(email: string, password: string): Observable<LoginEntity>
}