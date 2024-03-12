const blogService = require("../service/blogService")
const Blog = require("../service/blogService")

// Get all posts

const viewAllBlog = async(req, res) => {
    const blogs = await viewAllBlog()
    res.send(blogs)
}

/* create the a blogs */

const createBlog = async(req, res) => {
    try {
        const {title, image, content} = req.body
    const eachBlog =  await blogService.createBlog(title, image, content);
    // eachBlog.save()
    res.send(eachBlog)
    
} catch (error) {
        res.status(201).json(eachBlog)
        
    }
} 

/* Get individual blog */

const singleBlog = async(req, res) => {
    try {
        const oneBlog = await Blog.findOne({_id:req.params.id})
        res.send(oneBlog)
        
    } catch{
        res.status(404)
        res.send({error: "Sorry Blog doesn't exist."})
    }
}

/* Update your Blog */

const updateBlog = async (req, res) => {
    try {
        const blog = await Blog.findOne({ _id: req.params.id });

        if (!blog) {
            console.error(`Blog with ID ${req.params.id} not found.`);
            res.status(404).send({ error: "Blog not found." });
            return;
        }

        if (req.body.title) {
            blog.title = req.body.title;
        }
        if (req.body.title) {
            blog.image = req.body.image;
        }

        if (req.body.content) {
            blog.content = req.body.content;
        }

        await blog.save();
        console.log(`Blog with ID ${req.params.id} updated successfully.`);
        res.send(blog);
    } catch (error) {
        console.error(`Error updating blog with ID ${req.params.id}:`, error);
        res.status(500).send({ error: "Internal Server Error." });
    }
};


/* Deleting a blog */

const deleteBlog =  async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete({ _id: req.params.id });

        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.json({ message: 'Blog deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = userController