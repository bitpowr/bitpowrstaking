import handler from "middleware/handler";
import { NextApiResponse } from "next";
import Joi from "joi";
import { validateSchema, withMiddleware } from "middleware";
import { CustomNextAPIRequest } from "types/next";
import { isAuthenticated } from "middleware/auth";
import axios from "axios";

handler.get(
  withMiddleware(async (req: CustomNextAPIRequest, res: NextApiResponse) => {
    const response = await axios.get(
      `https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=SOL`,
      {}
    );
    return res.status(200).json({ data: response.data });
  }, [])
);

export default handler;
