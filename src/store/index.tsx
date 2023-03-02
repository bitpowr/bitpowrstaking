import {
  useMemo,
  createContext,
  useReducer,
  useEffect,
  useContext,
} from "react";
import { initialState, collectionState, validatorState } from "./state";

import type { FC, ReactNode } from "react";
import storeReducer from "@/reducers/storeReducer";
import CollectionsProvider from "@/contexts/CollectionsProviderContext";
import { collectionsReducer } from "@/reducers/collectionsReducer";
import { validatorsReducer } from "@/reducers/validatorsReducer";
import ValidatorsProvider from "@/contexts/ValidatorsProviderContext";

export const store = createContext(initialState);
const { Provider } = store;

const StoreProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [store, storeDispatch] = useReducer(storeReducer, initialState);
  const [collections, collectionDispatch] = useReducer(
    collectionsReducer,
    collectionState
  );
  const [validators, validatorDispatch] = useReducer(
    validatorsReducer,
    validatorState
  );

  return (
    <Provider value={{ ...store, storeDispatch }}>
      <CollectionsProvider
        collections={collections}
        collectionDispatch={collectionDispatch}
      >
        <ValidatorsProvider
          validators={validators}
          validatorDispatch={validatorDispatch}
        >
          {children}
        </ValidatorsProvider>
      </CollectionsProvider>
    </Provider>
  );
};

export const useStore = () => {
  const context = useContext(store);
  return context;
};

export default StoreProvider;
