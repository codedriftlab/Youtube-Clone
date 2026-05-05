import { Link } from "react-router-dom";
import "../styles/header.css";
import { FaYoutube } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";


const Header = ({ onToggleSidebar }) => {
  return (
    <div className="header">
      <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
      <button onClick={onToggleSidebar}>☰</button>
      <Link to="/" className="logo" style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: "bold", color: "#e61414"}}>
        <FaYoutube style={{ fontSize: "44px" }} /> YouTube
      </Link>
      </div>

      <input type="text" placeholder="Search..." />

      <Link to="/login" style={{ color: "blue", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px"}}>
      <FaRegUserCircle style={{ fontSize: "24px"}} />
        Sign In
      </Link>
    </div>
  );
};

export default Header;