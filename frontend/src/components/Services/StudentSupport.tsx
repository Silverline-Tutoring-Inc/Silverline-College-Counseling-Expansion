import React from "react";
import resourcesImg from "../../images/services/resources.webp";

const StudentSupport = () => {
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
  };

  return (
    <div style={containerStyle}>
      <div style={textStyle}>
        <h4 style={subHeaderStyle} data-aos="fade-up">
          STUDENT SUPPORT
        </h4>
        <h1 style={headerStyle} data-aos="fade-up">
          Resources
        </h1>
        <p data-aos="fade-up">
          Here at Silverline, we offer various resources to help students on
          standardized exams. We provide SAT problems of the day that allow
          students to practice answering exam questions every day. We also
          provide different online resources that will allow them to master any
          subject they are struggling with. As for AP resources, along with
          providing tutoring for every AP, we supply resources and free online
          resources for every AP, which allows students to master these
          subjects. From Princeton Review to Tutor Doctor, Silverline has all
          the resources necessary for students. General resources can also be
          found through the{" "}
          <a href="https://discord.com/invite/kD8aMaX2gP">Discord Community.</a>
        </p>
      </div>
      <img
        src={resourcesImg}
        alt="Resources"
        style={imageStyle}
        data-aos="fade-up"
      />
    </div>
  );
};

export default StudentSupport;
