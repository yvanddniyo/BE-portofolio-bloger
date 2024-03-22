"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const connectDB = require("./src/config/db")
const db_1 = __importDefault(require("./config/db"));
const app = (0, express_1.default)();
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const body_parser_1 = __importDefault(require("body-parser"));
const PORT = process.env.PORT || 5000;
// import upload from './helper/multer';
// import cloudinary from 'cloudinary';
// import fs from 'fs'
// connect to the mongoDB
(0, db_1.default)();
// middlewares
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
/*new routes*/
// app.use('/api/v1', router)
// app.use('/api/v1', routerComment)
// app.use('/api/v1', routerLikes)
// app.use('/api/v1', routerQuery)
app.use('/api/v1', userRoute_1.default);
// app.use('/api/v1', routerAuth)
exports.default = app;