import { NextApiRequest, NextApiResponse } from "next";

export interface CustomNextAPIRequest extends NextApiRequest {
    network: string;
    account?: string
}