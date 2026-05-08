import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import API from "../services/api";

import VideoCard from "../components/VideoCard";

import "../styles/channel.css";

const Channel = () => {
  const { name } = useParams();

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchChannelVideos();
  }, [name]);

  const fetchChannelVideos = async () => {
    try {
      const res = await API.get("/videos");

      const filteredVideos = res.data.filter(
        (video) => video.channelName === name
      );

      setVideos(filteredVideos);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="channel-page">
      <div className="channel-banner"></div>

      <div className="channel-info">
        <div className="channel-avatar">
          {name.charAt(0)}
        </div>

        <div>
          <h1>{name}</h1>

          <p>{videos.length} videos</p>
        </div>
      </div>

      <div className="channel-videos">
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