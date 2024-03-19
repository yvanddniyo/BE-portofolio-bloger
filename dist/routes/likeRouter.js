"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const likeController_1 = __importDefault(require("../controller/likeController"));
const tokenAuth_1 = __importDefault(require("../middlewares/tokenAuth"));
const routerLikes = express_1.default.Router();
routerLikes.post("/blogs/:id/likes", tokenAuth_1.default, likeController_1.default.likeBlog);
routerLikes.get("/blogs/:id/likes", likeController_1.default.viewLikes);
exports.default = routerLikes;
