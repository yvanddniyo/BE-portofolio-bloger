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
router.post("/blogs/:id/likes", userAccess_1.default, likeController_1.like);
router.get("/blogs/:id/likes", userAccess_1.default, likeController_1.getLikes);
exports.default = routerLikes;
