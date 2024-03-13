const Blog = require('../models/blog')

const blogService ={

    viewAllBlog:  async () => {
        return await Blog.find()
    },
    createBlog:  async (title, image, content) => {
        const blog = new Blog({title, image, content})
        return blog.save()
    },
    
    singleBlog: async(id) => {
        return await Blog.findOne(id)
    },
    
    updateBlog: async(id, title, image, content) => {
     return await Blog.findByIdAndUpdate(id, {title, image, content}, {new: true})
    },
    
    deleteBlog: async (id) => {
        return await Blog.findByIdAndDelete(id)
    }
}

module.exports = blogService