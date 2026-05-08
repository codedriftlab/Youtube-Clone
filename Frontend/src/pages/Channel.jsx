import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import API from "../services/api";

import VideoCard from "../components/VideoCard";

const Channel = () => {
  const { name } = useParams();

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchChannelVideos();
  }, [name]);

  const fetchChannelVideos = async () => {
    try {
      const res = await API.get("/videos");

      const filtered = res.data.filter(
        (video) => video.channelName === name
      );

      setVideos(filtered);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        marginLeft: "220px",
        padding: "20px",
      }}
    >
      <h1>{name}</h1>

      <p>{videos.length} videos</p>

      <div className="video-grid">
        {videos.map((video) => (
          <VideoCard
            key={video._id}
            video={video}
          />
        ))}
      </div>
    </div>
  );
};

export default Channel;