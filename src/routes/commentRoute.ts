import express  from "express";
import commentController from "../controller/commentController";
const routerComment = express.Router();


routerComment.post("/blogs/:id/comments", commentController.createComment)
routerComment.get("/blogs/:id/comments", commentController.viewAllComment)

export default routerComment