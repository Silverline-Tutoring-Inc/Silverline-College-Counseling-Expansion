import React from "react";
import { Link } from "react-router-dom";

export default function TutoringSystem() {
  const containerStyle = {
    color: "#D6D3CD",
    position: "relative",
    fontFamily: "DM Sans, sans-serif",
  };

  const titleStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
  };

  const bodyStyle = {
    fontSize: "1.1rem",
    fontWeight: "bold",
  };

  return (
    <div className="container" style={containerStyle}>
      <h1 className="pt-3" style={titleStyle}>
        Our Tutoring System
      </h1>
      <br></br>
      <p style={bodyStyle}>
        Our tutoring system is reliant on high schoolers and college-level
        students. But how does our system actually function? The first step in
        our system is signing up. Tutors and students can go to{" "}
        <Link
          to="/get-involved"
          style={{ textDecoration: "none", color: "#5271FF" }}
        >
          Get Involved
        </Link>{" "}
        and fill out our forms. From there, our system breaks into two paths:
      </p>
      <br></br>
      <br></br>
    </div>
  );
}
