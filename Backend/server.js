import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import videoRoutes from "./routes/videoRoutes.js";

dotenv.config();
connectDB();

const app = express();

// MIDDLEWARE FIRST
app.use(cors());
app.use(express.json());

// ROUTES AFTER
app.use("/api/videos", videoRoutes);

app.get("/", (req, res) => {
  res.send("API is running successfully");
});

app.listen(process.env.PORT || 4000, () => {
  console.log("Server running on port 4000");
});