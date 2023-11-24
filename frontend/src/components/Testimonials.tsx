import React, { useState } from "react";
import anonymous from "../images/anonymous.webp";
import { useTheme } from "./ThemeContext";

interface Testimonial {
	name: string;
	des: string;
	content: string;
}

const content: Testimonial[] = [
	{
		name: "Rithvik M.",
		des: "Junior from New York",
		content: "“I was struggling in math so I requested a tutor. I got so much help from my tutor and it was free to top it all off. This organization is great for anyone who is struggling in any subject and wants help from qualified tutors. The self-serving system also works as although I was previously a student, I’m now the head tutor.”",
	},
	{
		name: "Rithin",
		des: "Senior from Texas",
		content: "“I was looking for quick help from the helpers in the organization, and I asked for help on a physics question I had and I got a response and help within minutes.”",
	},
	{
		name: "Shanti",
		des: "A Parent",
		content: "“Place review here”",
	},
	{
		name: "Li Jian",
		des: "8th Grader",
		content: "“Place review here”",
	},
];

const TestimonialItem: React.FC<Testimonial> = ({ name, des, content }) => {
	const { theme, toggleTheme } = useTheme();

	const styles: {[key: string]: React.CSSProperties} = {
		testimonialsNameContainer: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			gap: "10px",
			width: "100%",
		},
		testimonialsImage: {
			borderRadius: "50%"
		},
		testimonialsDarkName: {
			color: "white",
			fontWeight: 500,
			marginBottom: "-0.2rem",
		},
		testimonialsLightName: {
			color: "black",
			fontWeight: 500,
			marginBottom: "-0.2rem",
		},
		testimonialsDarkDes: {
			color: "#D6D3CD !important",
		},
		testimonialsLightDes: {
			color: "#181A1B !important",
		},
		testimonialsDarkQuoteIcon: {
			fontSize: "6.5rem",
			color: "white",
			fontFamily: "Work Sans, sans-serif",
			position: "relative",
			marginTop: "-2rem",
			marginBottom: "1rem",
		},
		testimonialsLightQuoteIcon: {
			fontSize: "6.5rem",
			color: "black",
			fontFamily: "Work Sans, sans-serif",
			position: "relative",
			marginTop: "-2rem",
			marginBottom: "1rem",
		},
		testimonialsDarkQuote: {
			color: "#D6D3CD",
			position: "relative",
			top: "-110px",
			fontFamily: "Work Sans, sans-serif",
			width: "80%",
			textAlign: "center",
		},
		testimonialsLightQuote: {
			color: "#181A1B",
			position: "relative",
			top: "-110px",
			fontFamily: "Work Sans, sans-serif",
			width: "80%",
			textAlign: "center",
		},
	}

	return (
		<div className={`nameContainer ${styles.testimonialsNameContainer}`}>
			<img
				src={anonymous}
				height={75}
				width={75}
				style={styles.testimonialsImage}
			/>
			<h3
				className={`name ${theme === "dark" ? styles.testimonialsDarkName : styles.testimonialsLightName}`}
			>
				{name}
			</h3>
			<p className={`des ${theme === "dark" ? styles.testimonialsDarkDes : styles.testimonialsLightDes}`}>
				{des}
			</p>
			<p
				className={`quoteIcon ${theme === "dark" ? styles.testimonialsDarkQuoteIcon : styles.testimonialsLightQuoteIcon}`}>
				“
			</p>
			<p
				className={`quote ${theme === "dark" ? styles.testimonialsDarkQuote : styles.testimonialsLightQuote}`}>
				{content}
			</p>
		</div>
	);
};

