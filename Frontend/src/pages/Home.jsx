import { useEffect, useState } from "react";
import VideoCard from "../components/VideoCard";
import API from "../services/api";
import "../styles/video.css";
import "../styles/home.css";

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    API.get("/videos")
      .then((res) => setVideos(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="home">
      <div className="video-grid">
        {videos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Home;