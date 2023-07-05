import React from "react";
import NavBar from "./NavBar";

const Services = () => {
	return (
		<div>
			<NavBar pageName="services" />
			<h1>Our Services</h1>
			<div>
				<img
					src="https://silverlinetutoring.org/wp-content/uploads/2022/01/tutoring-services.jpg"
					alt="Tutoring Services"
				/>
			</div>
			<p>
				At Silverline Tutoring, we offer a wide range of educational
				services to help students excel in their academic journey.
				Whether your child needs assistance with homework, test
				preparation, or enrichment programs, our experienced tutors are
				here to help.
			</p>
			<p>
				Our services include:
				<li>
					One-on-one tutoring sessions tailored to your child's needs
				</li>
				<li>Group tutoring for collaborative learning</li>
				<li>Test preparation for standardized exams</li>
				<li>
					Subject-specific tutoring in math, science, English, and
					more
				</li>
				<li>College application and essay guidance</li>
				<li>Study skills development</li>
				<li>Homework help and academic support</li>
				<li>Summer programs and academic camps</li>
			</p>
			<p>
				We believe in personalized attention and a nurturing environment
				to ensure your child's success. Our tutors are highly qualified
				and dedicated professionals who are passionate about education.
				We strive to create a positive and engaging learning experience
				for every student.
			</p>
			<p>
				Contact us today to learn more about our services and how we can
				help your child achieve their academic goals.
			</p>
		</div>
	);
};

export default Services;
