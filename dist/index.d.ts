import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
interface CustomNextApiRequest extends NextApiRequest {
    method: string;
}
export declare function allowMethods(methods: string[]): (handler: NextApiHandler) => (req: CustomNextApiRequest, res: NextApiResponse) => unknown;
export {};
