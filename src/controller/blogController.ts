import blogService from "../service/blogService"
import { Request, Response } from "express"
// import { blogSchema, updateBlogSchema } from "../validate/validateBlog"
import uploadFile from "../helper/claudinary"
import { createValidate, updateValidate } from "../validate/validate"
// import { uploadFile } from "../helper/claudinary"
// import uploadFile from "../helper/claudinary"

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

const createBlog = async (req: Request, res: Response) => {
<<<<<<< HEAD
  //   console.log('Request headers:', req.headers);
  // console.log('Request body:', req.body);
=======
>>>>>>> ft-swagger
  console.log('Request file:', req.file);
    const file = req.file;
    try {
      if (!file) {
        return res.status(400).json({ message: 'No file uploaded' });
      }
  
      const imageUrl = await uploadFile(file);
      const { title, content } = req.body;
      const { error } = createValidate({ title, image: imageUrl, content });
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
      const eachBlog = await blogService.createBlog(title, imageUrl, content);
      res.status(201).json({
        title: title,
        message: "Blog create successfully"
      });
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  }; 

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

const updateBlog = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const file = req.file;
  
      const { title, content } = req.body;
      let imageUrl = req.body.image;
  
      if (file) {
        imageUrl = await uploadFile(file);
      }
  
      const { error } = updateValidate({ title, image: imageUrl, content });
      if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(400).json({ errors });
      }
  
      const updatedBlog = await blogService.updateBlog(id, title, imageUrl, content);
  
      if (!updatedBlog) {
        console.error(`Blog with ID ${req.params.id} not found.`);
        return res.status(404).json({ message: 'Blog not found.' });
      }
  
      return res.status(200).json({ message: 'Blog updated successfully.' });
    } catch (error) {
      console.error(`Error updating blog with ID ${req.params.id}:`, error);
      res.status(500).json({ error: 'Internal Server Error.' });
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