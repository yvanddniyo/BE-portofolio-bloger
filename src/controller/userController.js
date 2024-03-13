// const Users = require("../models/User")


// const viewAllUser =  async(req, res) => {
//     const users = await Users.find()
//     res.send(users);
//    }
   
//    // router for creating a user 
   
//     const createUser = async(req, res) => {
//        const user = new Users({
//            username: req.body.username,
//            email: req.body.email,
//            password: req.body.password,
//            confirmPassword: req.body.confirmPassword,
//            isAdmin: req.body.isAdmin
//        })
//        await 
//        user.save()
//          .then((user) => {
//            console.log("User saved successfully:", user);
//          })
//          .catch((error) => {
//            console.error("Error saving user:", error);
//          });
//        res.send(user)
//    }
   
//    // Router of getting a single user
   
//   const singleUser =  async(req, res) => {
//        try {
//            const singleUser = await Users.findOne({_id:req.params.id})
//            res.send(singleUser)
//        } catch{
//            res.status(404)
//            res.send({error: "Sorry user doesn't exist."})
//        }
//    }
//    //  Router of  updating a user.
   
//   const deleteUser = async(req, res) => {
//      try {
//        const user  = await Users.findByIdAndDelete({_id:req.params.id})
//        if (!user) {
//          return res.status(404).json({ message: "user not found." });
//      }
//      res.json({ message: 'user deleted successfully' });
//      }
//      catch(error){
//        res.status(500).json({ message: error.message });
//      }
//    }
   
   
//    module.exports = userController