import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";
import "../styles/player.css";

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

      <h2>{video.title}</h2>

      <p>{video.description}</p>

      <div className="video-actions">
        <button onClick={handleLike}>
          👍 {video.likes}
        </button>

        <button onClick={handleDislike}>
          👎 {video.dislikes}
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;