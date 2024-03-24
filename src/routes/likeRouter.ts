import express from 'express'
const router = express.Router();
import authenticateToken from '../middlewares/tokenAuth';
import authenticateUser from '../middlewares/userAccess';
import {  getLikes, like } from '../controller/likeController';

const routerLikes = express.Router();

router.post("/blogs/:id/likes",authenticateUser,  like);
router.get("/blogs/:id/likes",authenticateUser,   getLikes);

export default routerLikes;
