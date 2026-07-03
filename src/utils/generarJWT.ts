<<<<<<< HEAD
import jwt from "jsonwebtoken";

export const generarJWT = (
    id: number,
    rol: string
): string => {

    return jwt.sign(
        {
            id,
            rol
        },
        "SECRETO_SUPER_SECRETO",
        {
            expiresIn: "2h"
        }
    );
=======
import jwt from "jsonwebtoken";

export const generarJWT = (
    id: number,
    rol: string
): string => {

    return jwt.sign(
        {
            id,
            rol
        },
        "SECRETO_SUPER_SECRETO",
        {
            expiresIn: "2h"
        }
    );
>>>>>>> 9debb0c734493963ec40a4dbf27c5cdfad79f63f
};