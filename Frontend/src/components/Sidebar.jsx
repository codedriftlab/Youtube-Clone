import "../styles/sidebar.css";
import { FaHome } from "react-icons/fa";
import { IoIosTrendingUp } from "react-icons/io";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
<Link to="/" className="sidebar-link">
  <p><FaHome /> Home</p>
</Link>

<Link to="/trending" className="sidebar-link">
  <p><IoIosTrendingUp /> Trending</p>
</Link>

<Link to="/subscriptions" className="sidebar-link">
  <p><MdOutlineSubscriptions /> Subscriptions</p>
</Link>

<Link to="/shorts" className="sidebar-link">
  <p><SiYoutubeshorts /> Shorts</p>
</Link>
    </div>
  );
};

export default Sidebar;