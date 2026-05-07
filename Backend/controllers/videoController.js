import Video from "../models/Video.js";

export const getVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (err) {
    res.status(500).json({ message: "Error fetching videos" });
  }
};

export const createVideo = async (req, res) => {
  try {
    const video = await Video.create(req.body);
    res.json(video);
  } catch (err) {
    res.status(500).json({ message: "Error creating video" });
  }
};