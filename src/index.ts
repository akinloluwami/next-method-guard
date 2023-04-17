import type { Request, Response } from "express";

interface CustomNextApiRequest extends Request {
  method: string;
}

interface CustomNextApiResponse extends Response {}

export function allowMethods(methods: string[]) {
  return (handler: any) =>
    (req: CustomNextApiRequest, res: CustomNextApiResponse) => {
      if (!methods.includes(req.method)) {
        res.status(405).json({
          error: "Method Not Allowed",
          message: `This endpoint only supports ${methods.join(
            ", "
          )}, while your request was: ${req.method}`,
        });
        return;
      }
      return handler(req, res);
    };
}
