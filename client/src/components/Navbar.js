import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <h2 style={{ color: "white" }}>Job Portal</h2>

        <div style={linksStyle}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/jobs" style={linkStyle}>Find Jobs</Link>
          <Link to="/faq" style={linkStyle}>FAQ</Link>
          <Link to="/contact" style={linkStyle}>Contact</Link>
          <Link to="/login" style={linkStyle}>Login</Link>
          <Link to="/register" style={linkStyle}>Register</Link>
        </div>
      </div>
    </nav>
  );
}

const navStyle = {
  position: "fixed",
  top: 0,
  width: "100%",
  height: "60px",
  backgroundColor: "#0d6efd",
  display: "flex",
  alignItems: "center",
  zIndex: 1000,
};

const containerStyle = {
  width: "90%",
  margin: "auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const linksStyle = {
  display: "flex",
  gap: "30px",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "15px",
  fontWeight: "500",
};

export default Navbar;
