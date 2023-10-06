import React from "react";
import Footer from "../Footer";
import NavBar from "../NavBar/NavBar";
import partner1 from "../../images/partners/thepond.webp";
import partner2 from "../../images/partners/bumper.webp";
import partner3 from "../../images/partners/canva.webp";
import partner4 from "../../images/partners/redcross.webp";
import partner5 from "../../images/partners/365tojapan.webp";
import partner6 from "../../images/partners/sultan.webp";
import partner7 from "../../images/partners/pandaexpress.webp";
import partner8 from "../../images/partners/Equality_in_Forensics.webp";
import partner9 from "../../images/partners/chipotle-mexican-grill-logo-svg-vector.svg";
import partner10 from "../../images/partners/wish.webp";
import partner11 from "../../images/partners/chelmsford.webp";
import { useTheme } from "../ThemeContext";
import styles from "./styles.module.css";

const Partners: React.FC = () => {
	const { theme, toggleTheme } = useTheme();
	return (
		<>
			<NavBar pageName="partners" />
			<div
				className={`section ${
					theme === "dark" ? styles.bgDark : styles.bgLight
				}`}
			>
				<div className={`container ${styles.divContainer}`}>
					<h1
						className={`pt-3 ${
							theme === "dark"
								? styles.headerDark
								: styles.headerLight
						}`}
					>
						Our Partners & Sponsors
					</h1>
					<br />
					<p
						className={
							theme === "dark"
								? styles.textDark
								: styles.textLight
						}
					>
						Several businesses, non-profits, and organizations in
						the United States help bring the Silverline image to
						reality. Partners provide resources, funds, or other
						necessities required to create a functioning
						organization. Interested in helping Silverline solve the
						educational divide? Contact a representative{" "}
						<a
							target="_0"
							href="https://docs.google.com/document/d/1UMz9CIYSuJ1WEQWuOusSQlHchQwpgFmqwVLOTzX0D9w/edit"
						>
							here
						</a>
						.
					</p>
					<div className="row align-items-stretch">
						<div
							className="col-6 col-sm-6 col-md-6 col-lg-3"
							data-aos="fade-up"
							data-aos-delay="100"
						>
							<div className=" media-entry media-entry-copy media-size3">
								<a
									href="https://diveintothepond.com/"
									target="_0"
									className={`text-center ${styles.logo}`}
								>
									<img
										src={partner1}
										alt="The Pond"
										className="img-fluid"
									/>
								</a>
								<div className="m-body">
									<h6 className={styles.box1}>The Pond</h6>
									<p
										className={
											theme === "dark"
												? styles.textDark
												: styles.textLight
										}
									>
										The Pond is an all-in-one service for
										students applying to college. The Pond
										provides students with a personalized
										program for college entrance so they
										always know what to do next and how to
										do it. The Pond utilizes AI software to
										help students with the college process.
										To date, over 60,000 students have used
										the Pond to develop college lists, and
										they also have over 15,000 active users
										of the platform. The Pond and Silverline
										work together to help students from all
										different backgrounds.
									</p>
								</div>
							</div>
						</div>

						<div
							className="col-6 col-sm-6 col-md-6 col-lg-3"
							data-aos="fade-up"
							data-aos-delay="100"
						>
							<div className=" media-entry media-entry-copy media-size3">
								<a
									href="https://www.joinbumper.com/ambassadors"
									target="_0"
									className={`text-center ${styles.logo}`}
								>
									<img
										src={partner2}
										alt="Bumper Investing"
										className="img-fluid"
									/>
								</a>
								<div className="m-body">
									<h6 className={styles.box2}>
										Bumper Investing
									</h6>
									<p
										className={
											theme === "dark"
												? styles.textDark
												: styles.textLight
										}
									>
										Bumper is an educational investing
										platform that helps teens begin
										investing with just $1 and an adult
										sponsor. Join the hundreds of teens in
										their ambassador program, a 9-week
										program focused on gaining real-world
										experience in the investing world. Gain
										access to perks and rewards while
										helping fulfill Bumper's mission of
										expanding future opportunities for
										students through investing.
									</p>
								</div>
							</div>
						</div>

						<div
							className="col-6 col-sm-6 col-md-6 col-lg-3"
							data-aos="fade-up"
							data-aos-delay="100"
						>
							<div className=" media-entry media-entry-copy media-size3">
								<a
									href="https://www.canva.com/"
									target="_0"
									className={`text-center ${styles.logo}`}
								>
									<img
										src={partner3}
										alt="Canva"
										className="img-fluid"
									/>
								</a>
								<div className="m-body">
									<h6 className={styles.box3}>Canva</h6>
									<p
										className={
											theme === "dark"
												? styles.textDark
												: styles.textLight
										}
									>
										Canva is a powerful design tool that can
										be used in education to create projects.
										In addition, Canva seeks to teach
										students the basics of design,
										paralleling the Silverline vision.
										Silverline is one of several non-profits
										Canva supports as a part of their
										non-profit initiative. As an
										organization, Silverline utilizes such
										tools for social media posts, content
										creation, and more.
									</p>
								</div>
							</div>
						</div>

						<div
							className="col-6 col-sm-6 col-md-6 col-lg-3"
							data-aos="fade-up"
							data-aos-delay="100"
						>
							<div className=" media-entry media-entry-copy media-size3">
								<a
									href="https://rdcrss.org/silverlinetutoringinc"
									target="_0"
									className={`text-center ${styles.logo}`}
								>
									<img
										src={partner4}
										alt="American Red Cross"
										className="img-fluid"
									/>
								</a>
								<div className="m-body">
									<h6 className={styles.box4}>
										American Red Cross
									</h6>
									<p
										className={
											theme === "dark"
												? styles.textDark
												: styles.textLight
										}
									>
										The American Red Cross shelters, feeds
										and provides comfort to victims of
										disasters; supplies about 40% of the
										nation's blood; teaches skills that save
										lives; distributes international
										humanitarian aid; and supports veterans,
										military members, and their families.
										Click on the logo to view and donate to
										Silverline's donation page today.
									</p>
								</div>
							</div>
						</div>

						<div
							className="col-6 col-sm-6 col-md-6 col-lg-3"
							data-aos="fade-up"
							data-aos-delay="100"
						>
							<div className=" media-entry media-entry-copy media-size3">
								<a
									href="https://365tojapan.com/"
									target="_0"
									className={`text-center ${styles.logo}`}
								>
									<img
										src={partner5}
										alt="365toJapan"
										className="img-fluid"
									/>
								</a>
								<div className="m-body">
									<h6 className={styles.box5}>365toJapan</h6>
									<p
										className={
											theme === "dark"
												? styles.textDark
												: styles.textLight
										}
									>
										365toJapan is an educational blog
										covering the course of an enthusiastic
										Japanese learner. Their mission is to
										one day visit Japan as an immersed
										student. The blog covers language,
										culture, and more, serving as a space
										for new and experienced learners. As an
										organization, Silverline helps support
										strong and creative educational causes
										such as 365toJapan through promotions.
									</p>
								</div>
							</div>
						</div>

						<div
							className="col-6 col-sm-6 col-md-6 col-lg-3"
							data-aos="fade-up"
							data-aos-delay="100"
						>
							<div className=" media-entry media-entry-copy media-size3">
								<a
									href="https://www.linkedin.com/company/sultan-s-marketing/"
									target="_0"
									className={`text-center ${styles.logo}`}
								>
									<img
										src={partner6}
										alt="Sultan's Marketing"
										className="img-fluid"
									/>
								</a>
								<div className="m-body">
									<h6 className={styles.box6}>
										Sultan's Marketing
									</h6>
									<p
										className={
											theme === "dark"
												? styles.textDark
												: styles.textLight
										}
									>
										Sultan’s Marketing is a startup
										marketing company that offers social
										media marketing services to local
										businesses. They help businesses adapt
										to the new generation and grow to the
										next level by increasing their brand
										awareness and presence in the social
										media sphere. They aim to provide low
										price and high-quality marketing
										services to small businesses and big
										businesses alike.
									</p>
								</div>
							</div>
						</div>

						<div
							className="col-6 col-sm-6 col-md-6 col-lg-3"
							data-aos="fade-up"
							data-aos-delay="100"
						>
							<div className=" media-entry media-entry-copy media-size3">
								<a
									href="https://www.community-fundraiser.com/virtual-fundraiser/events/promotions/104b6bfb-4dbd-b890-b2a1-4f237692f082/en/landing"
									target="_0"
									className={`text-center ${styles.logo}`}
								>
									<img
										src={partner7}
										alt="Panda Express"
										className="img-fluid"
									/>
								</a>
								<div className="m-body">
									<h6 className={styles.box7}>
										Panda Express
									</h6>
									<p
										className={
											theme === "dark"
												? styles.textDark
												: styles.textLight
										}
									>
										Panda Express is an American fast-food
										restaurant chain that serves American
										Chinese cuisine. With over 2,200
										locations, it is the largest
										Asian-segment restaurant chain in the
										United States. They are working with
										Silverline to help fundraise and donate
										resources to children in India and
										Ethiopia.
									</p>
								</div>
							</div>
						</div>

						<div
							className="col-6 col-sm-6 col-md-6 col-lg-3"
							data-aos="fade-up"
							data-aos-delay="100"
						>
							<div className=" media-entry media-entry-copy media-size3">
								<a
									href="https://www.equalityinforensics.org/"
									target="_0"
									className={`text-center ${styles.logo}`}
								>
									<img
										src={partner8}
										alt="Equality in Forensics"
										className="img-fluid"
									/>
								</a>
								<div className="m-body">
									<h6 className={styles.box8}>
										Equality in Forensics
									</h6>
									<p
										className={
											theme === "dark"
												? styles.textDark
												: styles.textLight
										}
									>
										Equality in Forensics is a student-run
										NPO that provides free, online resources
										to make speech and debate more
										accessible. Their mission is to reduce
										the classist barriers that prevent
										anyone from succeeding in high school
										forensics. From free online tournaments
										to curriculum produced by national
										champions, Equality in Forensics
										provides direct support to debaters
										across the country.
									</p>
								</div>
							</div>
						</div>

						<div
							className="col-6 col-sm-6 col-md-6 col-lg-3"
							data-aos="fade-up"
							data-aos-delay="100"
						>
							<div className=" media-entry media-entry-copy media-size3">
								<a
									href="https://www.chipotle.com/"
									target="_0"
									className={`text-center ${styles.logo}`}
								>
									<img
										src={partner9}
										alt="Chipotle of Drumhill Chelmsford, MA"
										className="img-fluid"
									/>
								</a>
								<div className="m-body">
									<h6 className={styles.box9}>
										Chipotle of Drumhill Chelmsford, MA
									</h6>
									<p
										className={
											theme === "dark"
												? styles.textDark
												: styles.textLight
										}
									>
										Chipotle Mexican Grill, Inc. is an
										American chain of fast-casual
										restaurants that operates in over 5
										different countries with nearly 3,000
										locations. In September of 2022, they
										worked with Silverline to help fundraise
										money. This fundraiser allowed
										Silverline to become one step closer to
										solving the educational divide. Money
										was redistributed to Silverline heads in
										Africa in order to donate to those in
										need.
									</p>
								</div>
							</div>
						</div>

						<div
							className="col-6 col-sm-6 col-md-6 col-lg-3"
							data-aos="fade-up"
							data-aos-delay="100"
						>
							<div className=" media-entry media-entry-copy media-size3">
								<a
									href="https://www.thewishproject.org/"
									target="_0"
									className={`text-center ${styles.logo}`}
								>
									<img
										src={partner10}
										alt="The Wish Project"
										className="img-fluid"
									/>
								</a>
								<div className="m-body">
									<h6 className={styles.box10}>
										The Wish Project
									</h6>
									<p
										className={
											theme === "dark"
												? styles.textDark
												: styles.textLight
										}
									>
										The Wish Project’s mission is to help
										families in need establish long-term
										residency by providing basic needs to
										provide critical immediate assistance to
										homeless families, victims of fire or
										disaster; and to support the community.
										After realizing a similarity in mission
										statements, the Wish Project began
										working with Silverline to help the
										local Massachusetts area and solve local
										educational disparities.
									</p>
								</div>
							</div>
						</div>

						<div
							className="col-6 col-sm-6 col-md-6 col-lg-3"
							data-aos="fade-up"
							data-aos-delay="100"
						>
							<div className=" media-entry media-entry-copy media-size3">
								<a
									href="https://chs.chelmsfordschools.org/"
									target="_0"
									className={`text-center ${styles.logo}`}
								>
									<img
										src={partner11}
										alt="Chelmsford High School"
										className="img-fluid"
									/>
								</a>
								<div className="m-body">
									<h6 className={styles.box11}>
										Chelmsford High School
									</h6>
									<p
										className={
											theme === "dark"
												? styles.textDark
												: styles.textLight
										}
									>
										Silverline is partnered with Chelmsford
										High School. Chelmsford High School is a
										high school located in Chelmsford,
										Massachusetts, and serves nearly 1,500
										students. Silverline works to provide
										students with help for all academic
										classes and provide volunteer
										opportunities to students.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Partners;
