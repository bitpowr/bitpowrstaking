import { collectionPropType } from "@/reducers/collectionsReducer";
import React, { Dispatch, createContext, useContext, useMemo } from "react";
import agent from "../../agent";

type providerType = {
  children: React.ReactNode;
  collections: collectionPropType;
  collectionDispatch: Dispatch<any>;
};

const CollectionContext = createContext("");

export default function CollectionsProvider({
  children,
  collections,
  collectionDispatch,
}: providerType) {
  const collectionFunctions = useMemo(() => {
    return {
      getCollections: async () => {
        try {
          const response = await agent.post("/validators");
        } catch (error) {
        } finally {
        }
      },
    };
  }, []);

  return (
    <CollectionContext.Provider
      value={{ ...collections, ...collectionFunctions }}
    >
      {children}
    </CollectionContext.Provider>
  );
}

export const useCollection = () => {
  return useContext(CollectionContext);
};
