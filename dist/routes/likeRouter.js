"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const userAccess_1 = __importDefault(require("../middlewares/userAccess"));
const likeController_1 = require("../controller/likeController");
const routerLikes = express_1.default.Router();
/**
 * @swagger
 * /api/v1/blogs/{blogId}/likes:
 *   post:
 *     summary: Like a blog
 *     tags: [Likes]
 *     security:
 *       - authToken: []
 *     parameters:
 *       - in: path
 *         name: blogId
 *         schema:
 *           type: string
 *         required: true
 *         description: The blog ID
 *       - in: body
 *         name: body
 *         schema:
 *           type: object
 *           properties:
 *             userId:
 *               type: string
 *               description: The user ID
 *     responses:
 *       '200':
 *         description: Successful response
 *       '401':
 *         description: Unauthorized
 *   get:
 *     summary: Get likes for a blog
 *     tags: [Likes]
 *     security:
 *       - authToken: []
 *     parameters:
 *       - in: path
 *         name: blogId
 *         schema:
 *           type: string
 *         required: true
 *         description: The blog ID
 *       - in: body
 *         name: body
 *         schema:
 *           type: object
 *           properties:
 *             userId:
 *               type: string
 *               description: The user ID
 *     responses:
 *       '200':
 *         description: Successful response
 *       '401':
 *         description: Unauthorized
 */
routerLikes.post("/blogs/:id/likes", userAccess_1.default, likeController_1.like);
routerLikes.get("/blogs/:id/likes", userAccess_1.default, likeController_1.getLikes);
exports.default = routerLikes;
