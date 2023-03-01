import handler from "middleware/handler";
import { NextApiResponse } from "next";
import Joi from "joi"
import { validateSchema, withMiddleware } from "middleware";
import { getValidators } from "@/services/solana/validators";
import { CustomNextAPIRequest } from "types/next";
import { isAuthenticated } from "middleware/auth";


handler.get(withMiddleware(async (req: CustomNextAPIRequest, res: NextApiResponse) => {

    const network = req.network

    const validators = await getValidators(network)

    return res.json({ status: "200", data: validators })

}, [isAuthenticated]))

export default handler