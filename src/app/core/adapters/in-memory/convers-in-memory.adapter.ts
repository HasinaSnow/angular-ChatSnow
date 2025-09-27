import { BehaviorSubject, map, Observable, of } from "rxjs";
import { TUniqId } from "../../../shared/types/uniq-id.type";
import { ConversEntity } from "../../entities/convers.entity";
import { ConversGateway } from "../../ports/convers.gateway";

export class ConversInMemoryAdapter extends ConversGateway {

    convers!: BehaviorSubject<ConversEntity[]>

    withConvers(convers: BehaviorSubject<ConversEntity[]>) {
        this.convers = convers
        return this
    }

    override retrieveAll(): Observable<ConversEntity[]> {
        return this.convers.asObservable()
    }

    override retrieveOne(id: TUniqId): Observable<ConversEntity | null> {
        return this.convers.asObservable().pipe(
            map(convers => convers
                .find(c => c.id === id) ?? null
            )
        )
    }

    override update(data: Partial<ConversEntity>, id: string): Observable<ConversEntity> {
        const convers = this.convers.getValue().map(c => c.id === id
            ? ({...c, ...data})
            : c
        )
        const existingConvers = convers.find(conv => conv.id === id)
        if(existingConvers) {
            this.convers.next(convers)
            return of(existingConvers)
        } else throw new Error('Conversation not found')
    }

    override addNew(data: Partial<ConversEntity>): Observable<ConversEntity> {
        const newConvers: ConversEntity = {
            id: "",
            name: null,
            type: "private",
            urlAvatar: null,
            participants: [],
            exParticipants: [],
            lastMsg: null,
            createdAt: new Date(),
            createdBy: "",
            updatedAt: null,
            updatedBy: null,
            ...data
        }
        const current = this.convers.getValue()
        current.push(newConvers)
        this.convers.next(current)
        return of(newConvers)
    }

    override remove(id: string): Observable<void> {
        const current = this.convers.getValue().filter(c => c.id !== id)
        this.convers.next(current)
        return of()
    }

}