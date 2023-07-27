import React, { useState } from "react";

const FutureIdeas = () => {
  const [isHoverFirstButton, setIsHoverFirstButton] = useState(false);
  const [isHoverSecondButton, setIsHoverSecondButton] = useState(false);

  const handleMouseEnterFirstButton = () => {
    setIsHoverFirstButton(true);
  };

  const handleMouseLeaveFirstButton = () => {
    setIsHoverFirstButton(false);
  };

  const handleMouseEnterSecondButton = () => {
    setIsHoverSecondButton(true);
  };

  const handleMouseLeaveSecondButton = () => {
    setIsHoverSecondButton(false);
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#181A1B",
    padding: "40px",
  };

  const textStyle = {
    textAlign: "center",
    fontSize: "1.1rem",
    fontWeight: "200",
    color: "#EAEAEA",
    padding: "5px",
    marginLeft: "40px",
    marginRight: "40px",
    marginTop: "50px",
  };

  const subHeaderStyle = {
    fontSize: "24px",
    textTransform: "uppercase",
    color: "#918CA1",
    fontWeight: "700",
  };

  const headerStyle = {
    fontSize: "42px",
    fontWeight: "bold",
    color: "white",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "30px",
    gap: "30px",
    marginBottom: "30px",
  };

  const buttonStyleFirst = {
    backgroundColor: isHoverFirstButton ? "#181A1B" : "rgba(82, 113, 255, 0.8)",
    color: "#EAEAEA",
    border: "2px solid #5271FF",
    padding: "10px 25px",
    borderRadius: "25px",
    fontSize: "1rem",
    fontWeight: "550",
    transition: "background 0.3s ease",
  };

  const buttonStyleSecond = {
    backgroundColor: isHoverSecondButton
      ? "#181A1B"
      : "rgba(82, 113, 255, 0.8)",
    color: "#EAEAEA",
    border: "2px solid #5271FF",
    padding: "10px 25px",
    borderRadius: "25px",
    fontSize: "1rem",
    fontWeight: "550",
    transition: "background 0.3s ease",
  };

  return (
    <div style={containerStyle}>
      <h2 style={subHeaderStyle} data-aos="fade-up">
        FUTURE IDEAS
      </h2>
      <h1 style={headerStyle} data-aos="fade-up">
        What's Next?
      </h1>
      <p style={textStyle} data-aos="fade-up">
        Looking forward, we hope to partner with underfunded schools and provide
        resources and tutoring for students who are looking for extra help.
        Along with that, we plan on eventually expanding our focus to developing
        countries worldwide, providing and distributing curriculum for students
        in underserved areas. Our goal is to solve the educational divide, and
        the only possible way we believe we can truly make an impact is by
        spreading support worldwide. Anyone can help us reach our goal either by
        donating, spreading word in their local districts, or joining the
        organization.
      </p>
      <div style={buttonContainerStyle}>
        <a
          href="downloads/Press_Release.pdf"
          style={buttonStyleFirst}
          onMouseEnter={handleMouseEnterFirstButton}
          onMouseLeave={handleMouseLeaveFirstButton}
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Press Release
        </a>
        <a
          href="https://discord.gg/kD8aMaX2gP"
          style={buttonStyleSecond}
          onMouseEnter={handleMouseEnterSecondButton}
          onMouseLeave={handleMouseLeaveSecondButton}
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Join Us Today
        </a>
      </div>
    </div>
  );
};

export default FutureIdeas;
