import React from "react";

const Contact = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1>Contact Us</h1>
        <p>We would love to hear from you</p>
      </div>

      <div style={styles.card}>
        <h3>Email</h3>
        <p>support@jobportal.com</p>

        <h3>Phone</h3>
        <p>+91 9876543210</p>

        <h3>Location</h3>
        <p>Hyderabad, Telangana, India</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "60px 10%",
    backgroundColor: "#f8f9fa",
    minHeight: "90vh",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
  },
  card: {
    background: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
    maxWidth: "500px",
    margin: "auto",
  },
};

export default Contact;
