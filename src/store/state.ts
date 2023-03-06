import { collectionPropType } from "@/reducers/collectionsReducer";
import { validatorPropType } from "@/reducers/validatorsReducer";

export const initialState = {
    loading: true,
    isLoading: true,
    currentDashboard: "dashboard",
    usdToSol: 0,
    isPageReady: false,
    prices: null,
    error: "",
    rates: null,
};


export const collectionState: collectionPropType = {
    mostRated: {
        loading: true,
        data: null,
        error: false,
    },
    collections: {
        loading: true,
        data: null,
        error: false,
    }
}
export const validatorState: validatorPropType = {
    topValidators: {
        loading: true,
        data: null,
        error: false,
    },
    validators: {
        loading: true,
        data: null,
        error: false,
    }
}


