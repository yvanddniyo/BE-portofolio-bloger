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
const commentService_1 = __importDefault(require("../service/commentService"));
const blogComment_1 = __importDefault(require("../models/blogComment"));
const validate_1 = require("../validate/validate");
const createComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogId = req.params.id;
        const { name, content } = req.body;
        const { error } = (0, validate_1.commentsValidate)({ name, content });
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        const comments = yield commentService_1.default.createComment(blogId, name, content);
        res.status(201).json({
            comment: `${blogComment_1.default.length}`,
            message: "comment successfully added"
        });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
const viewAllComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogId = req.params.id;
        const comments = yield commentService_1.default.viewAllComment(blogId);
        res.send(comments);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.default = {
    createComment,
    viewAllComment
};
