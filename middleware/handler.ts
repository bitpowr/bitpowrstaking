import { NextApiResponse } from "next";
import nc from "next-connect";
import { CustomNextAPIRequest } from "types/next";


/** Error Parser
 * 
 * @param error 
 * @returns { errorCode, errorMsg}
 */
export function parseError(error: any): { errorCode: number, errorMsg: string } {

    let errorCode = 400;
    let errorMsg = error?.toString() || "An error occured!";
    const errors = error.toString().split(':');

    if (errors.length > 0) {
        if (errors.length == 3) {
            errorCode = parseInt(errors[1]?.trim()) || errorCode;
            errorMsg = errors[2] || errorMsg;
        }
        else if (error.response) {
            // catch errors sent from wallet system
            errorMsg = error.response.data.message;
        }
    }
    return { errorCode, errorMsg: errorMsg?.trim() };
}

const errorHandler = (err: any, req: CustomNextAPIRequest, res: NextApiResponse) => {
    const error = parseError(err)
    res.status(error.errorCode).json({ message: error.errorMsg, statusCode: error.errorCode })
}

function handlerEvent() {


    const handler = nc<CustomNextAPIRequest, NextApiResponse>({
        onError: errorHandler,
        onNoMatch: (req: CustomNextAPIRequest, res: NextApiResponse) => {
            res.status(404).json({ message: "Not found!" })
        }
    });
    return handler
}
export default handlerEvent()