import blogLikes from "../models/blogLikes";
import blog from "../models/blog";

const likeBlogs = {
 
   likeBlog: async (blogId: string, userId: string, like: number): Promise<void> => {
       
        const blogIds = blog.findOne({_id: blogId})
        if (!blogIds) {
        throw new Error("Invalid blog ID")
        } 
        const existLike = await blogLikes.findOne({blogId, userId})
      if (existLike) {
        throw new Error("you already like this blog")
      }
      const newLike  = new blogLikes ({
        blogId,
        userId,
        like
      });
      await newLike.save()
    }, 
  
    viewLikes: async(blogId: string) => {
   
      const likes = await blogLikes.find({blogId: blogId});
      return likes;
   }
  }
export default likeBlogs