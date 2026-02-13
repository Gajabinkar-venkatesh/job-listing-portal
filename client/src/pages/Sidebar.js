import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="sidebar">
      <h2>Job Portal</h2>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/jobs">Jobs</Link></li>
        <li><Link to="/applications">Applications</Link></li>
        <li><Link to="/add-job">Add Job</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {token && (
        <button className="logout-btn" onClick={logoutHandler}>
          Logout
        </button>
      )}
    </div>
  );
};

export default Sidebar;
