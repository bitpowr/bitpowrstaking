import { NextApiRequest, NextApiResponse } from "next";

export const withMiddleware = (handler: any, middlewares: any = []) => {
    // console.log("Her", middlewares)
    return async (req: NextApiRequest, res: NextApiResponse) => {
        // await runMiddleware(req, res, cors)


        if (middlewares) {
            for (const m of middlewares) {
                const l = await m(req, res)
                if (l) {
                    return res.status(l.status).json(l.data)
                }
            }
        }

        return handler(req, res);
    };
};



export const validateSchema = (schema: any) => (_req: NextApiRequest, res: NextApiResponse) => {
    if (!_req.body) {
        throw new Error(`400: Body is required`);
    }
    const response = schema.validate(_req.body);

    if (response.error) {
        const messages = response.error.details.map((e: any) => { return { field: e.context.key, message: e.message } })
        if (messages[0]) {
            throw new Error(`422: ${messages[0].message}`);
        }
    }

}

