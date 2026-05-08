import Comment from "../models/Comment.js";

export const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({
      video: req.params.videoId,
    }).populate("user", "username");

    res.json(comments);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching comments",
    });
  }
};

export const addComment = async (req, res) => {
  try {
    const comment = await Comment.create({
      text: req.body.text,
      user: req.user.id,
      video: req.params.videoId,
    });

    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({
      message: "Error adding comment",
    });
  }
};

export const deleteComment = async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);

    res.json({
      message: "Comment deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: "Delete failed",
    });
  }
};