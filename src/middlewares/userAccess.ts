import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import userModel from '../models/userModel';
import dotenv from "dotenv";
dotenv.config();

interface Users {
    email: string;
    password: string;
    role: string;
    _id: string;
}

declare global {
    namespace Express {
        interface Request {
            user?: Users;
        }
    }
}

export default function authenticateUser(req: Request, res: Response, next: NextFunction): void {
    const token: string | undefined = req.header('auth-token') || '';
    if (!token) {
        res.status(401).json({
            message: "You're not logged in"
        });
        return;
    }
    try {
        const verified = jwt.verify(token, `${process.env.JWT_TOKEN}`) as Users;
        console.log('Verified payload:', verified);
        req.user = verified;

        // Check if the user is an admin
        if((req.user.role || '').trim().toLowerCase() !== 'user') {
            res.status(403).json({
                message: "Unauthorized: Only admins can perform this action"
            });
            return;
        }

        next();
    } catch (err) {
        res.status(400).send("Invalid token");
    }
}