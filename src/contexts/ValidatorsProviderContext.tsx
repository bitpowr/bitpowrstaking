import { validatorPropType } from "@/reducers/validatorsReducer";
import { collectionActions, validatorsActions } from "@/reducers/constants";
import { validatorState } from "@/store/state";
import React, { Dispatch, createContext, useContext, useMemo } from "react";
import agent from "../agent";

type providerType = {
  children: React.ReactNode;
  validators: validatorPropType;
  validatorDispatch: Dispatch<any>;
};

type validatorsFunctionsType = {
  getValidators: () => Promise<any>;
};

const ValidatorContext = createContext({});

export default function ValidatorsProvider({
  children,
  validators,
  validatorDispatch,
}: providerType) {
  const validatorsFunctions: validatorsFunctionsType = useMemo(() => {
    return {
      getValidators: async () => {
        try {
          validatorDispatch({
            type: validatorsActions.SET_VALIDATORS_LOADING,
          });
          const response = await agent.get("/api/validators");

          validatorDispatch({
            type: validatorsActions.SET_VALIDATORS,
            payload: response?.data?.data,
          });

          validatorDispatch({
            type: validatorsActions.SET_TOP_VALIDATORS,
            payload: response?.data?.data?.slice(5, 10),
          });
          console.log(response?.data);
        } catch (error) {
          validatorDispatch({
            type: validatorsActions.STOP_VALIDATORS_LOADING,
          });
        } finally {
        }
      },
    };
  }, []);

  console.log(validators, "validators");
  return (
    <ValidatorContext.Provider
      value={{ ...validators, ...validatorsFunctions }}
    >
      {children}
    </ValidatorContext.Provider>
  );
}

export const useValidator = (): any => {
  return useContext(ValidatorContext);
};
