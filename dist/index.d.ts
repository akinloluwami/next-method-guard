import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
interface CustomNextApiRequest extends NextApiRequest {
    method: string;
}
interface CustomNextApiResponse extends NextApiResponse {
}
export declare function allowMethods(methods: string[]): (handler: NextApiHandler) => (req: CustomNextApiRequest, res: CustomNextApiResponse) => unknown;
export {};
