import React from "react";
import lectureImg from "../../images/services/lectu1res 2.webp";

const CommunityEvents = () => {
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#181A1B",
  };

  const textStyle = {
    flex: "1",
    padding: "40px",
    fontSize: "1.1rem",
    fontWeight: "200",
    color: "#EAEAEA",
    marginRight: "50px",
  };

  const subHeaderStyle = {
    fontSize: "18px",
    textTransform: "uppercase",
    color: "#918CA1",
    fontWeight: "700",
  };

  const headerStyle = {
    fontSize: "46px",
    fontWeight: "bold",
    color: "white",
  };

  const imageStyle = {
    flex: "1",
    height: "auto",
    maxWidth: "40%",
    marginLeft: "50px",
  };

  return (
    <div style={containerStyle}>
      <img src={lectureImg} alt="Lecture" style={imageStyle} />
      <div style={textStyle}>
        <h4 style={subHeaderStyle} data-aos="fade-up">
          COMMUNITY EVENTS
        </h4>
        <h1 style={headerStyle} data-aos="fade-up">
          Lectures
        </h1>
        <p data-aos="fade-up">
          We provide quick and informative lectures on all topics that our
          members request; whether it would be on college admissions or tips on
          self-improvement, the members typically decide the style and topic of
          the lecture. In the past, we have hosted multiple college-related
          lectures answering students' questions surrounding the whole process
          and allowing them to better understand how to approach their
          applications. Feel free to sign up to join our upcoming lectures{" "}
          <a href=""> here. </a>
        </p>
      </div>
    </div>
  );
};

export default CommunityEvents;
