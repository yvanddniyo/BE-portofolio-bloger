"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const mongoose_1 = __importStar(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const BlogSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    content: { type: String, required: true }
}, { timestamps: true });
const BlogModel = mongoose_1.default.model("Blog", BlogSchema);
describe('Blog Model', () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield mongoose_1.default.connect(`${process.env.MONGO_URL}`, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true
        });
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield BlogModel.deleteMany({});
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield mongoose_1.default.disconnect();
    }));
    test('should create a new blog post', () => __awaiter(void 0, void 0, void 0, function* () {
        const blogData = {
            title: 'Test Blog Post',
            image: 'test-image-url.jpg',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        };
        const blogPost = new BlogModel(blogData);
        const savedBlogPost = yield blogPost.save();
        expect(savedBlogPost._id).toBeDefined();
        expect(savedBlogPost.title).toBe(blogData.title);
        expect(savedBlogPost.image).toBe(blogData.image);
        expect(savedBlogPost.content).toBe(blogData.content);
    }));
    test('should not save a blog post without required fields', () => __awaiter(void 0, void 0, void 0, function* () {
        const blogWithoutRequiredFields = new BlogModel({});
        let error;
        try {
            yield blogWithoutRequiredFields.save();
        }
        catch (err) {
            error = err;
        }
        expect(error).toBeInstanceOf(mongoose_1.default.Error.ValidationError);
        expect(error.errors.title).toBeDefined();
        expect(error.errors.image).toBeDefined();
        expect(error.errors.content).toBeDefined();
    }));
});
