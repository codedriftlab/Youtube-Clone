import express from "express";

import {
  createChannel,
  getChannel,
} from "../controllers/channelController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createChannel);
router.get("/:id", getChannel);

export default router;