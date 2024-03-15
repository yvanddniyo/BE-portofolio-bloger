  import mongoose from "mongoose"
  import bcrypt from "bcrypt"

  const userContainer = new mongoose.Schema({
    username: {
      type: String, 
      requie: true
  },
    email: {
      type: String, 
      requie: true
  },
    password: {
      type: String, 
      requie: true
  },
  token:{
      type:String,
      required: true
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
  },
  {
      timestamps: true
  })


  export default mongoose.model("Users", userContainer)