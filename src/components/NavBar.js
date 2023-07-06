import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo4.svg";

import PropTypes from "prop-types";

const NavBar = ({ pageName }) => {
	let elementName = "";
	switch (pageName) {
		case "home":
			elementName = "home";
			break;
		case "about":
			elementName = "about";
			break;
		case "services":
			elementName = "services";
			break;
		case "method":
			elementName = "method";
			break;
		case "team":
			elementName = "team";
			break;
		case "partners":
			elementName = "partners";
			break;
		case "community":
			elementName = "community";
			break;
		case "getInvolved":
			elementName = "getInvolved";
			break;
		case "reviews":
			elementName = "reviews";
			break;
		default:
			throw new Error(
				"Please look at components/NavBar.js detectElement() for the full list"
			);
	}

	return (
		<nav class="site-nav">
			<div class="container nav1">
				<img
					style={{ maxHeight: "70px", marginTop: "-15px" }}
					alt="silverline tutoring logo"
					class="float-start"
					src={logo}				
        />
				<div class="site-navigation">
					<ul class="js-clone-nav d-none d-lg-inline-block text-start site-menu float-start">
						<li class={elementName === "home" ? "active" : "non"}>
							<Link to="/">Home</Link>
						</li>
						<li class="has-children non">
							<button
								href="/"
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
							<ul class="dropdown">
								<li>
									<Link to="/about">About</Link>
								</li>
								<li>
									<Link to="/method">Method</Link>
								</li>
								<li>
									<Link to="/team">Team</Link>
								</li>
								<li>
									<Link to="/partners">Partners</Link>
								</li>
							</ul>
						</li>
						<li
							class={
								elementName === "services" ? "active" : "non"
							}
						>
							<Link to="/services">Services</Link>
						</li>
						<li
							class={
								elementName === "community" ? "active" : "non"
							}
						>
							<Link to="/community">Our Community</Link>
						</li>
						<li
							class={
								elementName === "getInvolved" ? "active" : "non"
							}
						>
							<Link to="/getinvolved">Get Involved</Link>
						</li>
						<li
							class={elementName === "reviews" ? "active" : "non"}
						>
							<Link to="/reviews">Our Reviews</Link>
						</li>
					</ul>

					<ul class="js-clone-nav d-none d-lg-inline-block text-end site-menu float-end">
						<li class="cta-button">
							<a href="mailto:silverlinetutoring2021@gmail.com">
								Contact Us
							</a>
						</li>
						<li class="social-top">
							<a href="https://discord.gg/kD8aMaX2gP" target="_0">
								<i class="fa-solid fa-link"></i>
							</a>

							<a
								href="https://www.instagram.com/silverlinetutoringinc/?igshid=YmMyMTA2M2Y%3D"
								target="_0"
							>
								<i class="fa-brands fa-instagram"></i>
							</a>
							<a
								href="https://www.youtube.com/channel/UCc-c1_wUoQPavLeKE5I2_aA"
								target="_0"
							>
								<i class="fa-brands fa-youtube"></i>
							</a>
							<a
								href="https://m.facebook.com/people/Silverline-Tutoring/100078405522496/"
								target="_0"
							>
								<i class="fa-brands fa-facebook-f"></i>
							</a>
							<a
								href="https://www.linkedin.com/company/silverline-tutoring-services/"
								target="_0"
							>
								<i class="fa-brands fa-linkedin-in"></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

NavBar.propTypes = {
	pageName: PropTypes.string,
};
export default NavBar;
