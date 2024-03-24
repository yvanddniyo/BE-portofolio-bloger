import { Blog,IBlog } from "../models/blog";

export class BlogService {
  async getBlogById(blogId: string): Promise<IBlog | null> {
    return await Blog.findById(blogId);
  }

  async updateBlog(blogId: string, updateData: Partial<IBlog>): Promise<IBlog | null> {
    return await Blog.findByIdAndUpdate(blogId, updateData, { new: true });
  }
}