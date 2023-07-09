import React from "react";
import NavBar from "./NavBar";

const Services = () => {
  return (
    <div>
      <NavBar pageName="services" />
      <div className="hero hero2" style={{ backgroundImage: "url(about.png)" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 mx-auto text-center">
              <h1 className="heading mb-5" data-aos="fade-up">
                Our Services
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <h1 data-aos="fade-up">Silverline Tutoring Services</h1>

              <p data-aos="fade-up" data-aos-delay="100">
                At Silverline Tutoring, we offer a wide range of educational services to help students excel in their academic journey. Whether your child needs assistance with homework, test preparation, or enrichment programs, our experienced tutors are here to help.
              </p>

              <h2 className="heading mb-3" data-aos="fade-up" data-aos-delay="200">
                Our Services Include:
              </h2>

              <ul data-aos="fade-up" data-aos-delay="300">
                <li>One-on-one tutoring sessions tailored to your child's needs</li>
                <li>Group tutoring for collaborative learning</li>
                <li>Test preparation for standardized exams</li>
                <li>Subject-specific tutoring in math, science, English, and more</li>
                <li>College application and essay guidance</li>
                <li>Study skills development</li>
                <li>Homework help and academic support</li>
                <li>Summer programs and academic camps</li>
              </ul>

              <p data-aos="fade-up" data-aos-delay="400">
                We believe in personalized attention and a nurturing environment to ensure your child's success. Our tutors are highly qualified and dedicated professionals who are passionate about education. We strive to create a positive and engaging learning experience for every student.
              </p>

              <p data-aos="fade-up" data-aos-delay="500">
                Contact us today to learn more about our services and how we can help your child achieve their academic goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
