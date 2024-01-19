import React from "react";
import { useTheme } from "../ThemeContext";

const QuickHelp: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const styles: { [key: string]: React.CSSProperties } = {
		quickhelpContainerStyle: {
			backgroundColor: "#1E2022",
      padding: "5rem",
      display: "flex",
      justifyContent: "center", // Center the content horizontally
		},
		quickhelpSectionStyle: {
			display: "flex",
      flexDirection: "row",
      width: "100%", // Set the section width to 100%
      maxWidth: "1200px", // Limit the maximum width of the section
		},
    quickhelpWidgetStyle: {
			width: "400px",
      height: "500px",
      border: "none",
		},
    quickhelpBodyStyle: {
			fontSize: "1.1rem",
      color: "#D6D3CD",
      width: "100%", // Set the body width to 100%
      maxWidth: "800px", // Limit the maximum width of the body
		},
    quickhelpTitleStyle: {
			fontSize: "2.5rem",
      color: "#918CA1",
      margin: 0, // Remove any default margin
      marginBottom: "1rem", // Add margin bottom to separate title from body
		},
	};

  return (
    <div style={styles.quickhelpContainerStyle}>
      <div style={styles.quickhelpSectionStyle}>
        <div>
          <h1 style={styles.quickhelpTitleStyle} data-aos="fade-up">
            Quick Help
          </h1>
          <h2 className="heading mb-3" data-aos="fade-up" data-aos-delay="100"></h2>
          <p style={styles.quickhelpBodyStyle} data-aos="fade-up" data-aos-delay="200">
            Silverline has a dedicated Discord server where students can join to
            connect with our community and access various resources. In our
            Discord server, you can find 50+ helpers who are ready to assist you
            with your questions and provide quick help. Whether you need help
            with a specific reading problem, calculus question, or any other
            academic inquiry, our community helpers are available to support
            you.
          </p>
          <p style={styles.quickhelpBodyStyle} data-aos="fade-up" data-aos-delay="300">
            To join our Discord server, simply visit our website and click on
            the Discord invite link. Once you join, you can indicate your
            interest in becoming a helper and be assigned to the helper role. If
            you have any questions or need assistance, feel free to ask in the
            appropriate channels, and our community members will be happy to
            assist you.
          </p>
          <p style={styles.quickhelpBodyStyle} data-aos="fade-up" data-aos-delay="400">
            Please note that while our Discord server provides quick help for
            specific questions, for broader and more extensive tutoring needs,
            we recommend availing our dedicated tutoring service with our
            experienced tutors. Our tutors are available to provide
            comprehensive guidance and support for various subjects and academic
            levels.
          </p>
        </div>
        <iframe
          src="https://discord.com/widget?id=795627064093966348&theme=dark"
          style={styles.quickhelpWidgetStyle}
          allowTransparency={true}
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default QuickHelp;
