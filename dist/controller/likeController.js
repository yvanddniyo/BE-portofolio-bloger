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
const likeServices_1 = __importDefault(require("../service/likeServices"));
const mongoose_1 = __importDefault(require("mongoose"));
const likeBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { blogId, userId, like } = req.body;
    let _id = req.params.id;
    if (!mongoose_1.default.Types.ObjectId.isValid(_id)) {
        return res.status(400).send({ message: "invalid Blog Id" });
    }
    try {
        yield likeServices_1.default.likeBlog(blogId, userId, like);
        return res.status(201).json({ message: "you successful like the blog" });
    }
    catch (error) {
        console.error(error);
        return res.status(400).json({ message: error.message });
    }
});
const viewLikes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogId = req.params.id;
        const likes = yield likeServices_1.default.viewLikes(blogId);
        res.send(likes);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.default = {
    likeBlog,
    viewLikes
};
