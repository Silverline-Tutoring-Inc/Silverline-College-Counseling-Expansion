import React from "react";
import { useTheme } from "../ThemeContext";
import styles from "./styles.module.css";

const Hero: React.FC = () => {
	const { theme, toggleTheme } = useTheme();
	return (
		<div
			className={`hero hero1 ${theme === "dark" ? "overlay" : ""} ${
				styles.hero_overlay
			}`}
		>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-7 pt-7">
						<h1 className={`heading mb-4`}>
							Silverline Educational Advisory Services
						</h1>
						<h2 className="mb-5">
							Solving the education divide, one student at a time.
						</h2>
						<div>
							<p className="my-5">
								<a
									href="https://discord.gg/kD8aMaX2gP"
									target="_blank"
									className="btn btn-primary"
								>
									Join Us Today
								</a>
							</p>
							<p className="my-4">
								<a
									href="/getinvolved"
									target="_blank"
									className="btn btn-primary"
								>
									Student Signup
								</a>
							</p>
							<p className="my-4">
								<a
									href="/getinvolved"
									target="_blank"
									className="btn btn-primary"
								>
									Tutor Signup
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
