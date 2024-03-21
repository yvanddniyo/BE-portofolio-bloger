import { Request, Response, NextFunction } from "express";
import { Document } from "mongoose";
import Users from "../models/userModel"


interface CustomRequest extends Request {
    blog?: Document<any, any, any>; 
}

export const checkExistingUsers = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const blogId = req.params.id;
        const isUsersThere = await Users.findById(blogId);
        if (!isUsersThere) {
            return res.status(404).json({
                message: "Users you selected not found."
            });
        }
        req.blog = isUsersThere;
        next();
    } catch (error) {
        console.error('Error checking blog existence:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
