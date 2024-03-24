import { Request, Response, NextFunction } from "express";
import { Document } from "mongoose";
import { Blog } from "../models/blog";


interface CustomRequest extends Request {
    blog?: Document<any, any, any>; 
}

export const checkExistingBlog = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const blogId = req.params.id;
        const isBlogThere = await Blog.findById(blogId);
        if (!isBlogThere) {
            return res.status(404).json({
                message: "Blog you selected not found."
            });
        }
        req.blog = isBlogThere;
        next();
    } catch (error) {
        console.error('Error checking blog existence:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
