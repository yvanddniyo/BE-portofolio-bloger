const express = require("express");
const Blog = require("../models/blog")
const router = express.Router() // It lets us register the routes and use it in our application (in index.js)

// Get all posts

router.get('/blogs', async(req, res) => {
    const blogs = await Blog.find()
    res.send(blogs)
})

/* create the a blogs */

router.post('/blog', async(req, res) => {
    const eachBlog =  new Blog({
        title: req.body.title,
        image: req.body.image,

        content: req.body.content

     
    })
    await eachBlog.save()
    res.send(eachBlog)
})  

/* Get individual blog */

router.get("/blogs/:id", async(req, res) => {
    try {
        const oneBlog = await Blog.findOne({_id:req.params.id})
        res.send(oneBlog)
        
    } catch{
        res.status(404)
        res.send({error: "Sorry Blog doesn't exist."})
    }
})

/* Update your Blog */

router.patch("/blogs/:id", async (req, res) => {
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
});


/* Deleting a blog */

router.delete("/blogs/:id", async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete({ _id: req.params.id });

        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.json({ message: 'Blog deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router