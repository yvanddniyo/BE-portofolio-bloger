import blogLikes from "../models/blogLikes";
import blog from "../models/blog";

const likeBlogs = {
    likeBlog: async (blogId: string, userId: string): Promise<void> => {
        try {
            const blogDoc = await blog.findOne({ _id: blogId });
            if (!blogDoc) {
                throw new Error("Invalid blog ID");
            }

            const existLike = await blogLikes.findOne({ blogId, userId });
            if (existLike) {
                throw new Error("You already like this blog");
            } else {
                const newLike = new blogLikes({
                    blogId,
                    userId,
                });
                await newLike.save();
            }
        } catch (error) {
            console.error("Error liking the blog:", (error as Error).message);
            throw error;
        }
    },

    viewLikes: async (blogId: string) => {
        const likes = await blogLikes.find({ blogId: blogId });
        return likes;
    },

    countLikes: async (blogId: string) => {
        try {
            const count = await blogLikes.countDocuments({ blogId: blogId });
            return count;
        } catch (error) {
            console.error("Error counting likes for the blog:", (error as Error).message);
            throw error;
        }
    }
};

export default likeBlogs;
