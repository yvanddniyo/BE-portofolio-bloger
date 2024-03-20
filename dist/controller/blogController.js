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
const blogService_1 = __importDefault(require("../service/blogService"));
const validateBlog_1 = require("../validate/validateBlog");
const claudinary_1 = __importDefault(require("../helper/claudinary"));
// Get all posts
const viewAllBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogs = yield blogService_1.default.viewAllBlog();
        res.json(blogs);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
/* create the a blogs */
const createBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const file = req.file;
    try {
        const { error, value } = validateBlog_1.blogSchema.validate({
            title: req.body.title,
            description: req.body.description,
            image: file ? file.path : undefined,
        });
        if (error) {
            return res.status(400).json({
                status: "Error",
                message: error.details[0].message,
            });
        }
        const result = yield (0, claudinary_1.default)(file, res);
        const { title, image, content } = value;
        title: title.value;
        image: result;
        content: content.value;
        const eachBlog = yield blogService_1.default.createBlog(title, image, content);
        res.status(201).json(eachBlog);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
/* Get individual blog */
const singleBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const oneBlog = yield blogService_1.default.singleBlog(id);
        res.send(oneBlog);
    }
    catch (_a) {
        res.status(404);
        res.send({ error: "Sorry Blog doesn't exist." });
    }
});
/* Update your Blog */
const updateBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { title, image, content } = req.body;
        const updateBlog = yield blogService_1.default.updateBlog(id, title, image, content);
        res.json(updateBlog);
        if (!updateBlog) {
            console.error(`Blog with ID ${req.params.id} not found.`);
            res.status(404).send({ error: "Blog not found." });
        }
    }
    catch (error) {
        console.error(`Error updating blog with ID ${req.params.id}:`, error);
        res.status(500).send({ error: "Internal Server Error." });
    }
});
/* Deleting a blog */
const deleteBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = yield blogService_1.default.deleteBlog(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.json({ message: 'Blog deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.default = {
    viewAllBlog,
    createBlog,
    singleBlog,
    updateBlog,
    deleteBlog
};
