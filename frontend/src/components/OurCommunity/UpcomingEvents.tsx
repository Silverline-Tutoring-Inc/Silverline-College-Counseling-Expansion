import React, { useEffect } from "react";

const UpcomingEvents: React.FC = () => {
  useEffect(() => {
    const tockify = document.createElement("script");

    tockify.setAttribute("data-cfasync", "false");
    tockify.setAttribute("data-tockify-script", "embed");
    tockify.src = "https://public.tockify.com/browser/embed.js";

    document.body.appendChild(tockify);

    return () => {
      document.body.removeChild(tockify);
    };
  }, []
  );

  const styles: { [key: string]: React.CSSProperties } = {
		eventsBodyStyle: {
			fontSize: "1.1rem",
      fontWeight: "bold",
      color: "#D6D3CD",
		},
		eventsTitleStyle: {
			fontSize: "2.5rem",
      fontWeight: "bold",
      color: "#918CA1",
		},    
	};

  return (
    <div style={{ backgroundColor: "#1E2022", padding: "7rem" }}>
      <div className="container">
        <h1 style={styles.eventsTitleStyle} data-aos="fade-up">
          Upcoming Events
        </h1>
        <br />
        <br />
        <div
          data-tockify-component="mini"
          data-tockify-calendar="tarun.eswar"
          data-tockify-width="100%"
        ></div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
