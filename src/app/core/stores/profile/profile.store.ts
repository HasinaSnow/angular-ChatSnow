import { signalStore, withState } from "@ngrx/signals";
import { TUniqId } from "../../../shared/types/uniq-id.type";

type TProfileState = {
    id: TUniqId|null
}

export const ProfileStore = signalStore(
    withState({id: null} as TProfileState)
)