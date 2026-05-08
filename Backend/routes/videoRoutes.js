import express from "express";

import {
  getVideos,
  getSingleVideo,
  createVideo,
  updateVideo,
  deleteVideo,
  likeVideo,
  dislikeVideo,
} from "../controllers/videoController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getVideos);

router.get("/:id", getSingleVideo);

router.post("/", protect, createVideo);

router.put("/:id", protect, updateVideo);

router.delete("/:id", protect, deleteVideo);

router.put("/:id/like", likeVideo);

router.put("/:id/dislike", dislikeVideo);

export default router;