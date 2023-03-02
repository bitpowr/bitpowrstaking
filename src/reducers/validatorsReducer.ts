


import { collectionState, validatorState } from "@/store/state";



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
    "SET_VALIDATORS_LOADING" |
    "STOP_VALIDATORS_LOADING"



export function validatorsReducer(
    states: any,
    action: { type: providerActionTypes, payload: any }
) {
    switch (action.type) {
        case "SET_VALIDATORS":
            return { ...states, validators: { ...states.validators, data: action.payload, loading: false } };
        case "STOP_VALIDATORS_LOADING":
            return {
                ...states,
                validators: {
                    ...states.validators,
                    loading: false
                }
            };
        case "SET_VALIDATORS_LOADING":
            return {
                ...states,
                validators: {
                    ...states.validators,
                    loading: true
                }
            };
        case "SET_TOP_VALIDATORS":
            return {
                ...states,
                topValidators: {
                    data: action.payload,
                    loading: false
                }
            };

        default:
            return states;
    }
}
