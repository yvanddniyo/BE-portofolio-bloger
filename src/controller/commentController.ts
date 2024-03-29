import commentService from "../service/commentService";
import { Request, Response } from "express";
import blogComment from "../models/blogComment";
import { commentsValidate } from "../validate/validate";
import jwt from 'jsonwebtoken'

const createComment = async (req:Request, res:Response ) => {
    try {
        const blogId = req.params.id

        const token = req.header('auth-token');
        if (!token) {
            return res.status(401).json({ message: 'Access denied. No token provided.' });
        }

        const decodedToken = jwt.verify(token, `${process.env.JWT_TOKEN}`);
        const name = (decodedToken as any).username;
        
        const { content} = req.body
        const { error } = commentsValidate({content});
        if (error) {
          return res.status(400).json({ message: error.details[0].message });
        }
        const comments = await commentService.createComment(blogId, name, content)
        console.log(comments)
        res.status(201).json({
          comment: `${blogComment.length}` ,
          status: 201,
          message: "comment successfully added"
        })
    } catch (error) {
      res.status(500).json({message: (error as Error).message}) 
    }
}
const viewAllComment = async(req:Request, res:Response) => {
    try {
        const blogId = req.params.id
        const comments = await commentService.viewAllComment(blogId)
        res.send(comments)
    }
    catch(error) {
      res.status(500).json({message: (error as Error).message})
    }
}

 export default {
  createComment,
  viewAllComment
}