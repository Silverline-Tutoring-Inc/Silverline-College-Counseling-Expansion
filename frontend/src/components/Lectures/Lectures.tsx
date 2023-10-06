import React from "react";
import tom from "../../images/Home/lectures/tom.webp";
import emily from "../../images/Home/lectures/emily.webp";
import vishant from "../../images/Home/lectures/vishant.webp";
import { useTheme } from "../ThemeContext";
import styles from "./styles.module.css";

const Lectures: React.FC = () => {
	const { theme, toggleTheme } = useTheme();
	return (
		<div
			className={`${
				theme === "dark" ? styles.bgDark : styles.bgLight
			} section section-3`}
		>
			<div className="container">
				<div className="row align-items-center justify-content-between">
					<div
						className="col-lg-12 text-center mb-0"
						data-aos="fade-up"
					>
						<span className="subheading">Lectures</span>
						<h2
							className={`heading mb-3 ${
								theme === "dark"
									? styles.headerDark
									: styles.headerLight
							}`}
						>
							Our Past Lectures
						</h2>
					</div>
					<div
						className="col-lg-12 text-md-end"
						data-aos="fade-up"
						data-aos-delay="100"
					>
						<div className="destination">
							<div className={`mt-3 ${styles.lectureStyle}`}>
								<a href="#" target="_blank">
									<img
										src={tom}
										alt="Tom"
										className={`img-fluid ${styles.imageStyle}`}
									/>
								</a>
								<div className={styles.lectureInfoStyle}>
									<h5
										className={
											theme === "dark"
												? styles.lecturerNameStyleDark
												: styles.lecturerNameStyleLight
										}
									>
										Tom Campbell
									</h5>
									<div className={styles.designationStyle}>
										Pomona Admissions Officer
									</div>
									<div className={styles.overviewStyle}>
										<p
											className={`${
												theme === "dark"
													? styles.textDark
													: styles.textLight
											}`}
										>
											Mr. Campbell answered attendees'
											questions live through Zoom about
											the admissions process. This lecture
											gave many high school students
											insight into the perspective of an
											admissions officer.
										</p>
									</div>
								</div>
							</div>
							<div className={`mt-4 ${styles.lectureStyle}`}>
								<a href="#" target="_blank">
									<img
										src={emily}
										alt="Emily"
										className={`img-fluid ${styles.imageStyle}`}
									/>
								</a>
								<div className={styles.lectureInfoStyle}>
									<h5
										className={
											theme === "dark"
												? styles.lecturerNameStyleDark
												: styles.lecturerNameStyleLight
										}
									>
										Emily Hanscom
									</h5>
									<div className={styles.designationStyle}>
										Junior @ Marist College
									</div>
									<div className={styles.overviewStyle}>
										<p
											className={`${
												theme === "dark"
													? styles.textDark
													: styles.textLight
											}`}
										>
											Emily joined us to talk about the
											college application process. The
											main focus of her lecture was
											figuring out the college application
											in terms of finances. She explained
											the different financial avenues to
											achieve higher education and how to
											make college as affordable as
											possible.
										</p>
									</div>
								</div>
							</div>
							<div className={`${styles.lectureStyle} mt-4`}>
								<a href="#" target="_blank">
									<img
										src={vishant}
										alt="Vishant"
										className={`img-fluid ${styles.imageStyle}`}
									/>
								</a>
								<div className={styles.lectureInfoStyle}>
									<h5
										className={
											theme === "dark"
												? styles.lecturerNameStyleDark
												: styles.lecturerNameStyleLight
										}
									>
										Vishant Raajkumar
									</h5>
									<div className={styles.designationStyle}>
										Freshman @ Carnegie Mellon University
									</div>
									<div className={styles.overviewStyle}>
										<p
											className={`${
												theme === "dark"
													? styles.textDark
													: styles.textLight
											}`}
										>
											Vishant’s lecture focused on
											optimizing your college application
											by centering it around a common
											theme that reflects you as a person,
											and the activities that you did.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Lectures;
