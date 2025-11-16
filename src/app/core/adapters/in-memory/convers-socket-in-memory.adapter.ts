import { map, Observable } from "rxjs";
import { ConversEntity, IConversPrtcipant, RandomConversEntity } from "../../entities/convers.entity";
import { SocketGateway } from "../../ports/socket.gateway";
import { _FAKE_DATA_CONVERS, _FAKE_DATA_USERS, _ID_USER_AUTH, listenMsg } from "../../data/fake.data";
import { TUniqId } from "../../../shared/types/uniq-id.type";

export class ConversSocketInMemoryAdapter extends SocketGateway<ConversEntity> {

    override emit(eventName: string, data: any): void {
        switch (eventName) {
            case ('unread-count-to-0') : {
                const {convers, idUser} = data as {convers: ConversEntity, idUser: TUniqId}
                const conversList = _FAKE_DATA_CONVERS.getValue().map(c => {
                    if(c.id === convers.id) {
                        const participants = convers.participants.map(p => {
                            if(p.idUser === idUser) p.unreadCount = 0
                            return p
                        })
                        convers.participants = participants
                        return convers
                    } else return c
                })
                _FAKE_DATA_CONVERS.next(conversList)
                break
            }
            default: {

                break;
            }
        }
    }

    override on(): Observable<ConversEntity> {
        return listenMsg.pipe(
            map(msg => {
                const users = _FAKE_DATA_USERS.getValue()
                const idAuth = _ID_USER_AUTH.getValue() ?? ''
                const authorName = users.find(user => user.id === msg.author)?.name
                const convers = _FAKE_DATA_CONVERS.getValue()

                const participants = convers.find(c => c.id === msg.idConvers)?.participants as IConversPrtcipant[]
                const me = participants?.find(p => p.idUser === idAuth) as IConversPrtcipant
                const myUnreadCount = me?.unreadCount ?? 0
                const meWithUpdatedUnreadCount: IConversPrtcipant = {...me, unreadCount: myUnreadCount + 1}
                const newConvers = RandomConversEntity({
                    ...convers.find(c => c.id === msg.idConvers) ?? {},
                    updatedAt: new Date(),
                    updatedBy: msg.author,
                    participants: participants.map(p => p.idUser === idAuth ? meWithUpdatedUnreadCount : p),
                    lastMsg: {
                        idMsg: msg.id,
                        authorId: msg.author,
                        authorName: authorName ?? '',
                        content: msg.content,
                        createdAt: msg.timestamp
                    }
                })

                _FAKE_DATA_CONVERS.next(convers.map<ConversEntity>(c => c.id === newConvers.id ? newConvers : c))

                return newConvers
            }),
        )
    }

}