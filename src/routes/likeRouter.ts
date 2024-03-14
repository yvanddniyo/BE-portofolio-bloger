import express  from "express";
// import likeBlog from "../controller/likeController";
import likeController from "../controller/likeController";
const routerLikes = express.Router();

routerLikes.post("/blogs/:id/likes", likeController.likeBlog)
routerLikes.get("/blogs/:id/likes", likeController.viewLikes)

export default routerLikes