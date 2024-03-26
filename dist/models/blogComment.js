"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    blogId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'blogs', require: true },
    name: { type: String, require: true },
    content: { type: String, require: true },
}, {
    timestamps: true
});
exports.default = mongoose_1.default.model('blogComment', schema);
