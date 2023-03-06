import { constants as C } from './constants'


// loading: true,
//     currentDashboard: "dashboard",
//         usdToSol: 0,
//             isPageReady: false,
//                 prices: null,
//                     rates: null,
const storeReducer = (prevState: any, action: any) => {
    switch (action.type) {
        case C.LOADING:
            return {
                ...prevState,
                isLoading: true
            };
        case C.SET_LOADING:
            return {
                ...prevState,
                isLoading: action.payload
            };
        case C.SET_PAGE_ERROR:
            return {
                ...prevState,
                error: action.payload
            };
        case C.SET_PAGE_IS_READY:
            return {
                ...prevState,
                isPageReady: action.payload
            };

        case C.SET_USD_TO_SOL:
            return {
                ...prevState,
                usdToSol: action.payload
            };


    }
}
export default storeReducer;
