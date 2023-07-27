import React from "react";
import aboutImg from "../images/Home/about_1.webp";

const AboutSection = () => {
  return (
    <div className="section section-2">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <span className="subheading" data-aos="fade-up">
              About Us
            </span>
            <h2
              className="heading mb-3"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Support Our Cause
            </h2>

            <p data-aos="fade-up" data-aos-delay="200">
              Silverline Tutoring is an educational 501(c)(3) nonprofit
              connecting tutors and students within our organization of over
              5000 dedicated members. Founded by college and high school
              students, this company recognizes the difficulty of learning—we’ve
              all been there.
            </p>
            <p data-aos="fade-up" data-aos-delay="200">
              From the depths of math to complex texts in English, every student
              has struggled. We want to bridge this divide in education by
              providing free tutoring to any student.
            </p>
            <p className="my-6" data-aos="fade-up" data-aos-delay="300">
              <a href="about.html" className="btn btn-primary">
                Read more
              </a>
            </p>
          </div>
          <div className="col-lg-6 pt-4 px-4">
            <div className="row">
              <div
                className="col-12 col-lg-12"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <img
                  src={aboutImg}
                  alt="A tutoring session between a college student from Carnegie Mellon Univeristy and a highschooler"
                  className="gen-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
