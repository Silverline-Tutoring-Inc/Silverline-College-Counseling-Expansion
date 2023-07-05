import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import logo4 from "./images/logo4.svg";
import logo1 from "./images/logo1.svg";
import "./fonts/icomoon/style.css";
import "./fonts/flaticon/font/flaticon.css";
import "./css/tiny-slider.css";
import "./css/aos.css";
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
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<div>
		<div>
			<div className="site-mobile-menu site-navbar-target">
				<div className="site-mobile-menu-header">
					<div className="site-mobile-menu-close">
						<span className="icofont-close js-menu-toggle"></span>
					</div>
				</div>
			</div>
			<nav class="site-nav">
				<div class="container nav1">
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
								>
									About Us ▾
								</button>
								<ul className="dropdown">
									<li>
										<a href="/#">About</a>
									</li>
									<li>
										<a href="/#">Testimonials</a>
									</li>
									<li>
										<a href="/#">Team</a>
									</li>
									<li>
										<a href="/#">Partners</a>
									</li>
								</ul>
							</li>
							<li className="non">
								<a href="/#">Services</a>
							</li>
							<li className="non">
								<a href="/#">Impact/Reach</a>
							</li>
							<li className="non">
								<a href="/#">Events</a>
							</li>
							<li className="non">
								<a href="reviews.html">FAQs</a>
							</li>
						</ul>
						<ul className="js-clone-nav d-none d-lg-inline-block text-end site-menu float-end">
							<li className="cta-button">
								<a href="mailto:silverlinetutoring2021@gmail.com">
									Contact Us
								</a>
							</li>
							<li className="social-top">
								<a
									href="https://discord.gg/kD8aMaX2gP"
									target="_0"
								>
									<span className="icon-link" />
								</a>
								<a
									href="https://www.instagram.com/silverlinetutoringinc/?igshid=YmMyMTA2M2Y%3D"
									target="_0"
								>
									<span className="icon-instagram" />
								</a>
								<a
									href="https://www.youtube.com/channel/UCc-c1_wUoQPavLeKE5I2_aA"
									target="_0"
								>
									<span className="icon-youtube" />
								</a>
								<a
									href="https://m.facebook.com/people/Silverline-Tutoring/100078405522496/"
									target="_0"
								>
									<span className="icon-facebook" />
								</a>
								<a
									href="https://www.linkedin.com/company/silverline-tutoring-services/"
									target="_0"
								>
									<span className="icon-linkedin" />
								</a>
							</li>
						</ul>
						<a
							href="/#"
							className="burger ms-auto float-end site-menu-toggle js-menu-toggle d-inline-block d-lg-none light"
							data-toggle="collapse"
							data-target="#main-navbar"
						>
							<span />
						</a>
					</div>
				</div>
			</nav>
		</div>
	</div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
