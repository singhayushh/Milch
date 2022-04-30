import { Request, Response, NextFunction } from "express";
import { UserInterface } from "../dtos/user.dtos";
import jwt from "jsonwebtoken";

export const AuthMiddleware = (allowOnlyAdmin: Boolean = false, allowAccess: Boolean = false) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const token = req.cookies["auth_token"];
            if (!token) {
                if (allowAccess) next();
                return res.render('403', { err: "No token found" });
            }

            const decoded = jwt.verify(
                token,
                String(process.env.JWT_SECRET)
            );

            if (!decoded) {
                if (allowAccess) next();
                return res.render('403', { err: "Token expired" });
            }

            console.log(decoded);
            req.body.decoded = decoded;

            next();
        } catch (err) {
            res.render('500');
        }
    };
};