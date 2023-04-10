interface CustomNextApiRequest {
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD";
    url: string;
    headers: {
        [key: string]: string;
    };
    query: {
        [key: string]: string | string[];
    };
    body?: any;
}
interface CustomNextApiResponse {
    status: (statusCode: number) => CustomNextApiResponse;
    json: (data: any) => void;
}
export declare function allowMethods(methods: string[]): (handler: (req: CustomNextApiRequest, res: CustomNextApiResponse) => void) => (req: CustomNextApiRequest, res: CustomNextApiResponse) => void;
export {};
