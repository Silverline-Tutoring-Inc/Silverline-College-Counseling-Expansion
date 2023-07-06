import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./css/style.css";
import Reach from "./components/Reach.js";
import Footer from "./components/Footer.js";
import Method from "./components/Method/Method";
import Partners from "./components/Partners";
import Lectures from "./components/Lectures";
import Reviews from "./components/Reviews";
import Services from "./components/Services.js";
import Team from "./components/Team";
import OurCommunity from "./components/OurCommunity/OurCommunity";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import About from "./components/About";
import NavBar from "./components/NavBar";
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css"

function App() {
  useEffect(() => {AOS.init()}, []);
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route
						path="/"
						element={
							<>
								<NavBar pageName="home" />
								<Reach />
								<Lectures />
								<Team />
								<Testimonials />
								<Footer />
							</>
						}
					/>
					<Route path="method" element={<Method />} />
					<Route path="partners" element={<Partners />} />
					<Route path="reviews" element={<Reviews />} />
					<Route path="community" element={<OurCommunity />} />
					<Route path="faq" element={<Faq />} />
					<Route path="services" element={<Services />} />
					<Route path="about" element={<About />} />
					<Route path="team" element={<Team />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
