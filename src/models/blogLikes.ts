import mongoose from "mongoose";

const schema = new mongoose.Schema ({
    blogId: {
        type:mongoose.Schema.Types.ObjectId, 
        ref: 'blogs', 
        require:true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        require: true,
        ref: "Users"
    },
   
},{
 timestamps: true
})

export default  mongoose.model('blogLikes', schema);