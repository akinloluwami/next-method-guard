import type { Request, Response } from "express";
interface CustomNextApiRequest extends Request {
    method: string;
}
interface CustomNextApiResponse extends Response {
}
export declare function allowMethods(methods: string[]): (handler: any) => (req: CustomNextApiRequest, res: CustomNextApiResponse) => any;
export {};
