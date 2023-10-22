import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo4.svg";
import { useTheme } from "./ThemeContext";

interface NavBarProps {
	pageName?: string;
}

const NavBar: React.FC<NavBarProps> = ({ pageName }) => {
	const { theme, toggleTheme } = useTheme();
	let elementName = "";
	switch (pageName) {
		case "home":
			elementName = "home";
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
		<nav className={`site-nav ${theme} secondary-bg`}>
			<div className="container nav1">
				<img
					style={{ maxHeight: "70px", marginTop: "-15px" }}
					alt="silverline tutoring logo"
					className="float-start"
					src={logo}
				/>
				<div className="site-navigation">
					<ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu float-start">
						<li
							className={
								elementName === "home" ? "active" : "non"
							}
						>
							<Link to="/">Home</Link>
						</li>
						<li className="has-children non">
							<button
								style={{
									background: "none",
									border: "none",
									color: "#D7D6DA",
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
									<Link to="/services">Our Services</Link>
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
							className={
								elementName === "community" ? "active" : "non"
							}
						>
							<Link to="/community">Our Community</Link>
						</li>
						<li
							className={
								elementName === "getInvolved" ? "active" : "non"
							}
						>
							<Link to="/getinvolved">Join Our Community</Link>
						</li>
						<li
							className={
								elementName === "reviews" ? "active" : "non"
							}
						>
							<Link to="/reviews">Our Reviews</Link>
						</li>
					</ul>
					<ul className="js-clone-nav d-none d-lg-inline-block text-end site-menu float-end">
						<li className="cta-button">
							<a href="/getinvolved">
							Join Us Today
							</a>
						</li>
						<li className="social-top">
							<a href="https://discord.gg/kD8aMaX2gP" target="_0">
								<i className="fa-solid fa-link"></i>
							</a>

							<a
								href="https://www.instagram.com/silverlinetutoringinc/?igshid=YmMyMTA2M2Y%3D"
								target="_0"
							>
								<i className="fa-brands fa-instagram"></i>
							</a>
							<a
								href="https://www.youtube.com/channel/UCc-c1_wUoQPavLeKE5I2_aA"
								target="_0"
							>
								<i className="fa-brands fa-youtube"></i>
							</a>
							<a
								href="https://m.facebook.com/people/Silverline-Tutoring/100078405522496/"
								target="_0"
							>
								<i className="fa-brands fa-facebook-f"></i>
							</a>
							<a
								href="https://www.linkedin.com/company/silverline-tutoring-services/"
								target="_0"
							>
								<i className="fa-brands fa-linkedin-in"></i>
							</a>
							<a
								onClick={toggleTheme}
								style={{ marginLeft: "3rem" }}
							>
								{theme === "dark" ? (
									<i className="fas fa-sun"></i>
								) : (
									<i className="fas fa-moon"></i>
								)}
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
