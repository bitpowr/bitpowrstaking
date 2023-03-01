import { constants as C } from './constants'

const storeReducer = (prevState: any, action: any) => {
    switch (action.type) {
        case C.LOADING:
            return {
                ...prevState,
                isLoading: true
            };
    }
}
export default storeReducer;
