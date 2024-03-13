const blogService = require("../service/blogService")
const Blog = require("../service/blogService")

// Get all posts

const viewAllBlog = async(req, res) => {
    try {
        const blogs = await blogService.viewAllBlog()
        res.send(blogs)
    }
   catch (error) {
    res.status(500).json({ message: error.message });
  }
    }

/* create the a blogs */

const createBlog = async(req, res) => {
    try {
    const {title, image, content} = req.body
    const eachBlog =  await blogService.createBlog(title, image, content);
    res.status(201).json(eachBlog)
 } 
 catch (error) {
        res.status(500).json({ message: error.message });
    }
} 

/* Get individual blog */

const singleBlog = async(req, res) => {
    try {
        const id  = {_id: req.params.id}
        const oneBlog = await blogService.singleBlog(id)
        res.send(oneBlog)  
    } catch{
        res.status(404)
        res.send({error: "Sorry Blog doesn't exist."})
    }
}

/* Update your Blog */

const updateBlog = async (req, res) => {
    try {
        const id = {_id: req.params.id}
        const {title, image, content} = req.body
        const updateBlog = await blogService.updateBlog(id, title, image, content);
        res.json(updateBlog)

        if (!updateBlog) {
            console.error(`Blog with ID ${req.params.id} not found.`);
            res.status(404).send({ error: "Blog not found." });
        }

        // if (req.body.title) {
        //     blog.title = req.body.title;
        // }
        // if (req.body.title) {
        //     blog.image = req.body.image;
        // }

        // if (req.body.content) {
        //     blog.content = req.body.content;
        // }

        // await blog.save();
        // console.log(`Blog with ID ${req.params.id} updated successfully.`);
        // res.send(blog);
    } catch (error) {
        console.error(`Error updating blog with ID ${req.params.id}:`, error);
        res.status(500).send({ error: "Internal Server Error." });
    }
};


/* Deleting a blog */

const deleteBlog =  async (req, res) => {
    try {
     const blog =   await blogService.deleteBlog(req.params.id)
     if (!blog) {
         return res.status(404).json({ message: 'Blog not found' });
        }
        res.json({ message: 'Blog deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    viewAllBlog,
    createBlog,
    singleBlog,
    updateBlog,
    deleteBlog
};