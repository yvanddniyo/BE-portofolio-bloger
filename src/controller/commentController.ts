import commentService from "../service/commentService";
import { Request, Response } from "express";
import blogComment from "../models/blogComment";
import { commentsValidate } from "../validate/validate";

const createComment = async (req:Request, res:Response ) => {
    try {
        const blogId = req.params.id
        const {name, content} = req.body
        const { error } = commentsValidate({ name, content});
        if (error) {
          return res.status(400).json({ message: error.details[0].message });
        }
        const comments = await commentService.createComment(blogId, name, content)
        res.status(201).json({
          comment: `${blogComment.length}` ,
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