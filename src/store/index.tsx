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
import { formatMessgae } from "utils";

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
      });
      storeDispatch({ type: constants.SET_PAGE_IS_READY, payload: true });
      storeDispatch({ type: constants.SET_PAGE_ERROR, payload: "" });
    } catch (error) {
      const { msg } = formatMessgae(error, "error");
      storeDispatch({ type: constants.SET_PAGE_ERROR, payload: msg });
    } finally {
      storeDispatch({ type: constants.SET_LOADING, payload: false });
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
