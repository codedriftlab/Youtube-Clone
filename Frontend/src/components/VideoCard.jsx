import { Link } from "react-router-dom";
import "../styles/videoCard.css";

const VideoCard = ({ video }) => {
  return (
    <Link
      to={`/video/${video._id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="video-card">
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="thumbnail"
        />

        <div className="video-info">
          <h4>{video.title}</h4>

          <p>{video.category}</p>

          <span>{video.views} views</span>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;