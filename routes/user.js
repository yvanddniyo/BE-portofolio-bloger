const express = require('express');
const Users = require("../models/User")
const router = express.Router()

// routes for getting users registered...

router.get('/users', async(req, res) => {
 const users = await Users.find()
 res.send(users);
})

// router for creating a user 

router.post('/user', async(req, res) => {
    const user = new Users({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        isAdmin: req.body.isAdmin
    })
    await 
    user.save()
      .then((user) => {
        console.log("User saved successfully:", user);
      })
      .catch((error) => {
        console.error("Error saving user:", error);
      });
    res.send(user)
})

// Router of getting a single user

router.get("/user/:id/", async(req, res) => {
    try {
        const singleUser = await Users.findOne({_id:req.params.id})
        res.send(singleUser)
    } catch{
        res.status(404)
        res.send({error: "Sorry user doesn't exist."})
    }
})
module.exports = router 