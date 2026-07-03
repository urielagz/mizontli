<<<<<<< HEAD
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            ok: false,
            mensaje: "Token requerido"
        });
    }

    const token = authHeader.split(" ")[1];

    try {

        const payload = jwt.verify(
            token,
            "SECRETO_SUPER_SECRETO"
        );

        (req as any).usuario = payload;

        next();

    } catch {

        return res.status(401).json({
            ok: false,
            mensaje: "Token inválido"
        });
    }
=======
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            ok: false,
            mensaje: "Token requerido"
        });
    }

    const token = authHeader.split(" ")[1];

    try {

        const payload = jwt.verify(
            token,
            "SECRETO_SUPER_SECRETO"
        );

        (req as any).usuario = payload;

        next();

    } catch {

        return res.status(401).json({
            ok: false,
            mensaje: "Token inválido"
        });
    }
>>>>>>> 9debb0c734493963ec40a4dbf27c5cdfad79f63f
};