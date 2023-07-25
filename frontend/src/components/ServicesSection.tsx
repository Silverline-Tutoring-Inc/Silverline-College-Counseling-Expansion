const ServicesSection = () => {
	return (
		<div className="section section-3" style={{ background: "#1E2022" }}>
			<div className="container">
				<div className="row align-items-center justify-content-between  mb-5">
					<div className="col-lg-6" data-aos="fade-up">
						<span className="subheading">Services</span>
						<h2 className="heading mb-3">
							A Plethora of Resources
						</h2>
						<p>
							We understand that different students have different
							needs per subject. Therefore, we have a team of
							dedicated tutors ready to aid the student regardless
							of their needs.
						</p>
					</div>
					<div
						className="col-lg-5 text-md-end"
						data-aos="fade-up"
						data-aos-delay="100"
					>
						<div
							id="destination-controls"
							className="text-center pt-4"
						>
							<span className="prev me-3" data-controls="prev">
								<svg
									width="48"
									height="32"
									viewBox="0 0 48 32"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M47.5 16L3.5 16"
										stroke="#5271FF"
										strokeWidth="2"
									/>
									<path
										d="M17.25 1.11246L2 16L17.25 30.8875"
										stroke="#5271FF"
										strokeWidth="2"
									/>
								</svg>
							</span>
							<span className="next" data-controls="next">
								<svg
									width="64"
									height="36"
									viewBox="0 0 64 36"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<line
										x1="-8.74228e-08"
										y1="18"
										x2="61"
										y2="18"
										stroke="#5271FF"
										strokeWidth="2"
									/>
									<path
										d="M45.25 34.8875L62.5 18L45.25 1.1125"
										stroke="#5271FF"
										strokeWidth="2"
									/>
								</svg>
							</span>
						</div>
					</div>
				</div>
				<div className="row text-center">
					<div
						className="col-lg-12"
						data-aos="fade-up"
						data-aos-delay="200"
					>
						<div className="destination-slider-wrap">
							<div className="destination-slider">
								<div className="destination">
									<div className="thumb">
										<img
											src={require("../images/Home/eng.webp")}
											alt="icon for Versatile"
											className="img-fluid"
										/>
									</div>
									<div className="mt-4">
										<h3>Versatile Tutoring</h3>
										<span className="meta">
											We have 40+ tutors readily available
											to help any student in any subject
											from English to calculus.
										</span>
									</div>
								</div>
								<div className="destination">
									<div className="thumb">
										<img
											src={require("../images/Home/flexibile.webp")}
											alt="icon for flexible tutoring"
											className="img-fluid"
										/>
									</div>
									<div className="mt-4">
										<h3>Flexibility</h3>
										<span className="meta">
											Our tutors can adjust their meeting
											times and teaching styles per each
											student to maximize the student's
											benefit.
										</span>
									</div>
								</div>
								<div className="destination">
									<div className="thumb">
										<img
											src={require("../images/Home/community.webp")}
											alt="icon for community"
											className="img-fluid"
										/>
									</div>
									<div className="mt-4">
										<h3>Community</h3>
										<span className="meta">
											We have a vast community with
											helpful members and events such as
											trivia night, allowing each student
											to learn in a helpful environment.
										</span>
									</div>
								</div>
								<div className="destination">
									<div className="thumb">
										<img
											src={require("../images/Home/quality.webp")}
											alt="icon for lessons"
											className="img-fluid"
										/>
									</div>
									<div className="mt-4">
										<h3>Quality Lessons</h3>
										<span className="meta">
											Each tutor is carefully interviewed
											or certified prior to teaching,
											allowing for quality lesson plans
											for students.
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<br />
					<br />
					<p className="my-5" data-aos="fade-up" data-aos-delay="300">
						<a
							href="services.html"
							className="btn btn-primary text-lg-center"
						>
							View all services
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default ServicesSection;
