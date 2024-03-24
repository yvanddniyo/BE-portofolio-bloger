import blogComment from "../models/blogComment";

const commentService = {
 createComment: async(blogId:string, name: string, content: string) => {
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