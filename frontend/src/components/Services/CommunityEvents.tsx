import React from "react";
import lectureImg from "../../images/services/lectu1res 2.webp";

const CommunityEvents: React.FC = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    communityeventsContainer: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "#181A1B",
    },
    communityeventsText: {
      flex: "1",
      padding: "40px",
      fontSize: "1.1rem",
      fontWeight: "200",
      color: "#EAEAEA",
      marginRight: "50px",
    },
    communityeventsSubHeader: {
      fontSize: "18px",
      textTransform: "uppercase",
      color: "#918CA1",
      fontWeight: "700",
    },
    communityeventsHeader: {
      fontSize: "46px",
      fontWeight: "bold",
      color: "white",
    },
    communityeventsImage: {
      flex: "1",
      height: "auto",
      maxWidth: "40%",
      marginLeft: "50px",
    },
  };

  return (
    <div style={styles.communityeventsContainer}>
      <img src={lectureImg} alt="Lecture" style={styles.communityeventsImage} />
      <div style={styles.communityeventsText}>
        <h4 style={styles.communityeventsSubHeader} data-aos="fade-up">
          FREE RESOURCES
        </h4>
        <h1 style={styles.communityeventsHeader} data-aos="fade-up">
          Content
        </h1>
        <p data-aos="fade-up">
        Silverline has constant educational content to keep students up to date with news, events, and things they need to know revolving around their extracurriculars
        </p>
      </div>
    </div>
  );
};

export default CommunityEvents;
