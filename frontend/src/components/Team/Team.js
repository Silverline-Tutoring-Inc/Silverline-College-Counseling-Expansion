import React from "react";
import NavBar from "../NavBar";
import { board } from "./dummy";
import TeamCard from "./TeamCard";

const cardLoop = () => {
	let cards = [];
	for (let i = 0; i < board.length; i++) {
		cards.push(
			<TeamCard
				name={board[i].name}
				img={board[i].img}
				desc={board[i].desc}
				education={board[i].education}
				hobbies={board[i].hobbies}
				linkedin={board[i].linkedin}
			/>
		);
	}
	return cards;
};

function Team() {
	return (
		<>
			<NavBar pageName="team" />
			<div className="container">
				<div
					class="row align-items-stretch"
					style={{ paddingTop: "5rem" }}
				>
					{/* <TeamCard
						name={board[0].name}
						img={board[0].img}
						desc={board[0].desc}
						education={board[0].education}
						hobbies={board[0].hobbies}
						linkedin={board[0].linkedin}
					/> */}
					{cardLoop()}
					{/* <TeamCard />
				<div
					class="col-6 col-sm-6 col-md-6 col-lg-3 aos-init aos-animate"
					data-aos="fade-up"
					data-aos-delay="100"
				>
					<div class=" media-entry media-entry-original media-size0">
						<a
							href="https://www.linkedin.com/in/ohik-kwon-483029214/"
							target="0" style={{ backgroundColor: "transparent" }} class="text-center"
						>
							<img
								src="images/team/ohik.png"
								alt="ohik kwon"
								class="img-fluid"
							/>
						</a>
						<div class="bg-white m-body">
							<h5 style={{ textAlign: "center" }}>Ohik Kwon</h5>

							<p>
								Ohik is currently a rising high school senior in
								Northern Illinois. Originally born in Seoul,
								South Korea, his immigration to the United
								States introduced huge language barriers that
								hindered his academic progress. Through this
								experience, Ohik recognizes the negative impacts
								academic struggles create and serves to ensure
								no student is left behind to struggle
								academically. As a board of director, Ohik’s
								ultimate goal is to expand Silverline and make
								premium 1 on 1 tutoring sessions free and
								accessible within mere clicks of a button. As
								part of his duty and passion, Ohik works closely
								with all members of the Executive team and
								Silverline community to guarantee future
								prosperity and a warm community. Outside of
								Silverline, he is involved heavily in STEM,
								participating in his school's year-long
								Computing Team while launching rockets hundreds
								of meters into the sky as part of his Rocket
								Club. He also passionately plays volleyball and
								tries his best to consistently go to the gym.
								Ohik is excited about the future of Silverline
								and fights against academic injustice. He hopes
								that through Silverline, he can make education
								available to everyone.{" "}
							</p>
							<p>
								Education: <br />
								<br />{" "}
								<span style={{ color: "#AFA99E" }}>
									{" "}
									Neuqua Valley Highschool ‘23
								</span>
							</p>
							<p>Hobbies</p>
							<ul>
								<li>Volleyball</li>
								<li>Coding</li>
								<li>Creating</li>
							</ul>
						</div>
					</div>
				</div>

				<div
					class="col-6 col-sm-6 col-md-6 col-lg-3 aos-init aos-animate"
					data-aos="fade-up"
					data-aos-delay="100"
				>
					<div class=" media-entry media-entry-original media-size0">
						<img
							src="images/team/nolan.png"
							alt="nolan du"
							class="img-fluid"
						/>
						<div class="bg-white m-body">
							<h5 style={{ textAlign: "center" }}>Nolan Du</h5>

							<p>
								Nolan is currently a senior at Farragut High
								School in Tennessee. He enjoys tutoring and
								helping others. Some things he does is running a
								COVID-19 vaccine registration organization and a
								tutoring club at his high school. He is
								adventurous and creative and has always had a
								passion for entrepreneurship. He has been
								involved in the startup space throughout high
								school and plans to study business in college
								and continue working on his startup. In
								particular, he is interested in tech, social
								platforms, and virtual work. He is always
								growing his network and invites anyone
								interested in the startup space to reach out
								with him so they can connect. Nolan plans to
								integrate Silverline Tutoring into schools by
								creating club chapters under our umbrella. Nolan
								sees this as an opportunity for Silverline to
								reach more students and make group studying more
								accessible as an integrated part of the student
								experience.
							</p>
							<p>
								Education: <br />
								<br />{" "}
								<span style={{ color: "#AFA99E" }}>
									Farragut High School '23
								</span>
							</p>
							<p>Hobbies</p>
							<ul>
								<li>Creating</li>
								<li>Exploring</li>
							</ul>
						</div>
					</div>
				</div>
				<div
					class="col-6 col-sm-6 col-md-6 col-lg-3 aos-init aos-animate"
					data-aos="fade-up"
					data-aos-delay="100"
				>
					<div class=" media-entry media-entry-original media-size0">
						<a
							href="https://www.linkedin.com/in/shivam-shah-518a88236/"
							target="0"
							style={{ backgroundColor: "transparent" }}
							class="text-center"
						>
							<img
								src="images/team/shivam.png"
								alt="shivam shah"
								class="img-fluid"
							/>
						</a>
						<div class="bg-white m-body">
							<h5 style={{ textAlign: "center" }}>Shivam Shah</h5>

							<p>
								Shivam is currently a rising senior in Northern
								Illinois. He spends his weekday mornings working
								with ESY children seeking extra support over
								summer at a local elementary school and
								frequently travels during the school year for
								Track &amp; Field, Soccer, and ModelUN. His
								active participation and energetic attitude in
								both his school and neighboring communities has
								suited him as the Human Resources head for
								Silverline Tutoring. As a student who’s received
								tutoring himself, Shivam’s found that tutoring
								agencies often overprice their services and
								neglect to offer free resources that educated
								communities flourish and rely upon for academic
								success. As the Chief Human Resources Officer,
								Shivam communicates extensively with students
								and tutors to allow services to occur instantly,
								and serves to provide opportunities for students
								to take advantage of. During the school year, he
								leads his SkillsUSA club and competes at the
								world level for VEX Robotics. Through his
								collaboration with faculty and his team to
								prepare for competitions, he’s able to instantly
								connect with individuals across the globe, with
								everlasting discussions in politics, school, and
								life in general, always available to provide
								advice. Going forward, Shivam hopes that
								Silverline Tutoring’s services will be more
								accessible for students without the necessary
								technological means and is excited to see the up
								and coming developments.{" "}
							</p>
							<p>
								Education: <br />
								<br />{" "}
								<span style={{ color: "#AFA99E" }}>
									Waubonsie Valley High School ‘23
								</span>
							</p>
							<p>Hobbies</p>
							<ul>
								<li>Soccer</li>
								<li>Investing</li>
							</ul>
						</div>
					</div>
				</div>
				<div
					class="col-6 col-sm-6 col-md-6 col-lg-3 aos-init aos-animate"
					data-aos="fade-up"
					data-aos-delay="100"
				>
					<div class=" media-entry media-entry-original media-size0">
						<a
							href="https://www.linkedin.com/in/avaneesh-mallela-52725b20a/"
							target="0"
							style={{ backgroundColor: "transparent" }}
							class="text-center"
						>
							<img
								src="images/team/avaneesh.png"
								alt="avaneesh mallela"
								class="img-fluid"
							/>
						</a>
						<div class="bg-white m-body">
							<h5 style={{ textAlign: "center" }}>
								Avaneesh Mallela
							</h5>

							<p>
								Avaneesh Mallela is a high school student
								attending Westford Academy. Being an avid
								reader, he loves to learn. Ever since a young
								age, the internet and business have always
								intrigued him. He always looks at ways that
								these 2 things can be improved in any
								organization he works with as well as their
								application being combined. It is something that
								he loves and aspires to do evidenced by his
								projects all the way back in elementary school
								using google maps to find the most effective
								path to sell candy and what to say by looking at
								the street on which he is on to sell the candy.
								This is just one of many things he has done but
								he is not satisfied! Using technology and his
								experience in business he looks to find
								interesting ways to further any organization he
								is apart of. His experience in technology is
								evidenced by his extensive understanding of
								business solutions evidenced by him winning
								hackathons as well as attending the coveted-DECA
								SCDC competition. Something Avaneesh values
								highly is education which is the main factor on
								which he joined Silverline tutoring. His aim in
								joining Silverline tutoring is to further expand
								the reach and quality of the services offered by
								leveraging his skills.
							</p>
							<p>
								Education: <br />
								<br />{" "}
								<span style={{ color: "#AFA99E" }}>
									Westford Academy 23’
								</span>
							</p>
							<p>Hobbies</p>
							<ul>
								<li>Beach </li>
								<li>Gym</li>
								<li>Reading</li>
							</ul>
						</div>
					</div>
				</div>
				<div
					class="col-6 col-sm-6 col-md-6 col-lg-3 aos-init aos-animate"
					data-aos="fade-up"
					data-aos-delay="100"
				>
					<div class=" media-entry media-entry-original media-size0">
						<a
							href="https://www.linkedin.com/in/avaneesh-mallela-52725b20a/"
							target="0"
							style={{ backgroundColor: "transparent" }}
							class="text-center"
						>
							<img
								src="images/team/marty.png"
								alt="avaneesh mallela"
								class="img-fluid"
							/>
						</a>
						<div class="bg-white m-body">
							<h5 style={{ textalign: "center" }}>
								Martin Coleman
							</h5>

							<p>
								Marty Coleman is currently a high school senior
								from Chelmsford, Massachusetts. At Chelmsford
								High School, he serves as Class President and is
								the Founder and President of the Physics and
								Engineering Club. Marty sees effective education
								as vital to personal improvement and societal
								progress and seeks to advance the accessibility
								of quality learning and extra help through his
								participation in Silverline. He seeks to apply
								his interpersonal, networking, and business
								strategy skills to his position as a Board
								Member to expand Silverline's outreach. Marty
								plans on majoring in Physics in college and is
								deeply interested in the universe, astrophysics,
								technology, and economic philosophy. At
								Chelmsford High, Marty has also participated in
								the Freshman Mentor Program, DECA, Class
								Representatives, Student Council, Investing
								Club, and more, all of which have honed his
								skills as a leader and student. He has also
								taken summer courses such as Introduction to
								Astrophysics at Harvard University's summer
								program. Marty has taken several online courses
								on stock trading and gained experience in the
								stock market over the last 3 years. He is also
								an enthusiastic participant in the town
								basketball league. He's excited to partake in
								and watch Silverline grow as an organization.
							</p>
							<p>
								Education: <br />
								<br />{" "}
								<span style={{ color: "#AFA99E" }}>
									Chelmsford High School ‘23
								</span>
							</p>
							<p>Hobbies</p>
							<ul>
								<li>Researching Astronomy &amp; Physics</li>
								<li>Basketball</li>
								<li>Guitar</li>
							</ul>
						</div>
					</div>
				</div>
				<div
					class="col-6 col-sm-6 col-md-6 col-lg-3 aos-init aos-animate"
					data-aos="fade-up"
					data-aos-delay="100"
				>
					<div class=" media-entry media-entry-original media-size0">
						<a
							href="https://www.linkedin.com/in/avaneesh-mallela-52725b20a/"
							target="0"
							style={{ backgroundColor: "transparent" }}
							class="text-center"
						>
							<img
								src="images/team/hasan.jpeg"
								alt="hasan Palanpurwala"
								class="img-fluid"
							/>
						</a>
						<div class="bg-white m-body">
							<h5 style={{ textAlign: "center" }}>
								Hassan Palanpurwala
							</h5>

							<p>
								Hassan Palanpurwala is currently a rising senior
								in South Florida. Hassans urbane attitude,
								passion for helping others, and organization
								allowed him to fit in at Silverline Tutoring.
								Hassan’s passion for helping others came at a
								young age when he struggled with speaking
								English at school. Hassans first language was
								Gujarati, and when he started school he didn't
								know how to communicate with others. However,
								with the help of his parents and others around
								him, he was left feeling fulfilled and confident
								in school and wanted to help others feel this
								way. Hassan became very active in his community
								by starting book drives, helping tutor kids, and
								working with local schools to bring speech and
								debate to schools with less resources. These
								goals and passions led him to Silverline
								Tutoring. After applying for a tutoring position
								at Silverline, Hassan was given the opportunity
								to become the Chief Marketing Officer, and
								eventually the Chief Innovation Officer, before
								sitting on the board of directors for Silverline
								Tutoring. His experience in DECA, a business
								club at his school, helped him gain this
								position at Silverline. Aside from placing first
								at DECA states and qualifying for
								internationals, Hassans passion for debate and
								public speaking, qualifying for nationals, and
								placing at multiple national tournaments also
								helped him climb the ranks at Silverline to
								become a Board of Director. Hassans position at
								his local mosque where he helps plan and
								organize events, as well as manage finances,
								also helps him perform his job effectively and
								efficiently at Silverline.{" "}
							</p>
							<p>
								Education: <br />
								<br />{" "}
								<span style={{ color: "#AFA99E" }}>
									West Broward High School ‘23
								</span>
							</p>
						</div>
					</div>
				</div> */}
				</div>
			</div>
		</>
		// <div class="container">
		// 	<div class="row">
		// 		<div class="col-lg-1"></div>
		// 		<div class="col-lg-4 col-xlg-3 col-md-5"></div>
		// 		<TeamCard />
		// 	</div>{" "}
		// </div>
		// <div className="responsive min-h-screen d-flex flex-column align-items-center justify-content-center bg-dark py-2">
		// 	<NavBar pageName="team" />
		// 	<section className="relative">
		// 		<div className="md:mx-auto max-w-8xl bg-scroll px-4 sm:px-6">
		// 			<div className="mx-auto px-4 sm:px-6">
		// 				<div className="pt-32 pb-12 md:pt-40 md:pb-20">
		// 					<div className="pb-12 text-center md:pb-16">
		// 						<h1
		// 							className="mb-4 display-2 fw-bold text-white md:display-3"
		// 							data-aos="zoom-y-out"
		// 						>
		// 							<span className="text-secondary">
		// 								The executives
		// 							</span>
		// 						</h1>
		// 					</div>
		// 					<div className="p-4 rounded-lg  bg-[#3D4469] border border-light shadow-md  grid grid-cols-2">
		// 						{executives.map((member, index) => {
		// 							return (
		// 								<div key={index} className="">
		// 									<img
		// 										className="rounded-circle"
		// 										width="160px"
		// 										height="160px"
		// 										src={member.img}
		// 										alt="based"
		// 									/>

		// 									<div className="p-5">
		// 										<h5
		// 											className="mb-2 display-4 fw-bold text-white"
		// 											style={{ color: "#D6D3CD" }}
		// 										>
		// 											{member.name}{" "}
		// 											{member.position}
		// 										</h5>

		// 										<p
		// 											className="mb-3 font-weight-normal text-white-50"
		// 											style={{ color: "#D6D3CD" }}
		// 										>
		// 											{member.msg}
		// 										</p>
		// 									</div>
		// 								</div>
		// 							);
		// 						})}
		// 					</div>
		// 					<div className="pb-12 text-center md:pb-16">
		// 						<h1
		// 							className="mb-4 display-2 fw-bold text-white md:display-3"
		// 							data-aos="zoom-y-out"
		// 						>
		// 							<span className="text-secondary">
		// 								The Board
		// 							</span>
		// 						</h1>
		// 					</div>
		// 					<div className="p-4 rounded-lg bg-[#3D4469] border border-light shadow-md  grid grid-cols-2">
		// 						{board.map((member, index) => {
		// 							return (
		// 								<div key={index} className="">
		// 									<img
		// 										className="rounded-circle"
		// 										width="160px"
		// 										height="160px"
		// 										src={member.img}
		// 										alt="based"
		// 									/>

		// 									<div className="p-5">
		// 										<h5
		// 											className="mb-2 display-4 fw-bold text-white"
		// 											style={{ color: "#D6D3CD" }}
		// 										>
		// 											{member.name}{" "}
		// 											{member.position}
		// 										</h5>

		// 										<p
		// 											className="mb-3 font-weight-normal text-white-50"
		// 											style={{ color: "#D6D3CD" }}
		// 										>
		// 											{member.msg}
		// 										</p>
		// 									</div>
		// 								</div>
		// 							);
		// 						})}
		// 					</div>
		// 					<div className="pb-12 text-center md:pb-16">
		// 						<h1
		// 							className="mb-4 display-2 fw-bold text-white md:display-3"
		// 							data-aos="zoom-y-out"
		// 						>
		// 							<span className="text-secondary">
		// 								The Logistics Team
		// 							</span>
		// 						</h1>
		// 					</div>
		// 					<div className="p-4 rounded-lg bg-[#3D4469] border border-light shadow-md  grid grid-cols-2">
		// 						{logistics.map((member, index) => {
		// 							return (
		// 								<div key={index} className="">
		// 									<img
		// 										className="rounded-circle"
		// 										width="160px"
		// 										height="160px"
		// 										src={member.img}
		// 										alt="based"
		// 									/>

		// 									<div className="p-5">
		// 										<h5
		// 											className="mb-2 display-4 fw-bold text-white"
		// 											style={{ color: "#D6D3CD" }}
		// 										>
		// 											{member.name}{" "}
		// 											{member.position}
		// 										</h5>

		// 										<p
		// 											className="mb-3 font-weight-normal text-white-50"
		// 											style={{ color: "#D6D3CD" }}
		// 										>
		// 											{member.msg}
		// 										</p>
		// 									</div>
		// 								</div>
		// 							);
		// 						})}
		// 					</div>
		// 					<div className="pb-12 text-center md:pb-16">
		// 						<h1
		// 							className="mb-4 display-2 fw-bold text-white md:display-3"
		// 							data-aos="zoom-y-out"
		// 						>
		// 							<span className="text-secondary">
		// 								The Tutors
		// 							</span>
		// 						</h1>
		// 					</div>
		// 					<div className="p-4 rounded-lg bg-[#3D4469] border border-light shadow-md  grid grid-cols-2">
		// 						{tutors.map((member, index) => {
		// 							return (
		// 								<div key={index} className="">
		// 									<img
		// 										className="rounded-circle"
		// 										width="160px"
		// 										height="160px"
		// 										src={member.img}
		// 										alt="based"
		// 									/>

		// 									<div className="p-5">
		// 										<h5
		// 											className="mb-2 display-4 fw-bold text-white"
		// 											style={{ color: "#D6D3CD" }}
		// 										>
		// 											{member.name}{" "}
		// 											{member.position}
		// 										</h5>

		// 										<p
		// 											className="mb-3 font-weight-normal text-white-50"
		// 											style={{ color: "#D6D3CD" }}
		// 										>
		// 											{member.msg}
		// 										</p>
		// 									</div>
		// 								</div>
		// 							);
		// 						})}
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</section>
		// </div>
	);
}

export default Team;
