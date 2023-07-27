import React, { useEffect } from "react";

const UpcomingEvents = () => {
  useEffect(() => {
    const tockify = document.createElement("script");

    tockify["data-cfasync"] = "false";
    tockify["data-tockify-script"] = "embed";
    tockify.src = "https://public.tockify.com/browser/embed.js";

    document.body.appendChild(tockify);

    return () => {
      document.body.removeChild(tockify);
    };
  }, []);

  const bodyStyle = {
    fontSize: "1.1rem",
    fontWeight: "bold",
    color: "#D6D3CD",
  };
  const titleStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#918CA1",
  };
  return (
    <div style={{ backgroundColor: "#1E2022", padding: "7rem" }}>
      <div className="container">
        <h1 style={titleStyle} data-aos="fade-up">
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
