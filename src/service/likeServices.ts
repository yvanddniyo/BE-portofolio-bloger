import Like from "../models/blogLikes";
import mongoose from 'mongoose';
import Likes from "../models/blogLikes"

export const createLike = async (id: string, userId: string) => {
  const Likea = await Like.create({
    blog: id,
    user: new mongoose.Types.ObjectId(userId),
  });
  return Likea;
};

export const getSingleLike = async (blogId: string, userId: string) => {
  const like = await Like.findOne({
    // blog: blogId
    user: userId
  });
  console.log(like)
  return like;
};

export const dislike = async (id: string) => {
    const like = await Like.findByIdAndDelete(id)
    return like;
}

export const getAllLikes = async (id: string) => {
  const likes = await Like.find({ blog: id });
  const likesCount = await Like.countDocuments({ blog: id });
  return { likes, likesCount };
};