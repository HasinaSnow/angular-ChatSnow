import { TUniqId } from "../../shared/types/uniq-id.type";

export interface ConversEntity {
    id: TUniqId
    name: string,
    type: 'private'|'group',
    participants: TUniqId[], //idUser
    lastMessageId?: TUniqId, // charger rapidement le dernier msg sans les charger toutes
    createdAt: Date,
    createdBy: TUniqId,
    updatedAt?: Date
    updatedBy?: TUniqId
}