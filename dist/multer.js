"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.diskStorage({
    destination: function (req, res, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + '-' + file.originalname);
    }
});
// file validation
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
        cb(null, true);
    }
    else {
        cb({
            message: "Unsupport file format",
        }, false);
    }
};
const upload = (0, multer_1.default)({
    storage: storage,
    limits: { fileSize: 1024 * 1024 },
    // fileFilter: fileFilter
});
exports.default = upload;
