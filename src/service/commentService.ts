import blogComment from "../models/blogComment";
import blog from "../models/blog";

const commentService = {
 createComment: async(blogId:string, name: string, content: string) => {
            // const blogIds = blog.findOne({_id: blogId}) 
            // if (!blogIds) {
            //     throw new Error("blog not found")
            // } 
            const newComment = await blogComment.create({
                blogId,
                name,
                content
            })
            const savedComment = await newComment.save();
        return savedComment;
    },
 viewAllComment: async(blogId: string) => {
   
    const comments = await blogComment.find({blogId: blogId});
    return comments;
 }
}

export default commentService