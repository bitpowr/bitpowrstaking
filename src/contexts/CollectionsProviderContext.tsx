import { collectionPropType } from "@/reducers/collectionsReducer";
import { collectionActions } from "@/reducers/constants";
import { collectionState } from "@/store/state";
import React, { Dispatch, createContext, useContext, useMemo } from "react";
import agent from "../agent";

type providerType = {
  children: React.ReactNode;
  collections: collectionPropType;
  collectionDispatch: Dispatch<any>;
};

type collectionFunctionsType = {
  getCollections: () => Promise<any>;
};

const CollectionContext = createContext({});

export default function CollectionsProvider({
  children,
  collections,
  collectionDispatch,
}: providerType) {
  const collectionFunctions: collectionFunctionsType = useMemo(() => {
    return {
      getCollections: async () => {
        try {
          collectionDispatch({
            type: collectionActions.GET_COLLECTIONS_LOADING,
          });
          const response = await agent.post("/validators");
          console.log(response?.data);
        } catch (error) {
          collectionDispatch({
            type: collectionActions.STOP_COLLECTIONS_LOADING,
          });
        } finally {
        }
      },
    };
  }, []);

  console.log(collections, "collectionscollections");
  return (
    <CollectionContext.Provider
      value={{ ...collections, ...collectionFunctions }}
    >
      {children}
    </CollectionContext.Provider>
  );
}

export const useCollection = (): any => {
  return useContext(CollectionContext);
};
