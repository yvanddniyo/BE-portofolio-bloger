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
exports.getLikes = exports.like = void 0;
const blogService_1 = require("../service/blogService");
const likeServices_1 = require("../service/likeServices");
const like = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    console.log("User object:", user);
    console.log('req.user:', req.user);
    if (!user) {
        return res.status(401).json({ status: "Error", message: "User not authenticated" });
    }
    try {
        const id = req.params.id;
        // const userId = user.userId || user.id || user._id; 
        const userId = user.id;
        console.log('id:', id);
        console.log('userId:', userId);
        const existingLike = yield (0, likeServices_1.getSingleLike)(id, userId);
        ;
        console.log(existingLike);
        if (existingLike) {
            yield (0, likeServices_1.dislike)(existingLike._id);
            res.status(200).json({ status: "success", message: "Like removed successfully" });
        }
        else {
            const blog = yield (0, blogService_1.getSingleBlog)(id);
            if (!blog) {
                return res.status(404).json({ status: "Error", message: "Blog not found" });
            }
            const Like = yield (0, likeServices_1.createLike)(id, userId);
            res.status(200).json({
                status: "success",
                message: "your like was added",
                data: Like
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ message: error.message });
    }
});
exports.like = like;
const getLikes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const likes = yield (0, likeServices_1.getAllLikes)(req.params.id);
        res.status(200).json({
            status: "success",
            likes: likes.length,
            data: likes
        });
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
});
exports.getLikes = getLikes;
