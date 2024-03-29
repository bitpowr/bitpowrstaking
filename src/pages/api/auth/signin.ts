import handler from "middleware/handler";
import { NextApiRequest, NextApiResponse } from "next";
import Joi from "joi"
import { validateSchema, withMiddleware } from "middleware";


const schema = Joi.object({
    message: Joi.any().required(),
    signature: Joi.any().required(),
    publicKey: Joi.string().required()
})

handler.post(withMiddleware(async (req: NextApiRequest, res: NextApiResponse) => {



    return res.json({ message: "Sign In" })

}, [validateSchema(schema)]))

export default handler