"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blog = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    title: { type: String, require: true },
    image: { type: String, require: true },
    content: { type: String, require: true },
    likeCount: { type: Number, default: 0 },
}, {
    timestamps: true
});
exports.Blog = mongoose_1.default.model('Blog', schema);
