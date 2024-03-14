import mongoose from "mongoose";

const schema = new mongoose.Schema ({
    blogId: {type:mongoose.Schema.Types.ObjectId, ref: 'blogs', require:true},
    name: {type: String, require: true},
    content: {type: String, require: true},
    
},{
 timestamps: true
})

export default  mongoose.model('blogComment', schema);