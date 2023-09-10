import React from "react";

const AboutOurCommunity: React.FC = () => {
	const bodyStyle: React.CSSProperties = {
		fontSize: "1.1rem",
		fontWeight: "bold",
		color: "#D6D3CD",
	};
	const titleStyle: React.CSSProperties = {
		fontSize: "2.5rem",
		fontWeight: "bold",
		color: "#918CA1",
	};
	return (
		<div style={{ backgroundColor: "#1E2022", padding: "7rem" }}>
			<div className="container">
				<h1 style={titleStyle} data-aos="fade-up">
					About Our Community
				</h1>
				<h2
					className="heading mb-3"
					data-aos="fade-up"
					data-aos-delay="100"
				></h2>
				<p style={bodyStyle} data-aos="fade-up" data-aos-delay="200">
				Silverline is filled with students eager to enrich their educational experiences. Our communication networks promote healthy discourse between students, allowing for members to find others with similar interests. In this sense, students have the opportunity to connect on a higher level than simply access to resources and advisory. They can discuss sports, school, musical interests and any hobbies they have in mind. Additionally, our community is divided into specific categories of interest. Silverline instills a stronger sense of community between members that facilitates a stress-free and positive learning environment for all involved.
				</p>
				<p style={bodyStyle} data-aos="fade-up" data-aos-delay="300">
				We understand that high school can be stressful, so we provide a plethora of resources for students in our community to take a breather and relax. Many of these contests often have prizes, providing an incentive for all students.
				</p>
			</div>
		</div>
	);
};

export default AboutOurCommunity;
