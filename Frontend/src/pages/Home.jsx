import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import API from "../services/api";
import "../styles/video.css";
import "../styles/home.css";

const categories = [
  "All",
  "Programming",
  "Gaming",
  "Music",
  "Sports",
  "News",
  "Movies",
];

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const location = useLocation();

  const query = new URLSearchParams(location.search);

  const search = query.get("search") || "";

  useEffect(() => {
    fetchVideos();
  }, [search, selectedCategory]);

  const fetchVideos = async () => {
    try {
      const res = await API.get("/videos");

      let filteredVideos = res.data.filter((video) =>
        video.title
          .toLowerCase()
          .includes(search.toLowerCase())
      );

      if (selectedCategory !== "All") {
        filteredVideos = filteredVideos.filter(
          (video) =>
            video.category === selectedCategory
        );
      }

      setVideos(filteredVideos);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="home">
      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={
              selectedCategory === category
                ? "active-category"
                : ""
            }
            onClick={() =>
              setSelectedCategory(category)
            }
          >
            {category}
          </button>
        ))}
      </div>

      <div className="video-grid">
        {videos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Home;