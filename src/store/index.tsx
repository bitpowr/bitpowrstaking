import {
  useMemo,
  createContext,
  useReducer,
  useEffect,
  useContext,
} from "react";
import { initialState, collectionState } from "./state";

import type { FC, ReactNode } from "react";
import storeReducer from "@/reducers/storeReducer";
import CollectionsProvider from "@/contexts/CollectionsProviderContext";
import { collectionsReducer } from "@/reducers/collectionsReducer";

export const store = createContext(initialState);
const { Provider } = store;

const StoreProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [store, storeDispatch] = useReducer(storeReducer, initialState);
  const [collections, collectionDispatch] = useReducer(
    collectionsReducer,
    collectionState
  );

  collectionState;

  return (
    <Provider value={{ ...store, storeDispatch }}>
      <CollectionsProvider
        collections={collections}
        collectionDispatch={collectionDispatch}
      >
        {children}
      </CollectionsProvider>
    </Provider>
  );
};

export const useStore = () => {
  const context = useContext(store);
  return context;
};

export default StoreProvider;
