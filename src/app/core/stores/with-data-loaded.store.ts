import { signalStoreFeature, withState } from "@ngrx/signals";

export function WithDataLoaded() {
    return signalStoreFeature(
        withState({dataLoaded: false})
    )
}