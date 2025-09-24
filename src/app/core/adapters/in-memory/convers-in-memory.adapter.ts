import { Observable, of } from "rxjs";
import { TUniqId } from "../../../shared/types/uniq-id.type";
import { ConversEntity } from "../../entities/convers.entity";
import { ConversGateway } from "../../ports/convers.gateway";

export class ConversInMemoryAdapter extends ConversGateway {

    convers: ConversEntity[] = []

    withConvers(convers: ConversEntity[]) {
        this.convers = convers
        return this
    }

    override retrieveAll(): Observable<ConversEntity[]> {
        return of(this.convers)
    }

    override retrieveOne(id: TUniqId): Observable<ConversEntity | null> {
        const convers = this.convers.find(chat => chat.id == id)
        return of(convers ?? null)
    }

    override update(data: Partial<ConversEntity>, id: string): Observable<ConversEntity> {
        this.convers = this.convers.map(chat => chat.id == id
            ? ({...chat, ...data})
            : chat
        )
        const convers = this.convers.find(chat => chat.id == id)
        if(convers) return of(convers)
        else throw new Error('categ not found')
    }

    override addNew(data: Partial<ConversEntity>): Observable<ConversEntity> {
        const newConvers: ConversEntity = {
            id: "",
            name: null,
            type: "private",
            urlAvatar: null,
            participants: [],
            lastMsg: null,
            createdAt: new Date(),
            createdBy: "",
            updatedAt: null,
            updatedBy: null,
            ...data
        }
        this.convers.push(newConvers)
        return of(newConvers)
    }

    override remove(id: string): Observable<void> {
        this.convers = this.convers.filter(chat => chat.id !== id)
        return of()
    }

}