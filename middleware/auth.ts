import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { CustomNextAPIRequest } from "types/next";




export const isAuthenticated = async (req: CustomNextAPIRequest, res: NextApiResponse) => {
    try {
        const authorizer = req.headers["authorizer"];
        const network = req.headers["network"] || "devnet";
        const account = req.query.network || req.body.network


        if (!network) {
            throw new Error("401: Must pass authorization to header to access this");
        }

        if (!authorizer) {
            throw new Error("401: invalid authorizer");
        }

        if (authorizer != "allow") {
            throw new Error("403: invalid authorizer value");
        }

        req.network = network as string
        req.account = account

    }
    catch (err: any) {
        // Sentry.captureException(err);
        console.log(err)
        let message = err?.message || "401: Invalid api key passed"
        throw new Error(message);
    }
}
