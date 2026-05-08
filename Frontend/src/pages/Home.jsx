import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import VideoCard from "../components/VideoCard";
import API from "../services/api";

import "../styles/video.css";
import "../styles/home.css";

const Home = () => {
  const [videos, setVideos] = useState([]);

  const location = useLocation();

  const query = new URLSearchParams(location.search);

  const search = query.get("search") || "";

  useEffect(() => {
    fetchVideos();
  }, [search]);

  const fetchVideos = async () => {
    try {
      const res = await API.get("/videos");

      const filteredVideos = res.data.filter((video) =>
        video.title
          .toLowerCase()
          .includes(search.toLowerCase())
      );

      setVideos(filteredVideos);
    } catch (err) {
      console.log(err);
    }
  };

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