import Channel from "../models/Channel.js";

export const createChannel = async (req, res) => {
  try {
    const channel = await Channel.create({
      ...req.body,
      owner: req.user.id,
    });

    res.status(201).json(channel);
  } catch (error) {
    res.status(500).json({
      message: "Channel creation failed",
    });
  }
};

export const getChannel = async (req, res) => {
  try {
    const channel = await Channel.findById(req.params.id)
      .populate("owner", "username email");

    res.json(channel);
  } catch (error) {
    res.status(500).json({
      message: "Channel not found",
    });
  }
};