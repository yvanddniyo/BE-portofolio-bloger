import mongoose from 'mongoose'

export interface IBlog extends Document {
    title: string;
    image: string;
    content: string;
    likeCount: number;
  }

const schema = new mongoose.Schema({
    title: {type: String, require: true},
    image: {type: String, require: true},
    content: {type: String, require: true},
    likeCount: { type: Number, default: 0 },   
},
{
    timestamps: true
}
)

export const Blog = mongoose.model<IBlog>('Blog', schema);
