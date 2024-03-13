"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const blogController_1 = __importDefault(require("../controller/blogController"));
router.get('/blogs', blogController_1.default.viewAllBlog);
router.post('/blogs', blogController_1.default.createBlog);
router.get('/blogs/:id', blogController_1.default.singleBlog);
router.patch('/blogs/:id', blogController_1.default.updateBlog);
router.delete('/blogs/:id', blogController_1.default.deleteBlog);
exports.default = router;
