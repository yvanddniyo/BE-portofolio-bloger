import mongoose from "mongoose";

const schema = new mongoose.Schema ({
    blogId: {type:mongoose.Schema.Types.ObjectId, ref: 'blogs', require:true},
    userId: {type: String, require: true},
    like: { type: Number, default: 0}
},{
 timestamps: true
})

export default  mongoose.model('blogLike', schema);