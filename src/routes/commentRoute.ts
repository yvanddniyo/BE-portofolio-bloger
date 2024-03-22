import express  from "express";
import commentController from "../controller/commentController";
const routerComment = express.Router();
import authenticateUser from "../middlewares/userAccess";


/**
 * @swagger
 * /api/v1/blogs/{id}/comments:
 *   post:
 *     summary: Create a new comment
 *     tags: [Comments]
 *     security:
 *       - authToken: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comment'
 *     responses:
 *       '201':
 *         description: Successful response
 *   get:
 *     summary: View all comments for a blog
 *     tags: [Comments]
 *     security:
 *       - authToken: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Comment'
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Comment:
 *       type: object
 *       required:
 *         - blogId
 *         - name
 *         - content
 *       properties:
 *         blogId:
 *           type: string
 *         name:
 *           type: string
 *         content:
 *           type: string
 *       example:
 *         name: John Doe
 *         content: This is a comment.
 */
routerComment.post("/blogs/:id/comments", authenticateUser, commentController.createComment)
routerComment.get("/blogs/:id/comments", authenticateUser, commentController.viewAllComment)

export default routerComment