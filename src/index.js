import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import logo4 from "./images/logo4.svg";
import logo1 from "./images/logo1.svg";
import "./fonts/icomoon/style.css";
import "./fonts/flaticon/font/flaticon.css";
import "./css/tiny-slider.css";
import "./css/flaticon.css";
import "./css/flatpickr.min.css";
import "./css/glightbox.min.css";
import "./css/style.css";
import "./css/fontawesome/webfonts/fa-brands-400.eot";
import "./css/fontawesome/webfonts/fa-brands-400.woff";
import "./css/fontawesome/webfonts/fa-brands-400.woff2";
import "./css/fontawesome/webfonts/fa-regular-400.eot";
import "./css/fontawesome/webfonts/fa-regular-400.woff";
import "./css/fontawesome/webfonts/fa-solid-900.eot";
import "./css/fontawesome/webfonts/fa-regular-400.woff2";
import "./css/fontawesome/webfonts/fa-solid-900.woff2";
import Services from "./components/Services";
import Faq from "./components/Faq";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import Partners from "./components/Partners";
import OurCommunity from "./components/OurCommunity/OurCommunity";

const App = () => {
	const [activeComponent, setActiveComponent] = useState(null);

	const renderComponent = (component) => {
		setActiveComponent(component);
	};

	const renderActiveComponent = () => {
		switch (activeComponent) {
			case "About":
				return <About />;
			case "Testimonials":
				return <Testimonials />;
			case "Team":
				return <Team />;
			case "Partners":
				return <Partners />;
			case "Community":
				return <OurCommunity />;
			default:
				return null;
		}
	};

	const isHomePage = activeComponent === null;

	return (
		<div>
			<div className="site-mobile-menu site-navbar-target">{}</div>
			<nav className="site-nav">
				<div className="container nav1">
					<img
						src={logo4}
						alt="silverline logo"
						style={{ maxHeight: "70px", marginTop: "-15px" }}
						className="float-start"
					></img>
					<img
						src={logo1}
						alt="silverline logo"
						style={{ maxHeight: "70px", marginTop: "-15px" }}
						className="float-start1 hide"
					></img>
					<div className="site-navigation">
						<ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu float-start">
							<li className="active">
								<a href>Home</a>
							</li>
							<li className="has-children non">
								<button
									href="/#"
									style={{
										background: "none",
										color: "#D7D6DA",
										border: "none",
										paddingLeft: "20px",
										font: "inherit",
										cursor: "pointer",
										outline: "inherit",
									}}
									onClick={() => renderComponent("About")}
								>
									About Us ▾
								</button>
								<ul className="dropdown">
									<li>
										<a
											href="#"
											onClick={() =>
												renderComponent("About")
											}
										>
											About
										</a>
									</li>{" "}
									{}
									<li>
										<a
											href="#"
											onClick={() =>
												renderComponent("Testimonials")
											}
										>
											Testimonials
										</a>
									</li>{" "}
									{}
									<li>
										<a
											href="#"
											onClick={() =>
												renderComponent("Team")
											}
										>
											Team
										</a>
									</li>{" "}
									{}
									<li>
										<a
											href="#"
											onClick={() =>
												renderComponent("Partners")
											}
										>
											Partners
										</a>
									</li>{" "}
									{}
								</ul>
							</li>
							<li className="non">
								<a
									href="#"
									onClick={() => root.render(<Services />)}
								>
									Services
								</a>
							</li>
							<li className="non">
								<a
									href="#"
									onClick={() =>
										root.render(<OurCommunity />)
									}
								>
									Our Community
								</a>
							</li>
							<li className="non">
								<a href="/#">Events</a>
							</li>
							<li className="non">
								<a
									href="#"
									onClick={() => root.render(<Faq />)}
								>
									FAQs
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div
				className="section overlay"
				style={{
					backgroundImage: "url('images/about/sBG.png')",
					backgroundSize: "cover",
					backgroundRepeat: "repeat",
					backgroundPosition: "center center",
				}}
			>
				<div className="container"></div>
				<div className="row align-items-center">
					<div className="col-lg-12">
						<h1
							data-aos="fade-up"
							style={{
								color: "#918CA1",
								fontFamily: "Work Sans",
								fontWeight: 800,
							}}
						>
							About Silverline
						</h1>
						<h2
							className="heading mb-3"
							data-aos="fade-up"
							data-aos-delay="100"
						></h2>
						<p data-aos="fade-up" data-aos-delay="200">
							Silverline Tutoring is an educational 501(c)(3)
							nonprofit organization that connects tutors and
							students within our network of over 5000 dedicated
							members. Our company was founded by college and high
							school students who understand the challenges of
							learning.
						</p>
						<p data-aos="fade-up" data-aos-delay="300">
							We aim to bridge the educational divide by providing
							free tutoring services to any student in need. Our
							unique model leverages the expertise of volunteers
							from the community. For example, individuals with 2+
							years of experience in a specific subject can apply
							to become tutors and earn community service hours
							for their work.
						</p>
						<p data-aos="fade-up" data-aos-delay="400">
							At Silverline, we are committed to serving as many
							students as possible while maintaining high-quality
							standards. By harnessing the power of our passionate
							tutors, we strive to make a positive impact on the
							education and lives of students.
						</p>
					</div>
					<div className="col-lg-1"></div>
				</div>
			</div>
			{}
			{renderActiveComponent()}
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
