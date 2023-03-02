import agent from "@/agent";
import axios from "axios";
import { ValidatorInfo, ValidatorStakeView } from "types/validators";

export const ValidatorAgent = axios.create({
    baseURL: "https://www.validators.app/api/v1",
    headers: {
        "Token": process.env.VALIDATOR_APP_KEY
    }
})

export const getValidators = async (network: string): Promise<ValidatorInfo[]> => {
    const req = await ValidatorAgent.get(`/validators/${network}.json`)
    return req?.data
}

export const getValidator = async (network: string, account: string, history = false) => {
    try {
        const req = await ValidatorAgent.get(`/validators/${network}/${account}.json${history ? "?with_history=true" : ""}`)
        return req?.data
    }
    catch (er: any) {
        console.log(er)
        throw new Error(er)
    }

}


export const getValidatorStake = async (): Promise<{ validators: ValidatorStakeView[] }> => {
    try {
        const url = "https://stakeview.app/apy/prev3.json"
        const req = await agent.get(url)
        return req?.data
    }
    catch (er: any) {
        console.log(er)
        throw new Error(er)
    }
}

export const mergeValidatorStakeAPY = async (validators: ValidatorInfo[], stakes: ValidatorStakeView[]) => {
    const _validators = validators.map((v) => {
        const apy = stakes.find((s) => s.id == v.account)
        if (apy) {
            return {
                ...v,
                apy: apy?.apy
            }
        }
    }).filter((e) => {
        return e != null
    })
    return _validators
}