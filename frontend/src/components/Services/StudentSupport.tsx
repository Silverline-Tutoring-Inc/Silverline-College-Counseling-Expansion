import React from "react";
import resourcesImg from "../../images/services/resources.webp";

const StudentSupport: React.FC = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    studentsupportContainer: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "#181A1B",
    },
    studentsupportText: {
      flex: "1",
      padding: "40px",
      fontSize: "1.1rem",
      fontWeight: "200",
      color: "#EAEAEA",
      marginLeft: "50px",
    },
    studentsupportSubHeader: {
      fontSize: "18px",
      textTransform: "uppercase",
      color: "#918CA1",
      fontWeight: "700",
    },
    studentsupportHeader: {
      fontSize: "46px",
      fontWeight: "bold",
      color: "white",
    },
    studentsupportImage: {
      flex: "1",
      height: "auto",
      maxWidth: "40%",
      marginRight: "50px",
      marginLeft: "50px",
    },
  };

  return (
    <div style={styles.studentsupportContainer}>
      <div style={styles.studentsupportText}>
        <h4 style={styles.studentsupportSubHeader} data-aos="fade-up">
        Extracurricular Programs
        </h4>
        <h1 style={styles.studentsupportHeader} data-aos="fade-up">
        Our Mission
        </h1>
        <p data-aos="fade-up">
        Silverline was founded in early 2021 by high school students who saw a major issue with educational practices. 
        Our founders saw that students had to make a choice: pay hundreds, if not thousands, of dollars for resources 
        that give you a variety of ways to learn or have to use materials that don't work for everyone. 
        We started off by connecting students to qualified tutors with the hopes of giving them the resources they desired 
        without using their hard-earned money. As Silverline grew, we listened to our members and shifted our focus.
         Starting in the summer of 2023, Silverline started focusing on extracurricular activities. We aim to help each 
         and every student who comes to us the best we can with whatever resources we have to give.
      
      {/* <div>
  <ul>
    <li>Debate</li>
    <li>Science Olympiad</li>
    <li>Research</li>
    <li>Robotics/FIRST Program</li>
    <li>FBLA/DECA</li>
  </ul>
</div> */}

{/* Each program contains specialized curriculum, materials, and exclusive Discord benefits and categories. */}

        </p>
      </div>
      <img
        src={resourcesImg}
        alt="Resources"
        style={{ ...styles.studentsupportImage, animation: "fade-up" }}
        data-aos="fade-up"
      />
    </div>
  );
};

export default StudentSupport;
