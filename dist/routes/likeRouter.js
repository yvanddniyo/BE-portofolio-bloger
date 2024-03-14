"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import likeBlog from "../controller/likeController";
const likeController_1 = __importDefault(require("../controller/likeController"));
const routerLikes = express_1.default.Router();
routerLikes.post("/blogs/:id/likes", likeController_1.default.likeBlog);
routerLikes.get("/blogs/:id/likes", likeController_1.default.viewLikes);
exports.default = routerLikes;
