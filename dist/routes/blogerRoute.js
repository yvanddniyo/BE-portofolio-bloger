"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const blogController_1 = __importDefault(require("../controller/blogController"));
const tokenAuth_1 = __importDefault(require("../middlewares/tokenAuth"));
const userAccess_1 = __importDefault(require("../middlewares/userAccess"));
const multer_1 = __importDefault(require("../helper/multer"));
const isBlogExist_1 = require("../middlewares/isBlogExist");
router.get('/blogs', userAccess_1.default, blogController_1.default.viewAllBlog);
router.post('/blogs', multer_1.default.single('image'), blogController_1.default.createBlog);
router.get('/blogs/:id', userAccess_1.default, blogController_1.default.singleBlog);
router.patch('/blogs/:id', multer_1.default.single('image'), tokenAuth_1.default, isBlogExist_1.checkExistingBlog, blogController_1.default.updateBlog);
router.delete('/blogs/:id', tokenAuth_1.default, isBlogExist_1.checkExistingBlog, blogController_1.default.deleteBlog);
exports.default = router;
