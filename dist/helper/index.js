"use strict";
// interface Blog {
//     title: string;
//     description: string;
//     image: string;
//   }
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//   export { Blog };
// import image from 
const cloudinary_1 = require("cloudinary");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
cloudinary_1.v2.config({
    cloud_name: 'drzvjud14',
    api_key: '945745253876598',
    api_secret: 'YTV6DbQQ8P5Sx1Yuj7dgLyqFhNM'
});
const image = 'https://st4.depositphotos.com/1662991/31353/i/450/depositphotos_313539636-stock-photo-handsome-young-male-software-developer.jpg';
const run = () => {
    cloudinary_1.v2.uploader.upload(image).then(result => {
        console.log(result);
    }).catch(error => {
        console.error('Error uploading image:', error);
    });
};
run();
