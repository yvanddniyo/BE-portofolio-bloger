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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blogLikes_1 = __importDefault(require("../models/blogLikes"));
const blog_1 = __importDefault(require("../models/blog"));
const likeBlogs = {
    likeBlog: (blogId, userId) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const blogDoc = yield blog_1.default.findOne({ _id: blogId });
            if (!blogDoc) {
                throw new Error("Invalid blog ID");
            }
            const existLike = yield blogLikes_1.default.findOne({ blogId, userId });
            if (existLike) {
                throw new Error("You already like this blog");
            }
            else {
                const newLike = new blogLikes_1.default({
                    blogId,
                    userId,
                });
                yield newLike.save();
            }
        }
        catch (error) {
            console.error("Error liking the blog:", error.message);
            throw error;
        }
    }),
    viewLikes: (blogId) => __awaiter(void 0, void 0, void 0, function* () {
        const likes = yield blogLikes_1.default.find({ blogId: blogId });
        return likes;
    }),
    countLikes: (blogId) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const count = yield blogLikes_1.default.countDocuments({ blogId: blogId });
            return count;
        }
        catch (error) {
            console.error("Error counting likes for the blog:", error.message);
            throw error;
        }
    })
};
exports.default = likeBlogs;
