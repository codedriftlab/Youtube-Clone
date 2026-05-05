import "../styles/sidebar.css";
import { FaHome } from "react-icons/fa";
import { IoIosTrendingUp } from "react-icons/io";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";





const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <p><FaHome /> Home</p>
      <p><IoIosTrendingUp /> Trending</p>
      <p><MdOutlineSubscriptions /> Subscriptions</p>
      <p><SiYoutubeshorts /> Shorts</p>
    </div>
  );
};

export default Sidebar;