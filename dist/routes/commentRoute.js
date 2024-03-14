"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const commentController_1 = __importDefault(require("../controller/commentController"));
const routerComment = express_1.default.Router();
routerComment.post("/blogs/:id/comments", commentController_1.default.createComment);
routerComment.get("/blogs/:id/comments", commentController_1.default.viewAllComment);
exports.default = routerComment;
