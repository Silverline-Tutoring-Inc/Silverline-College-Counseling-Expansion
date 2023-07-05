import React from "react";
import bannerImg from "../../images/community/banner.jpg";

const Banner = () => {
	const titleStyle = {
		fontSize: "4rem",
		fontWeight: "bold",
		color: "white",
		position: "absolute",
		top: "50%",
		left: "50%",
	};
	return (
		<>
			<img src={bannerImg} alt="banner" width="100%" />
			<h1 style={titleStyle}>Our Community</h1>
		</>
	);
};

export default Banner;
