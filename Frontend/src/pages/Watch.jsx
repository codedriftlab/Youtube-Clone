import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";

const Watch = () => {
  const { videoId } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    API.get(`/videos/${videoId}`)
      .then(res => setVideo(res.data))
      .catch(err => console.log(err));
  }, [videoId]);

  if (!video) return <p>Loading...</p>;

  return (
    <div>
      <video src={video.videoUrl} controls width="70%" />
      <h2>{video.title}</h2>
      <p>{video.channelName}</p>
    </div>
  );
};

export default Watch;