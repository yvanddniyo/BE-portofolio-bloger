"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserSchema = exports.updateBlogSchema = exports.querySchema = exports.blogSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.blogSchema = joi_1.default.object({
    title: joi_1.default.string().required().min(4).max(20),
    content: joi_1.default.string().required(),
    image: joi_1.default.string().required().min(10)
});
exports.querySchema = joi_1.default.object({
    name: joi_1.default.string().min(2).max(30).required(),
    email: joi_1.default.string().email().required(),
    message: joi_1.default.string().max(1000).required(),
});
exports.updateBlogSchema = joi_1.default.object({
    title: joi_1.default.string().optional(),
    description: joi_1.default.string().optional(),
    image: joi_1.default.string().optional()
});
exports.updateUserSchema = joi_1.default.object({
    name: joi_1.default.string().min(4).max(12).optional(),
    email: joi_1.default.string().email().optional(),
    role: joi_1.default.string().trim().optional(),
    password: joi_1.default.string().trim().optional()
});
