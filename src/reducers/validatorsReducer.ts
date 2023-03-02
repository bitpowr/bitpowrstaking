


import { collectionState, validatorState } from "@/store/state";
import { boolean } from "joi";


export type validatorPropType = {
    topValidators: {
        loading: boolean,
        data: any,
        error: boolean,
    },
    validators: {
        loading: boolean,
        data: any,
        error: boolean,
    }
}



type providerActionTypes =
    "SET_TOP_VALIDATORS" |
    "SET_VALIDATORS" |
    "GET_VALIDATORS_LOADING" |
    "STOP_VALIDATORS_LOADING"



export function validatorsReducer(
    states: typeof validatorState,
    action: { type: providerActionTypes, payload: any }
) {
    switch (action.type) {
        case "SET_TOP_VALIDATORS":
            return states;
        case "SET_TOP_VALIDATORS":
            return {
                ...states,
                validators: {
                    ...states.validators,
                    loading: true
                }
            };
        case "STOP_VALIDATORS_LOADING":
            return {
                ...states,
                validators: {
                    ...states.validators,
                    loading: false
                }
            };
        default:
            return states;
    }
}
