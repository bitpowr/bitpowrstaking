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
import { useRouter } from "next/router";
import agent from "@/agent";
import { constants } from "@/reducers/constants";

export const store = createContext(initialState);
const { Provider } = store;

const StoreProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [store, storeDispatch] = useReducer(storeReducer, initialState);
  const [collections, collectionDispatch] = useReducer(
    collectionsReducer,
    collectionState
  );
  const router = useRouter();

  const [validators, validatorDispatch] = useReducer(
    validatorsReducer,
    validatorState
  );

  const handleFetchPrice = async () => {
    try {
      const response = await agent.get("/api/price");
      storeDispatch({
        type: constants.SET_USD_TO_SOL,
        payload: response.data?.data?.SOL,
      });
    } catch (error) {
      console.log(error, "k");
    }
  };

  useEffect(() => {
    handleFetchPrice();
  }, []);

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
