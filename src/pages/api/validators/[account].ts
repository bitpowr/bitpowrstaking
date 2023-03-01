import handler from "middleware/handler";
import { NextApiResponse } from "next";
import Joi from "joi"
import { validateSchema, withMiddleware } from "middleware";
import { getValidator, getValidators } from "@/services/solana/validators";
import { CustomNextAPIRequest } from "types/next";
import { isAuthenticated } from "middleware/auth";


handler.get(withMiddleware(async (req: CustomNextAPIRequest, res: NextApiResponse) => {

    const network = req.network
    const account = req.query.account as string

    const validator = await getValidator(network, account)

    return res.json({ status: "200", data: validator })

}, [isAuthenticated]))

export default handler