const Testimonials: React.FC = () => {
	const [val, setVal] = useState<number>(0);
	const { theme, toggleTheme } = useTheme();

	const styles: {[key: string]: React.CSSProperties} = {
		testimonialsDarkOutDiv: {
			backgroundColor: "#181A1B",
			width: "100%",
			padding: "7rem",
			display: "flex",
			flexDirection: "row",
		},
		testimonialsLightOutDiv: {
			backgroundColor: "#D6D3CD",
			width: "100%",
			padding: "7rem",
			display: "flex",
			flexDirection: "row",
		},
		testimonialsInnerDiv: {
			width: "50%",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",
		},
		testimonialsSubHeader: {
			fontSize: "1rem",
			textTransform: "uppercase",
			fontWeight: 700,
			color: "#9784a1",
		},
		testimonialsDarkTitle: {
			fontSize: "1.5rem",
			textTransform: "uppercase",
			fontWeight: 600,
			color: "white !important",
			paddingBottom: "1rem",
		},
		testimonialsLightTitle: {
			fontSize: "1.5rem",
			textTransform: "uppercase",
			fontWeight: 600,
			color: "black !important",
			paddingBottom: "1rem",
		},
		testimonialsDarkHeader: {
			color: "white !important",
			fontWeight: "600 !important",
		},
		testimonialsLightHeader: {
			color: "black !important",
			fontWeight: "600 !important",
		},
		testimonialsDynamicSlider: {
			display: "flex",
			flexDirection: "row",
			flexWrap: "nowrap",
			borderColor: "white",
			borderWidth: "2px",
			width: "calc(var(--content-length) * 100%)",
			overflow: "hidden",
			position: "relative",
			left: "calc(-1 * var(--val) * 100%)",
			transition: "0.35s",
		},
		testimonialsSelectorContainer: {
			display: "flex",
			flexDirection: "row",
			gap: "10px",
			position: "relative",
			top: "-110px",
		},
		testimonialsDarkRoundButton: {
			border: "3px solid white",
			width: "20px",
			height: "20px",
			transition: "0.35s",
			borderRadius: "50%",
			aspectRatio: 1 / 1,
		},
		testimonialsLightRoundButton: {
			border: "3px solid black",
			width: "20px",
			height: "20px",
			transition: "0.35s",
			borderRadius: "50%",
			aspectRatio: 1 / 1,
		},
		testimonialsDarkActiveButton: {
			backgroundColor: "white"
		},
		testimonialsLightActiveButton: {
			backgroundColor: "black"
		},
		testimonialsInactiveButton: {
			backgroundColor: "rgba(145, 140, 161, 0)",
		},
		testimonialsOverflowContainer: {
			maxWidth: "70%",
			overflow: "hidden",
		},
		testimonialsCenter: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			textAlign: "center",
			justifyContent: "center",
		}
	};

	return (
		<div
			className={`outerDiv ${theme === "dark" ? styles.testimonialsDarkOutDiv : styles.testimonialsLightOutDiv}`}
			style={styles.testimonialsCenter}
		>
			<div className={`innerDiv ${styles.testimonialsInnerDiv}`}>
				<p className={`subHeader ${styles.testimonialsSubHeader}`}>Satisfied Students</p>
				<h1
					className={`title ${theme === "dark" ? styles.testimonialsDarkTitle : styles.testimonialsLightTitle}`}>
					Testimonials
				</h1>
				<div className={`overflowContainer ${styles.testimonialsOverflowContainer}`}>
					<div
						className={`dynamicSlider ${styles.testimonialsDynamicSlider}`}
						// cannot avoid this style
						style={
							{
								"--content-length": content.length,
								"--val": val,
							} as any
						}
					>
						{content.map((c, idx) => (
							<TestimonialItem {...c} key={idx} />
						))}
					</div>
				</div>
				<div className={`selectorContainer ${styles.testimonialsSelectorContainer}`}>
					{content.map((c, idx) => (
						<div
							key={idx}
							onClick={() => setVal(idx)}
							className={`${
								theme === "dark"
									? styles.testimonialsDarkRoundButton
									: styles.testimonialsLightRoundButton
							} ${
								idx === val
									? theme === "dark"
										? styles.testimonialsDarkActiveButton
										: styles.testimonialsLightActiveButton
									: styles.testimonialsInactiveButton
							}`}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
