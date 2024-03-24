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
const blogComment_1 = __importDefault(require("../models/blogComment"));
// import blog from "../models/blog";
// import { Blog } from "../models/blog";
const commentService = {
    createComment: (blogId, name, content) => __awaiter(void 0, void 0, void 0, function* () {
        // const blogIds = blog.findOne({_id: blogId}) 
        // if (!blogIds) {
        //     throw new Error("blog not found")
        // } 
        const newComment = yield blogComment_1.default.create({
            blogId,
            name,
            content
        });
        const savedComment = yield newComment.save();
        return savedComment;
    }),
    viewAllComment: (blogId) => __awaiter(void 0, void 0, void 0, function* () {
        const comments = yield blogComment_1.default.find({ blogId: blogId });
        return comments;
    })
};
exports.default = commentService;
