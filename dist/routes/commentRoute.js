"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const commentController_1 = __importDefault(require("../controller/commentController"));
const routerComment = express_1.default.Router();
const userAccess_1 = __importDefault(require("../middlewares/userAccess"));
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
routerComment.post("/blogs/:id/comments", userAccess_1.default, commentController_1.default.createComment);
routerComment.get("/blogs/:id/comments", userAccess_1.default, commentController_1.default.viewAllComment);
exports.default = routerComment;
