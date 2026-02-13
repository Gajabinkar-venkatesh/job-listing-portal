import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.headerSection}>
        <h1>About Our Job Portal</h1>
        <p>
          Connecting talented professionals with trusted employers across India.
        </p>
      </div>

      <div style={styles.section}>
        <h2>Our Mission</h2>
        <p>
          Our mission is to simplify the hiring process by providing a clean,
          secure and user-friendly platform for job seekers and employers.
        </p>
      </div>

      <div style={styles.section}>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>✔ Easy Job Application Process</li>
          <li>✔ Secure Employer Dashboard</li>
          <li>✔ Real-time Application Tracking</li>
          <li>✔ Completely Free Registration</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2>Our Vision</h2>
        <p>
          To become one of the most trusted digital hiring platforms in India.
        </p>
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
  headerSection: {
    textAlign: "center",
    marginBottom: "40px",
  },
  section: {
    marginBottom: "40px",
    background: "white",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  },
};

export default About;
