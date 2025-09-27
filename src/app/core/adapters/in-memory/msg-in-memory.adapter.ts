import { BehaviorSubject, map, Observable, of } from "rxjs";
import { TUniqId } from "../../../shared/types/uniq-id.type";
import { MsgEntity } from "../../entities/msg.entity";
import { MsgGateway } from "../../ports/msg.gateway";

export class MsgInMemoryAdapter extends MsgGateway {

    msgs!: BehaviorSubject<MsgEntity[]>

    withMsgs(msgs: BehaviorSubject<MsgEntity[]>) {
        this.msgs = msgs
        return this
    }

    override retrieveByIdConvers(idConvers: TUniqId): Observable<MsgEntity[]> {
        return this.msgs.asObservable().pipe(
            map(msgs => msgs
                .filter(msg => msg.idConvers === idConvers))
            )
    }

    override retrieveAll(): Observable<MsgEntity[]> {
        return this.msgs.asObservable()
    }

    override retrieveOne(id: TUniqId): Observable<MsgEntity | null> {
        return this.msgs.asObservable().pipe(
            map(msgs => msgs
                .find(msg => msg.id === id) ?? null
            )
        )
    }

    override update(data: Partial<MsgEntity>, id: string): Observable<MsgEntity> {
        const msgs = this.msgs.getValue().map(msg => msg.id === id
            ? ({...msg, ...data})
            : msg
        )
        const msg = msgs.find(msg => msg.id === id)
        if(msg) {
            this.msgs.next(msgs)
            return of(msg)
        }
        else throw new Error('Msg not found')
    }

    override addNew(data: Partial<MsgEntity>): Observable<MsgEntity> {
        const newMsg: MsgEntity = {
            id: "",
            content: "",
            type: "text",
            seenBy: [],
            idConvers: "",
            replyToMsg: null,
            author: "",
            attachments: [],
            timestamp: new Date(),
            ...data
        }
        const current = this.msgs.getValue()
        current.push(newMsg)
        this.msgs.next(current)
        return of(newMsg)
    }

    override remove(id: string): Observable<void> {
        const current = this.msgs.getValue().filter(msg => msg.id === id)
        this.msgs.next(current)
        return of()
    }

}