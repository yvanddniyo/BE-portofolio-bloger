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
// const Blog = require('../models/blog')
const blog_1 = __importDefault(require("../models/blog"));
const blogService = {
    viewAllBlog: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield blog_1.default.find();
    }),
    createBlog: (title, image, content) => __awaiter(void 0, void 0, void 0, function* () {
        const blog = new blog_1.default({ title, image, content });
        return blog.save();
    }),
    singleBlog: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield blog_1.default.findById(id);
    }),
    updateBlog: (id, title, image, content) => __awaiter(void 0, void 0, void 0, function* () {
        return yield blog_1.default.findByIdAndUpdate(id, { title, image, content }, { new: true });
    }),
    deleteBlog: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield blog_1.default.findByIdAndDelete(id);
    })
};
exports.default = blogService;
