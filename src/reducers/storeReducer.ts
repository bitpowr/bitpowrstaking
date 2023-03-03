import { constants as C } from './constants'

const storeReducer = (prevState: any, action: any) => {
    switch (action.type) {
        case C.LOADING:
            return {
                ...prevState,
                isLoading: true
            };
        case C.SET_USD_TO_SOL:
            return {
                ...prevState,
                usdToSol: action.payload
            };


    }
}
export default storeReducer;
