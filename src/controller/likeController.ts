import likeBlogs from "../service/likeServices";
import mongoose from "mongoose";
import { Request, Response } from "express";

const likeBlog = async(req: Request, res: Response) => {
    const {blogId, userId, like} =req.body

    let  _id = req.params.id

    if(!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(400).send({message: "invalid Blog Id"})
    }

    try {
        await likeBlogs.likeBlog(blogId, userId, like)
         
        return res.status(201).json({message: "you successful like the blog"})
    } 
    catch (error) {
        console.error(error);
        return res.status(400).json({ message: (error as Error).message });
    }
}
const viewLikes = async(req:Request, res:Response) => {
    try {
        const blogId = req.params.id
        const likes = await likeBlogs.viewLikes(blogId)
        res.send(likes)
    }
    catch(error) {
      res.status(500).json({message: (error as Error).message})
    }
}

export default {
    likeBlog,
    viewLikes
}