  import mongoose from "mongoose"

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
      require: true
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


const userModel = mongoose.model("Users", userContainer)

export default userModel