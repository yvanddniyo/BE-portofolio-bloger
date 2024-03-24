"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploads = void 0;
const cloudinary_1 = require("cloudinary");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Initialize Cloudinary with your configuration
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
const uploads = (file, folder) => {
    return new Promise(resolve => {
        const options = {
            resource_type: "auto", // Add resource_type property explicitly
            folder: folder
        };
        cloudinary_1.v2.uploader.upload(file, (result) => {
            resolve({
                url: result.url,
                id: result.public_id
            });
        }, options);
    });
};
exports.uploads = uploads;
