
import mongoose, { Document, Schema, Model } from 'mongoose';
import dotenv from 'dotenv'
// import { config } from 'yargs';



interface IBlog extends Document {
    title: string;
    image: string;
    content: string;
}

dotenv.config()
const BlogSchema: Schema = new Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    content: { type: String, required: true }
}, { timestamps: true });

const BlogModel: Model<IBlog> = mongoose.model<IBlog>("Blog", BlogSchema);

describe('Blog Model', () => {
    beforeAll(async () => {
        await mongoose.connect(`${process.env.MONGO_URL}`, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        });
    });

    afterEach(async () => {
        await BlogModel.deleteMany({});
    });

    afterAll(async () => {
        await mongoose.disconnect();
    });

    test('should create a new blog post', async () => {
        const blogData = {
            title: 'Test Blog Post',
            image: 'test-image-url.jpg',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        };

        const blogPost = new BlogModel(blogData);
        const savedBlogPost = await blogPost.save();

        expect(savedBlogPost._id).toBeDefined();
        expect(savedBlogPost.title).toBe(blogData.title);
        expect(savedBlogPost.image).toBe(blogData.image);
        expect(savedBlogPost.content).toBe(blogData.content);
    });

    test('should not save a blog post without required fields', async () => {
        const blogWithoutRequiredFields = new BlogModel({});

        let error:any;
        try {
            await blogWithoutRequiredFields.save();
        } catch (err) {
            error = err;
        }

        expect(error).toBeInstanceOf(mongoose.Error.ValidationError);
        expect(error.errors.title).toBeDefined();
        expect(error.errors.image).toBeDefined();
        expect(error.errors.content).toBeDefined();
    });
});
