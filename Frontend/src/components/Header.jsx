import { Link, useNavigate } from "react-router-dom";
import "../styles/header.css";
import { FaYoutube } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";

const Header = ({ onToggleSidebar }) => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");

    window.location.reload();
  };

  return (
    <div className="header">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button onClick={onToggleSidebar}>☰</button>

        <Link
          to="/"
          className="logo"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontWeight: "bold",
            color: "#e61414",
          }}
        >
          <FaYoutube style={{ fontSize: "44px" }} />
          YouTube
        </Link>
      </div>

      <input type="text" placeholder="Search..." />

      {user ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <FaRegUserCircle style={{ fontSize: "24px" }} />

          <span>{user.username} | </span>

          <button onClick={handleLogout} style={{
            color: "blue",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "2px",
            fontSize: "16px"
          }}>Logout</button>
        </div>
      ) : (
        <Link
          to="/login"
          style={{
            color: "blue",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "18px"
          }}
        >
          <FaRegUserCircle style={{ fontSize: "24px" }} />
          Sign In
        </Link>
      )}
    </div>
  );
};

export default Header;