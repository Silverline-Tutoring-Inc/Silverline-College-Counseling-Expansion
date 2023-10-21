import React, { useState } from "react";
import anonymous from "../../images/anonymous.webp";
import styles from "./styles.module.css";
import { useTheme } from "../ThemeContext";

interface Testimonial {
	name: string;
	des: string;
	content: string;
}

const content: Testimonial[] = [
	{
		name: "Rithvik",
		des: "High School Sophomore",
		content: "“ Place review here”",
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
	{
		name: "Rithin",
		des: "High School Junior",
		content: "“Place review here”",
	},
];

const TestimonialItem: React.FC<Testimonial> = ({ name, des, content }) => {
	const { theme, toggleTheme } = useTheme();
	return (
		<div className={styles.nameContainer}>
			<img
				src={anonymous}
				height={75}
				width={75}
				className={styles.image}
			/>
			<h3
				className={
					theme === "dark" ? styles.nameDark : styles.nameLight
				}
			>
				{name}
			</h3>
			<p className={theme === "dark" ? styles.desDark : styles.desLight}>
				{des}
			</p>
			<p
				className={
					theme === "dark"
						? styles.quoteIconDark
						: styles.quoteIconLight
				}
			>
				“
			</p>
			<p
				className={
					theme === "dark" ? styles.quoteDark : styles.quoteLight
				}
			>
				{content}
			</p>
		</div>
	);
};

const Testimonials: React.FC = () => {
	const [val, setVal] = useState<number>(0);
	const { theme, toggleTheme } = useTheme();

	return (
		<div
			className={
				theme === "dark" ? styles.outerDivDark : styles.outerDivLight
			}
		>
			<div className={styles.innerDiv}>
				<p className={styles.subHeader}>Satisfied Students</p>
				<h1
					className={
						theme === "dark"
							? styles.titleHeaderDark
							: styles.titleHeaderLight
					}
				>
					Testimonials
				</h1>
				<div className={styles.overflowContainer}>
					<div
						className={styles.dynamicSlider}
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
				<div className={styles.selectorContainer}>
					{content.map((c, idx) => (
						<div
							key={idx}
							onClick={() => setVal(idx)}
							className={`${
								theme === "dark"
									? styles.roundButtonDark
									: styles.roundButtonLight
							} ${
								idx === val
									? theme === "dark"
										? styles.activeButtonDark
										: styles.activeButtonLight
									: styles.inactiveButton
							}`}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
