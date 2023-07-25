import React from "react";
import Footer from "../Footer";
import Banner from "./Banner";
import NavBar from "../NavBar";
import FoundingIdea from "./FoundingIdea";
import StudentSupport from "./StudentSupport";
import CommunityEvents from "./CommunityEvents";
import SocialServices from "./SocialServices";  
import FutureIdeas from "./FutureIdeas";
const Services = () => {
    return (
        <>
            <NavBar pageName="community" />
            <Banner />
            <FoundingIdea />
            <StudentSupport />
            <CommunityEvents />
            <SocialServices />
            <FutureIdeas />
            <Footer />
        </>
    );
};

export default Services;

