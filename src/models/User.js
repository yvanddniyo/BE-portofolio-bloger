const mongoose = require("mongoose")

const UserSchema =  mongoose.Schema({
    username: { 
     type: String, 
     required: true, 
     unique: true
    },
    email: { 
     type: String, 
     required: true, 
     unique: true
    },
    password: {
     type: String, 
     required: true
    },
    confirmPassword: { 
     type: String, 
     required: true},
    isAdmin: { 
     type: Boolean,
     default: false,
    },
   },
   {timestamps: true} 
   );

module.exports = mongoose.model("users", UserSchema)