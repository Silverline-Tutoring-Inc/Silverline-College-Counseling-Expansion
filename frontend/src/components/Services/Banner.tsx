import React from "react";
import bannerImg from "../../images/services/services.webp";
import "aos/dist/aos.css";

const Banner: React.FC = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    bannerStyle: {
      position: "relative",
      marginTop: "64px",
      height: "400px",
    },
    bannerImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: "brightness(50%)",
    },
    bannerTitle: {
      fontSize: "4rem",
      fontWeight: "bold",
      color: "white",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div style={styles.bannerStyle}>
      <img src={bannerImg} alt="banner" style={styles.bannerImage} />
      <h1 style={styles.bannerTitle} data-aos="fade-up" data-aos-delay="100">
        About Our Services
      </h1>
    </div>
  );
};

export default Banner;
