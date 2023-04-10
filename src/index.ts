import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

interface CustomNextApiRequest extends NextApiRequest {
  method: string;
}

interface CustomNextApiResponse extends NextApiResponse {}

export function allowMethods(methods: string[]) {
  return (handler: NextApiHandler) =>
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
