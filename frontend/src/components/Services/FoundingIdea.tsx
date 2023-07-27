import React from "react";
import tutoringImg from "../../images/services/tutoring.webp";

const FoundingIdea = () => {
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
    marginTop: "50px",
    marginLeft: "50px",
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
    marginRight: "50px",
    marginLeft: "50px",
    marginTop: "50px",
  };

  return (
    <div style={containerStyle}>
      <div style={textStyle}>
        <h4 style={subHeaderStyle} data-aos="fade-up">
          OUR FOUNDING IDEA
        </h4>
        <h1 style={headerStyle} data-aos="fade-up">
          Tutoring
        </h1>
        <p data-aos="fade-up">
          Silverline Tutoring provides high-quality, free one-on-one tutoring.
          Our tutors are experts at the subjects they tutor, often in college
          and pursuing a degree in the subject they teach. They conduct sessions
          with students over the communication platform Discord or through other
          virtual meeting platforms like Zoom. All meetings are recorded to
          ensure that the environment is safe for both the student and tutor
          alike.
        </p>
      </div>
      <img src={tutoringImg} alt="Tutoring" style={imageStyle} />
    </div>
  );
};

export default FoundingIdea;
