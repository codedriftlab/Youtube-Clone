import Video from "../models/Video.js";

export const getVideos = async (req, res) => {
  try {
    const videos = await Video.find();

    res.json(videos);
  } catch (err) {
    res.status(500).json({
      message: "Error fetching videos",
    });
  }
};

export const getSingleVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);

    res.json(video);
  } catch (err) {
    res.status(500).json({
      message: "Error fetching video",
    });
  }
};

export const createVideo = async (req, res) => {
  try {
    const video = await Video.create(req.body);

    res.json(video);
  } catch (err) {
    res.status(500).json({
      message: "Error creating video",
    });
  }
};

export const updateVideo = async (req, res) => {
  try {
    const updatedVideo = await Video.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedVideo);
  } catch (err) {
    res.status(500).json({
      message: "Error updating video",
    });
  }
};

export const deleteVideo = async (req, res) => {
  try {
    await Video.findByIdAndDelete(req.params.id);

    res.json({
      message: "Video deleted",
    });
  } catch (err) {
    res.status(500).json({
      message: "Error deleting video",
    });
  }
};

export const likeVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);

    video.likes += 1;

    await video.save();

    res.json(video);
  } catch (err) {
    res.status(500).json({
      message: "Error liking video",
    });
  }
};

export const dislikeVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);

    video.dislikes += 1;

    await video.save();

    res.json(video);
  } catch (err) {
    res.status(500).json({
      message: "Error disliking video",
    });
  }
};