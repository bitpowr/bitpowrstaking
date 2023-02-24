import axios from "axios";

export const ValidatorAgent = axios.create({
    baseURL: "https://www.validators.app/api/v1",
    headers: {
        "Token": process.env.VALIDATOR_APP_KEY
    }
})

export const getValidators = async (network: string) => {
    const req = await ValidatorAgent.get(`/validators/${network}.json`)
    return req?.data
}

export const getValidator = async (network: string, account: string, history = false) => {
    const req = await ValidatorAgent.get(`/validators/${network}/${account}.json${history ? "?with_history=true" : ""}`)
    return req?.data
}