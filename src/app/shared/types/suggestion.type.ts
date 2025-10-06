import { TUniqId } from "./uniq-id.type"

export type TSuggestion = {
    name: string,
    idUser: TUniqId,
    urlAvatar: string|null,
    isOnline: boolean,
}