import {Blog, IBlog}from "../models/blog"

const blogService ={

    viewAllBlog:  async () => {
        return await Blog.find()
    },
    createBlog:  async (title:string, image:string, content:string) => {
        const blog = new Blog({title, image, content})
        return blog.save()
    },
    
    singleBlog: async(id:string) => {
        return await Blog.findById(id)
    },
    
    updateBlog: async(id:string, title:string, image:string, content:string) => {
     return await Blog.findByIdAndUpdate(id, {title, image, content}, {new: true})
    },
    
    deleteBlog: async (id:string) => {
        return await Blog.findByIdAndDelete(id) 
    } 
}
export const getSingleBlog = async (id: string) => {
    const blog = await Blog.findById(id);
    return blog;
 }

export default blogService