import { collectionState } from "@/store/state";
import { any, boolean } from "joi";


export type collectionPropType = {
    mostRated: {
        loading: boolean,
        data: any,
        error: boolean,
    },
    collections: {
        loading: boolean,
        data: any,
        error: boolean,
    }
}

type providerActionTypes =
    "SET_MOST_RATED_COLLECTIONS" |
    "SET_COLLECTIONS" |
    "GET_COLLECTIONS_LOADING" |
    "STOP_COLLECTIONS_LOADING"



export function collectionsReducer(
    states: any,
    action: { type: providerActionTypes, payload: any }
) {
    switch (action.type) {
        case "SET_MOST_RATED_COLLECTIONS":
            return states;
        case "GET_COLLECTIONS_LOADING":
            return {
                ...states,
                collections: {
                    ...states.collections,
                    loading: true
                }
            };
        case "STOP_COLLECTIONS_LOADING":
            return {
                ...states,
                collections: {
                    ...states.collections,
                    loading: false
                }
            };
        default:
            return states;
    }
}
