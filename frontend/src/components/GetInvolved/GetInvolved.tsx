import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer";
import styles from "./styles.module.css";
import { useTheme } from "../ThemeContext";

const GetInvolved: React.FC = () => {
	const { theme, toggleTheme } = useTheme();
	return (
		<div>
			<NavBar pageName="getInvolved" />
			<h1> \n\n</h1>
			<div
				className={`${
					theme === "dark" ? styles.bgDark : styles.bgLight
				} ${styles.outerContainer}`}
			>
				<div className={`${styles.innerContainer}`}>
					<h1
						className={`${
							theme === "dark"
								? styles.headerDark
								: styles.headerLight
						}`}
					>
						Join Our Community!
						<a
							className={`${styles.discordBtn}`}
							href="add discord link here"
							target="_blank"
							rel="noopener noreferrer"
						>
							Discord
						</a>
					</h1>
					<br />
					<p
						className={`${
							theme === "dark"
								? styles.textDark
								: styles.textLight
						}`}
					>
						Getting involved with Silverline has never been easier,
						click the button below to join our community. In our
						discord, you’ll meet students of all ages with similar
						interests. Alongside our employees, students help each
						other and discuss everything from extracurriculars to
						sports
					</p>
					<p
						className={`${
							theme === "dark"
								? styles.textDark
								: styles.textLight
						}`}
					>
						Once a tutor has signed up, our human resources officer
						will reach out requesting either an interview or a
						resume. In the case of an interview, our human resources
						officer will ask a few basic questions and follow up by
						asking for the tutor to present a 15 - 20 minute lesson
						on a subject they desire to teach in. The other option
						is to provide a resume, which will be reviewed by our
						executive team. Acceptance or deferral as a tutor will
						be provided shortly thereafter.
					</p>
					<p
						className={`${
							theme === "dark"
								? styles.textDark
								: styles.textLight
						}`}
					>
						If a student desires to receive tutoring, they should
						fill out the second form on this page. Our human
						resources officer will be in contact with them after
						receiving their request. The student will be brought
						into the Discord community server and be paired with an
						appropriate tutor. This tutor serves as someone who can
						serve longer lessons or answer quick questions in the
						target subject.
					</p>
					<br />
					<br />
					<h1
						className={`${
							theme === "dark"
								? styles.headerDark
								: styles.headerLight
						}`}
					>
						Tutoring Signup
					</h1>
					<br />
					<iframe
						src="https://airtable.com/embed/shrBwCsLLhfOY4Y2X?backgroundColor=yellow"
						width="100%"
						height="2491"
						loading="lazy"
					></iframe>
					<br />
					<br />
					<h1
						className={`${
							theme === "dark"
								? styles.headerDark
								: styles.headerLight
						}`}
					>
						Student Signup
					</h1>
					<br />
					<iframe
						className="airtable-embed airtable-dynamic-height"
						src="https://airtable.com/embed/shrMfa1HIUI0kZxO7?backgroundColor=green"
						width="100%"
						height="1688"
						loading="lazy"
					></iframe>
					<br />
					<p
						className={`${
							theme === "dark"
								? styles.textDark
								: styles.textLight
						}`}
					>
						Feel free to email us at{" "}
						<a href="mailto:silverlinetutoring2021@gmail.com">
							silverlinetutoring2021@gmail.com
						</a>{" "}
						for further inquiries
					</p>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default GetInvolved;
