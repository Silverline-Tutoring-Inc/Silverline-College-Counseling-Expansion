import React from "react";
import Footer from "../Footer";
import OurReach from "./OurReach";
import Opportunities from "./Opportunities";
import QuickHelp from "./QuickHelp";
import AboutOurCommunity from "./AboutOurCommunity";
import UpcomingEvents from "./UpcomingEvents";
import Statistics from "./Statistics";
import Banner from "./Banner";
import NavBar from "../NavBar/NavBar";

const OurCommunity: React.FC = () => {
	return (
		<>
			<NavBar pageName="community" />
			<Banner />
			<AboutOurCommunity />
			<UpcomingEvents />
			<Statistics />
			{/* <QuickHelp /> */}
			<OurReach />
			{/* <Opportunities /> */}
			<Footer />
		</>
	);
};

export default OurCommunity;
