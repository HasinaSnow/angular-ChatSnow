import { map, Observable } from "rxjs";
import { ConversEntity, IConversPrtcipant, RandomConversEntity } from "../../entities/convers.entity";
import { SocketGateway } from "../../ports/socket.gateway";
import { _FAKE_DATA_CONVERS, _FAKE_DATA_USERS, _ID_USER_AUTH, listenMsg } from "../../data/fake.data";

export class ConversSocketInMemoryAdapter extends SocketGateway<ConversEntity> {

    override emit(eventName: string, data: any): void {
        throw new Error("Method not implemented.");
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
                console.log('unread count => ', me?.unreadCount)
                const myUnreadCount = me?.unreadCount ?? 0
                const meWithUpdatedUnreadCount: IConversPrtcipant = {...me, unreadCount: myUnreadCount + 1}
                return RandomConversEntity({
                    id: msg.idConvers,
                    updatedAt: new Date(),
                    updatedBy: msg.author,
                    type: convers.find(c => c.id === msg.idConvers)?.type,
                    participants: participants.map(p => p.idUser === idAuth ? meWithUpdatedUnreadCount : p),
                    lastMsg: {
                        idMsg: msg.id,
                        authorId: msg.author,
                        authorName: authorName ?? '',
                        content: msg.content,
                        createdAt: msg.timestamp
                    }
                })
            }),
        )
    }

}