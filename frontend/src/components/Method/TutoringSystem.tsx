import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";

const TutoringSystem: React.FC = () => {
	const styles: { [key: string]: React.CSSProperties } = {
		tutoringsystemContainerStyle: {
			color: "#D6D3CD",
			position: "relative",
			fontFamily: "DM Sans, sans-serif",
		},
		tutoringsystemTitleStyle: {
			fontSize: "2.5rem",
			fontWeight: "bold",
		},
		tutoringsystemBodyStyle: {
			fontSize: "1.1rem",
			fontWeight: "bold",
		},
	};

	return (
		<div className="container" style={styles.tutoringsystemContainerStyle}>
			<h1 className="pt-3" style={styles.tutoringsystemTitleStyle}>
				Our Tutoring System
			</h1>
			<br></br>
			<p style={styles.tutoringsystemBodyStyle}>
				Our tutoring system is reliant on high schoolers and
				college-level students. But how does our system actually
				function? The first step in our system is signing up. Tutors and
				students can go to{" "}
				<Link
					to="/get-involved"
					style={{ textDecoration: "none", color: "#5271FF" }}
				>
					Get Involved
				</Link>{" "}
				and fill out our forms. From there, our system breaks into two
				paths:
			</p>
			<br></br>
			<br></br>
		</div>
	);
};

export default TutoringSystem;
