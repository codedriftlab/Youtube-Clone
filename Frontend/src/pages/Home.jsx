import { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import VideoCard from "../components/VideoCard";
import API from "../services/api";
import "../styles/video.css";
import "../styles/home.css";

const Home = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    API.get("/videos")
      .then((res) => setVideos(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
          <Header onToggleSidebar={() => setIsOpen(!isOpen)} />

      <Sidebar isOpen={isOpen} />
      <div className="home">
        <div className="video-grid">
          {videos.map((video) => (
            <VideoCard key={video._id} video={video} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;