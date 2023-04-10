interface CustomNextApiRequest {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD";
  url: string;
  headers: { [key: string]: string };
  query: { [key: string]: string | string[] };
  body?: any;
}

interface CustomNextApiResponse {
  status: (statusCode: number) => CustomNextApiResponse;
  json: (data: any) => void;
}

export function allowMethods(methods: string[]) {
  return (
      handler: (req: CustomNextApiRequest, res: CustomNextApiResponse) => void
    ) =>
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
