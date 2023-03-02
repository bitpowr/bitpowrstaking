import handler from "middleware/handler";
import { NextApiResponse } from "next";
import Joi from "joi"
import { validateSchema, withMiddleware } from "middleware";
import { getValidators, getValidatorStake, mergeValidatorStakeAPY } from "@/services/solana/validators";
import { CustomNextAPIRequest } from "types/next";
import { isAuthenticated } from "middleware/auth";


handler.post(withMiddleware(async (req: CustomNextAPIRequest, res: NextApiResponse) => {

    const network = req.network

    const validators = await getValidators(network)

    const stakes = await getValidatorStake()

    const mergeValidators = await mergeValidatorStakeAPY(validators, stakes?.validators)

    return res.json({ status: "200", data: mergeValidators })

}, [isAuthenticated]))

export default handler