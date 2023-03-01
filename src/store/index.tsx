import { useMemo, createContext, useReducer, useEffect, useContext } from "react";
import { initialState } from "./state";

import type { FC, ReactNode } from 'react';
import storeReducer from "@/reducers/storeReducer";

export const store = createContext(initialState);
const { Provider } = store;

const StoreProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [store, storeDispatch] = useReducer(storeReducer, initialState);

    return <Provider value={{ ...store, storeDispatch }}>{children}</Provider>
}

export const useStore = () => {
    const context = useContext(store);
    return context;
};

export default StoreProvider;
