import React from "react";
import ScriptTag from "react-script-tag";

const UpcomingEvents = () => {
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
				<h1 style={titleStyle} data-aos="fade-up">Upcoming Events</h1>
        <br /><br />
        <div data-tockify-component="mini" data-tockify-calendar="tarun.eswar" data-tockify-width="75%"></div>
				<ScriptTag data-cfasync="false" data-tockify-script="embed" src="https://public.tockify.com/browser/embed.js" />
			</div>
		</div>
	);
};

export default UpcomingEvents;
