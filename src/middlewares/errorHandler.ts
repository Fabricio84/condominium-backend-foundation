import type { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
    console.error(err);

    const isProd = process.env.NODE_ENV === "production";

    res.status(500).json({
        error: {
            code: 'INTERNAL_ERROR',
            message: isProd ? "Internal server error" : err?.message ?? "Unknown error",
        }
    })
}