import { useNavigate } from "react-router-dom";
import "../styles/video.css";

const VideoCard = ({ video }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/watch/${video._id}`)} className="video-card">
      <img src={video.thumbnailUrl} />
      <h4>{video.title}</h4>
      <p>{video.channelName}</p>
    </div>
  );
};

export default VideoCard;