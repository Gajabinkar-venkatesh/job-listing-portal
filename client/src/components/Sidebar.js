import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("name") || "User";
  const role = localStorage.getItem("role") || "Job Seeker";

  const logout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="sidebar">
      <div className="profile-box">
        <h3>{username}</h3>
        <p>{role}</p>
      </div>

      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/profile">My Profile</Link></li>
        <li><Link to="/applications">My Applications</Link></li>
        <li><button onClick={logout} className="logout-btn">Logout</button></li>
      </ul>
    </div>
  );
};

export default Sidebar;
