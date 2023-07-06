import React from "react";

const Discord = () => {
  const containerStyle = {
    backgroundColor: "#1E2022",
    padding: "5rem",
    display: "flex",
  };

  const leftColumnStyle = {
    flex: 1,
  };

  const rightColumnStyle = {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  };

  const widgetStyle = {
    width: "400px",
    height: "500px",
    border: "none",
  };

  const bodyStyle = {
    fontSize: "1.1rem",
    fontWeight: "bold",
    color: "#D6D3CD",
    width:"800px",
  };

  const titleStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#918CA1",
  };

  return (
    <div style={containerStyle}>
      <div style={leftColumnStyle}>
        <div className="container">
          <h1 style={titleStyle}>Discord</h1>
          <p className="my-0" style={bodyStyle}>
            Silverline has a dedicated Discord server where students can join
            to connect with our community and access various resources. In our
            Discord server, you can find 50+ helpers who are ready to assist
            you with your questions and provide quick help. Whether you need
            help with a specific reading problem, calculus question, or any
            other academic inquiry, our community helpers are available to
            support you.
            <br />
            <br />
            To join our Discord server, simply visit our website and click on
            the Discord invite link. Once you join, you can indicate your
            interest in becoming a helper and be assigned to the helper role. If
            you have any questions or need assistance, feel free to ask in the
            appropriate channels, and our community members will be happy to
            assist you.
            <br />
            <br />
            Please note that while our Discord server provides quick help for
            specific questions, for broader and more extensive tutoring needs,
            we recommend availing our dedicated tutoring service with our
            experienced tutors. Our tutors are available to provide
            comprehensive guidance and support for various subjects and academic
            levels.
          </p>
        </div>
      </div>
      <div style={rightColumnStyle}>
        <iframe
          src="https://discord.com/widget?id=795627064093966348&theme=dark"
          style={widgetStyle}
          allowtransparency="true"
          frameBorder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        ></iframe>
      </div>
    </div>
  );
};

export default Discord;
