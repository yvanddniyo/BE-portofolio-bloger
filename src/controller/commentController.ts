import commentService from "../service/commentService";
import { Request, Response } from "express";

const createComment = async (req:Request, res:Response ) => {
    try {
        const blogId = req.params.id
        const {name, content} = req.body
        const comments = await commentService.createComment(blogId, name, content)
        res.status(201).json(comments)
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