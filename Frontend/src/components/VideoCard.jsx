import { Link, useNavigate } from "react-router-dom";
import "../styles/videoCard.css";

const VideoCard = ({ video }) => {
  const navigate = useNavigate();

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

          {/* <p>{video.category}</p> */}

<p onClick={(e) => {
    e.preventDefault();

    navigate(`/channel/${video.channelName}`);
  }}
  className="channel-name"
>
  {video.channelName}
</p>          
          <span>{video.views} views</span>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;