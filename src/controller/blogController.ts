// const blogService = require("../service/blogService")
import blogService from "../service/blogService"
import { Request, Response } from "express"
// import Blog from "../service/blogService"

// Get all posts

const viewAllBlog = async(req:Request, res:Response) => {
    try {
        const blogs = await blogService.viewAllBlog()
        res.json(blogs)
    }
   catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
    }

/* create the a blogs */

const createBlog = async(req:Request, res:Response) => {
    try {
    const {title, image, content} = req.body
    const eachBlog =  await blogService.createBlog(title, image, content);
    res.status(201).json(eachBlog)
 } 
 catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
} 

/* Get individual blog */

const singleBlog = async(req:Request, res:Response) => {
    try {
        const id  = req.params.id
        const oneBlog = await blogService.singleBlog(id)
        res.send(oneBlog)  
    } catch{
        res.status(404)
        res.send({error: "Sorry Blog doesn't exist."})
    }
}

/* Update your Blog */

const updateBlog = async (req:Request, res:Response) => {
    try {
        const id = req.params.id
        const {title, image, content} = req.body
        const updateBlog = await blogService.updateBlog(id, title, image, content);
        res.json(updateBlog)

        if (!updateBlog) {
            console.error(`Blog with ID ${req.params.id} not found.`);
            res.status(404).send({ error: "Blog not found." });
        }

    } catch (error) {
        console.error(`Error updating blog with ID ${req.params.id}:`, error);
        res.status(500).send({ error: "Internal Server Error." });
    }
};


/* Deleting a blog */

const deleteBlog =  async (req:Request, res:Response) => {
    try {
     const blog =   await blogService.deleteBlog(req.params.id)
     if (!blog) {
         return res.status(404).json({ message: 'Blog not found' });
        }
        res.json({ message: 'Blog deleted successfully' });
    } catch (error) {
        res.status(500).json({ message:(error as Error).message });
    }
};


export default  {
    viewAllBlog,
    createBlog,
    singleBlog,
    updateBlog,
    deleteBlog
};