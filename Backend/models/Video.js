import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: String,
  thumbnailUrl: String,
  videoUrl: String,
  channelName: String,
  views: Number,
  uploadDate: String,
  category: String,
});

export default mongoose.model("Video", videoSchema);