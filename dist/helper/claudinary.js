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
const index_1 = __importDefault(require("./index"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Initialize Cloudinary with your configuration
// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET
// });
// const uploadFile = async (file: Express.Multer.File, res: Response) => {
//     try {
//       const upload = await cloudinary.uploader.upload(file.path);
//       return upload.secure_url;
//     } catch(error){
//       return res.status(500).send(error);
//     }
// };
// export default uploadFile;
// import { Request, Response } from 'express';
// import cloudinary from 'cloudinary';
const uploadFile = (file) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield index_1.default.uploader.upload(file.path, {
            resource_type: 'auto',
            folder: 'assets', // Specify the folder name where you want to store the uploaded images
        });
        return result.secure_url; // Return the secure URL of the uploaded image
    }
    catch (error) {
        console.error('Error uploading file to Cloudinary:', error);
        throw error;
    }
});
exports.default = uploadFile;
