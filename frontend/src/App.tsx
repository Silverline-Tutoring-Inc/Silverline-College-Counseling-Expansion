import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/style.css";
import Reach from "./components/Reach";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer";
import Method from "./components/Method/Method";
import Partners from "./components/Partners/Partners";
import Lectures from "./components/Lectures/Lectures";
import Reviews from "./components/Reviews";
import Services from "./components/Services/Services";
import OurCommunity from "./components/OurCommunity/OurCommunity";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import About from "./components/About";
import NavBar from "./components/NavBar/NavBar";
import AOS from "aos";
import "aos/dist/aos.css";
import GetInvolved from "./components/GetInvolved/GetInvolved";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import Team from "./components/Team/Team";
import { ThemeProvider } from "./components/ThemeContext";

function App(): JSX.Element {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<ThemeProvider>
			<div className="App">
				<Router>
					<Routes>
						<Route
							path="/"
							element={
								<>
									<NavBar pageName="home" />
									<Hero />
									<AboutSection />
									<ServicesSection />
									<Reach />
									<Lectures />
									{/* <Team /> */}
									<Testimonials />
									<Faq />
									<Footer />
								</>
							}
						/>
						<Route path="/method" element={<Method />} />
						<Route path="/partners" element={<Partners />} />
						<Route path="/reviews" element={<Reviews />} />
						<Route path="/community" element={<OurCommunity />} />
						<Route path="/services" element={<Services />} />
						<Route path="/about" element={<About />} />
						<Route path="/team" element={<Team />} />
						<Route path="/getinvolved" element={<GetInvolved />} />
					</Routes>
				</Router>
			</div>
		</ThemeProvider>
	);
}

export default App;
