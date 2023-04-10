"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allowMethods = void 0;
function allowMethods(methods) {
    return (handler) => (req, res) => {
        if (!methods.includes(req.method)) {
            res.status(405).json({
                error: "Method Not Allowed",
                message: `This endpoint only supports ${methods.join(", ")}, while your request was: ${req.method}`,
            });
            return;
        }
        return handler(req, res);
    };
}
exports.allowMethods = allowMethods;
