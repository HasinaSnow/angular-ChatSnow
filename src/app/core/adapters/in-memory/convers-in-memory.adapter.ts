import { BehaviorSubject, map, Observable, of } from "rxjs";
import { TUniqId } from "../../../shared/types/uniq-id.type";
import { ConversEntity, RandomConversEntity } from "../../entities/convers.entity";
import { ConversGateway } from "../../ports/convers.gateway";
import { _FAKE_DATA_MSGS } from "../../data/fake.data";

export class ConversInMemoryAdapter extends ConversGateway {

    convers!: BehaviorSubject<ConversEntity[]>

    withConvers(convers: BehaviorSubject<ConversEntity[]>) {
        this.convers = convers
        return this
    }

    override retrieveAll(): Observable<ConversEntity[]> {
        return of(this.convers.getValue()).pipe(
            map(convers => {
                const msgs = _FAKE_DATA_MSGS.getValue()
                return convers.map<ConversEntity>(c => {
                    const lastMsg = msgs.filter(m => m.idConvers === c.id).reduce((p, n) => p.timestamp > n.timestamp ? p : n)
                    return {
                        ...c,
                        lastMsg: {
                            idMsg: lastMsg.id,
                            authorId: lastMsg.author,
                            content: lastMsg.content,
                            authorName: c.participants.find(p => p.idUser === lastMsg.author)?.name ?? '',
                            createdAt: lastMsg.timestamp
                        }
                    }
                })
            })
        )
    }

    override retrieveOne(id: TUniqId): Observable<ConversEntity | null> {
        return of(this.convers.getValue()).pipe(
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
        const newConvers: ConversEntity = RandomConversEntity({createdAt: new Date(), ...data})
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