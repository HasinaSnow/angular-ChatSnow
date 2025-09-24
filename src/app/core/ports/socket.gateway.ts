import { Observable } from "rxjs";

export abstract class SocketGateway<T> {
    protected socket = 'new socket'

    abstract emit(eventName: string, data: any): void
    abstract on(): Observable<T>
}