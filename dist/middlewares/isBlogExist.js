"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkExistingBlog = void 0;
const blog_1 = require("../models/blog");
const checkExistingBlog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogId = req.params.id;
        const isBlogThere = yield blog_1.Blog.findById(blogId);
        if (!isBlogThere) {
            return res.status(404).json({
                message: "Blog you selected not found."
            });
        }
        req.blog = isBlogThere;
        next();
    }
    catch (error) {
        console.error('Error checking blog existence:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});
exports.checkExistingBlog = checkExistingBlog;
