import React, { useState } from "react";
import eng from "../../images/Home/eng.webp";
import flexible from "../../images/Home/flexibile.webp";
import community from "../../images/Home/community.webp";
import { useTheme } from "../ThemeContext";
import styles from "./styles.module.css";

interface Service {
	img: string;
	alt: string;
	title: string;
	desc: string;
}

const services: Array<Service> = [
	{
		img: eng,
		alt: "icon for versatile",
		title: "Extracurricular Programs",
		desc: "We offer specialized extracurricular programs led by students who are top performers in each activity to aid students in their success.",
	},
	{
		img: flexible,
		alt: "icon for flexible tutoring",
		title: "Educational Advisory",
		desc: "We offer top of the line resources to help students thrive in their activities.",
	},
	{
		img: community,
		alt: "icon for community",
		title: "Content",
		desc: "Silverline has constant educational content to keep students up to date with news, events, and things they need to know revolving around their extracurriculars.",
	},
];

const ServicesSection: React.FC = () => {
	const [currentService, setCurrentService] = useState<number>(0);

	const { theme, toggleTheme } = useTheme();

	return (
		<div
			className={` section section-3 ${
				theme === "dark" ? styles.bgDark : styles.bgLight
			}`}
		>
			<div className="container">
				<div className="row align-items-center justify-content-between  mb-5">
					<div className="col-lg-6" data-aos="fade-up">
						<span className={`subheading ${styles.subHeader}`}>
							Services
						</span>
						<h2
							className={`heading mb-3 ${
								theme === "dark"
									? styles.headerDark
									: styles.headerLight
							}`}
						>
							A Plethora of Resources
						</h2>
					</div>
					<div
						className="col-lg-5 text-md-end"
						data-aos="fade-up"
						data-aos-delay="100"
					>
						<div
							id="destination-controls"
							className="text-center pt-4"
						>
							<span
								className="prev me-3"
								data-controls="prev"
								onClick={() =>
									setCurrentService((prev) =>
										prev == 0
											? services.length - 1
											: prev - 1
									)
								}
							>
								<svg
									width="48"
									height="32"
									viewBox="0 0 48 32"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M47.5 16L3.5 16"
										stroke="#4d68e1"
										strokeWidth="4"
									/>
									<path
										d="M17.25 1.11246L2 16L17.25 30.8875"
										stroke="#4d68e1"
										strokeWidth="4"
									/>
								</svg>
							</span>
							<span
								className="next"
								data-controls="next"
								onClick={() =>
									setCurrentService((prev) =>
										prev == services.length - 1
											? 0
											: prev + 1
									)
								}
							>
								<svg
									width="64"
									height="36"
									viewBox="0 0 64 36"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<line
										x1="-8.74228e-08"
										y1="18"
										x2="61"
										y2="18"
										stroke="#4d68e1"
										strokeWidth="4"
									/>
									<path
										d="M45.25 34.8875L62.5 18L45.25 1.1125"
										stroke="#4d68e1"
										strokeWidth="4"
									/>
								</svg>
							</span>
						</div>
					</div>
				</div>
				<div className="row text-center">
					<div
						className="col-lg-12"
						data-aos="fade-up"
						data-aos-delay="200"
					>
						<div className="destination-slider-wrap">
							<div className="destination-slider">
								<div className="destination">
									<div className="thumb">
										<img
											src={services[currentService].img}
											alt={services[currentService].alt}
											className="img-fluid"
										/>
									</div>
									<div className="mt-4">
										<h3
											className={`${
												theme === "dark"
													? styles.headerDark
													: styles.headerLight
											}`}
										>
											{services[currentService].title}
										</h3>
										<span
											className={`meta ${
												theme === "dark"
													? styles.textDark
													: styles.textLight
											}`}
										>
											{services[currentService].desc}
										</span>
									</div>
								</div>
								<div className="destination">
									<div className="thumb"></div>
								</div>
							</div>
						</div>
					</div>
					<br />
					<br />
					<p className="my-5" data-aos="fade-up" data-aos-delay="300">
						<a
							href="./services"
							className={`btn btn-primary text-lg-center ${styles.btn}`}
						>
							View all services
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default ServicesSection;
