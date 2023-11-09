import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer";
import { useTheme } from "../ThemeContext";
import styles from "./styles.module.css";

const Review: React.FC = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div
			className={
				theme === "dark"
					? styles.reviewsPageDark
					: styles.reviewsPageLight
			}
			data-testid="reviews-container"
		>
			<NavBar pageName="reviews" />
			<h1
				className={
					theme === "dark"
						? styles.reviewsTitleDark
						: styles.reviewsTitleLight
				}
			>
				Reviews
			</h1>
			<p
				className={
					theme === "dark"
						? styles.reviewsSubtitleDark
						: styles.reviewsSubtitleLight
				}
			>
				Hear what others have to say about Silverline Educational Advisory Services.
			</p>
			<p
				className={
					theme === "dark"
						? styles.reviewsSubtitleDark
						: styles.reviewsSubtitleLight
				}
			>
				If you would like to leave a more personalized comment, please
				email us.
			</p>
			<div className={styles.reviewsContainer}>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Abdu-Allah Ahmed
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								8th grader from Egypt
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&nbsp;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					>
						I like how the tutors are very friendly and explain the
						topics in a very understanding way. They are quick to
						respond whenever I have a question. This organization is
						great if you want to improve in any subject or if you
						want to work on a hobby such as chess.
					</p>
				</div>
				{/* Add more reviews here */}
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Rithvik M.
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Junior from New York
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					>
						I was struggling in math so I requested a tutor. I got
						so much help from my tutor and it was free to top it all
						off. This organization is great for anyone who is
						struggling in any subject and wants help from qualified
						tutors. The self-serving system also works as although I
						was previously a student, I’m now the head tutor.
					</p>
				</div>
				{/* Add more reviews here */}
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Dylan A.
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Freshman from California
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					>
						Silverline Educational Advisory Services is a great organization given the
						fact that it is free, has several tutors almost always
						active, and has a very active and friendly community. I
						really enjoy being tutored for free and it helps the
						tutors because they gain community service hours just
						for tutoring you. I would recommend that you join the
						organization
					</p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Anubhav P.
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Sophomore from Wisconsin
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&nbsp;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					>
						I was looking for help on computer science and requested
						a tutor at Silverline Educational Advisory Services. Within a couple of hours
						I was paired with a tutor and we met the next day over
						zoom. My tutor was able to break down the topic and made
						it really easy for me to understand. He helped me pass
						the class with an A+
					</p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Rithin P.
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Senior from Texas
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&nbsp;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					>
						I was looking for quick help from the helpers in the
						organization, and I asked for help on a physics question
						I had and I got a response and help within minutes.
					</p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Aryan Patel
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Junior from India
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					>
						Silverline Educational Advisory Services is simply the best, I got so much
						help on my homework and the helpers quickly answered all
						the questions I had.
					</p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								David G
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Freshman @ Northeastern University
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					>
						I had a couple of problems with my intro to chem class
						in college and I got all the help I needed from the
						chemistry tutors at Silverline Educational Advisory Services. Would recommend
						it to anyone who is looking for help!
					</p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Arav S.
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Sophomore from Alabama
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					>
						I was struggling with improving in chess and was
						constantly losing my games on chess.com. I joined the
						server and got paired with a tutor within a day. Within
						a couple of classes I was able to rapidly improve and
						was able to start winning more games against harder
						opponents.
					</p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Audrey B.
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Sophomore from California
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					>
						I was struggling with AP European history, and had a B-
						in the class, I signed up to get a tutor and he was so
						patient with me and we were able to set up a schedule
						and consistently met for 2 months. At the end of the 2
						months I had a 96 in the class
					</p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Ashutosh K.
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Sophomore from North Carolina
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					>
						First off, I would like to say that Silverline is
						overall a great program, the heads and the tutors are
						all really nice and respond quickly but the student
						community is great as well. I was able to talk to other
						kids my age and just create connections and more friends
						while also getting advice from the students who were in
						college. I really liked Silverline’s lectures and how
						informative they were. I was able to get all my
						questions about college answered by the guest speaker as
						well.
					</p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								John D.
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Former tutor from Pennsylvania
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					>
						Silverline Educational Advisory Services' superior organization, resources,
						and dedication to providing students with worthwhile
						tutoring has allowed me as a tutor to both increase my
						tutoring skills and have fun making an impact in the
						world.
					</p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Beomjun Kim
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					>
						Supa helpful.
					</p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Sophia Zheng
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					>
						This is a very helpful organization that has truly met
						all my needs. I couldn't have asked for a better
						nonprofit to help with my homework and other tasks.
					</p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Rachel Moore
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					>
						Very helpful organization and would highly recommend!
					</p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Big Cheese
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					></p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Vishant R.
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&nbsp;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					>
						I learned so much about AP Physics C from my tutor!
					</p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Vaibhav S
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&nbsp;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					>
						I really liked this place, and all the tutors are super
						into what they do, kind, and hardworking!
					</p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Tanush Kaushik
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&nbsp;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					>
						This place was great at tutoring me! I especially liked
						Madhav Jhawar's customer service and treated me
						extremely well. He's so caring to me.
					</p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Ashrit Anala
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					>
						Great Organization
					</p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Arayan Arora
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&nbsp;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					>
						I love the quick response and quality for classes. Shout
						out to Tarun for his excellent service and guidance.
					</p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Jeevan Palani
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&nbsp;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					>
						amazing!!!
					</p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Dedeep Surampudi
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&nbsp;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					>
						I was surprised by how professional the company
						operated! All the staff is very kind and helpful.
					</p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Eristekad
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&nbsp;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					>
						great people, very patient and very well informed.
					</p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Ariana Malik
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&nbsp;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					>
						Amazing organization with a great cause!
					</p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								xX **** Xx
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&nbsp;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					>
						This place raised my GPA almost a whole point :-)
					</p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Kaitz Tapia
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&nbsp;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					>
						a great resource to get help with any kind of school
						work!!
					</p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Feesh
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&nbsp;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					>
						Silverline has been very helpful for me, free, quick
						and good explanations. (A level maths help)
					</p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Keval Patel
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&nbsp;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					>
						a great resource to get help with any kind of school
						work!!
					</p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Sultan Marketing
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&nbsp;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					></p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Suchnoor Ahuja
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&nbsp;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					></p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Ryan Sekelow
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					></p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Parv Paarikh
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					></p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Abdulkadir Husein
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					></p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Pranav Rajaram
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					></p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Anikait Singh
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					></p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Nathaniel LeBrun
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					></p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Tony Estafanous
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					></p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Samuel M
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					></p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Sidarth Krishna
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&nbsp;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					></p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Big Cheese
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&nbsp;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					></p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Madhav Jhawar
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&nbsp;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					></p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Ankit Panda
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&nbsp;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					></p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Shivam Shah
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&nbsp;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					></p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Shivvani
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&nbsp;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					></p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Hrithik Singhania
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&nbsp;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					></p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Insert Joke
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&nbsp;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					></p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Kevin Philip
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&nbsp;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					></p>
				</div>

				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Mauro Daniel
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&nbsp;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					></p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Pengion Star
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&nbsp;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					></p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Ronak Patel
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&nbsp;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					></p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Kevin Kwon
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&nbsp;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					></p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Shruti Singh
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&nbsp;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					></p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Nerds.
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&nbsp;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					></p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Eduardo Beato
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&nbsp;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					></p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Joshua Sneden
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&nbsp;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					></p>
				</div>

				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Milan Behera
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&nbsp;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					></p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Luke_B
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&nbsp;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					></p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Luke DT
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&nbsp;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					></p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Sara DeHaan
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&nbsp;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					></p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Train the Rain
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&nbsp;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					></p>
				</div>

				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Nolan Busa
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&nbsp;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					></p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Mann Talati
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&nbsp;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					></p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Ricky Touch
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&nbsp;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					></p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Jeffery Chen
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&nbsp;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					></p>
				</div>
				<div
					className={
						theme === "dark"
							? styles.reviewDark
							: styles.reviewLight
					}
				>
					<div className={styles.reviewHeader}>
						<div>
							<h3
								className={
									theme === "dark"
										? styles.reviewNameDark
										: styles.reviewNameLight
								}
							>
								Maya Aggarwal
							</h3>
							<span
								className={
									theme === "dark"
										? styles.reviewOriginDark
										: styles.reviewOriginLight
								}
							>
								Google reviews user
							</span>
						</div>
						<div className={styles.reviewRating}>
							<span className={styles.star}>&nbsp;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
							<span className={styles.star}>&#9733;</span>
						</div>
					</div>
					<p
						className={
							theme === "dark"
								? styles.reviewContentDark
								: styles.reviewContentLight
						}
					></p>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Review;
