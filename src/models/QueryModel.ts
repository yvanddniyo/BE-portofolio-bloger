
import mongoose from "mongoose";

const queryFromClient = new mongoose.Schema({
   name: {type: String, require: true},
   email: {type: String, require: true},
  message: {type: String, require: true},
  
},{
    timestamps: true
  }
)

export default mongoose.model("queries", queryFromClient)