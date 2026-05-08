import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";
import "../styles/player.css";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";


const VideoPlayer = () => {
  const { id } = useParams();

  const [video, setVideo] = useState(null);

  useEffect(() => {
    API.get(`/videos/${id}`)
      .then((res) => setVideo(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleLike = async () => {
    await API.put(`/videos/${id}/like`);

    setVideo({
      ...video,
      likes: video.likes + 1,
    });
  };

  const handleDislike = async () => {
    await API.put(`/videos/${id}/dislike`);

    setVideo({
      ...video,
      dislikes: video.dislikes + 1,
    });
  };

  if (!video) return <h2>Loading...</h2>;

  return (
    <div className="player-page">
      <video controls autoPlay className="video-player">
        <source src={video.videoUrl} type="video/mp4" />
      </video>

      <h2 style={{padding: "8px"}}>{video.title}</h2>

      <p style={{padding: "6px"}}>{video.description}</p>

    <p style={{padding: "6px"}}>
      {video.channelName}
    <br></br>
    <button style={{padding: "6px"}}>25k Subscribers</button>
    </p>
      <div className="video-actions">
        <button onClick={handleLike} style={{color: "green"}}>
          <AiFillLike />
 {video.likes}
        </button>

        <button onClick={handleDislike} style={{color: "red"}}>
          <AiFillDislike />
          {video.dislikes}
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;