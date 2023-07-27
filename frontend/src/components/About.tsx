import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

interface HeadingStyle {
  color: string;
  fontFamily: string;
  fontWeight: string;
}

const About: React.FC = () => {
  const headingStyle: HeadingStyle = {
    color: "#918CA1",
    fontFamily: "Work Sans, sans-serif",
    fontWeight: "800",
  };

  return (
    <>
      <NavBar pageName="about" />

      <div className="hero hero2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 mx-auto text-center">
              <h1 className="heading mb-5" data-aos="fade-up">
                Who We Are.
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="section overlay">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <h1 style={headingStyle} data-aos="fade-up">
                About Silverline
              </h1>
              <h2
                className="heading mb-3"
                data-aos="fade-up"
                data-aos-delay="100"
              ></h2>

              <p data-aos="fade-up" data-aos-delay="200">
                Silverline Tutoring is an educational 501(c)(3) nonprofit
                connecting tutors and students within our organization of over
                5000 dedicated members. Founded by college and high school
                students, this company recognizes the difficulty of
              </p>
              <h1 styles={{ headingStyle }} data-aos="fade-up">
                About Silverline
              </h1>
              <h2
                className="heading mb-3"
                data-aos="fade-up"
                data-aos-delay="100"
              ></h2>

              <p data-aos="fade-up" data-aos-delay="200">
                Silverline Tutoring is an educational 501(c)(3) nonprofit
                connecting tutors and students within our organization of over
                5000 dedicated members. Founded by college and high school
                students, this company recognizes the difficulty of
                learning—we’ve all been there.
              </p>

              <p data-aos="fade-up" data-aos-delay="300">
                From the depths of math to complex texts in English, every
                student has struggled at one point or another. We want to bridge
                this divide in education by providing free tutoring to any
                student. But how do we accomplish this difficult task?
              </p>

              <p data-aos="fade-up" data-aos-delay="400">
                Silverline creates a free and flexible tutoring service by
                finding the experts in our community and assigning them to
                students in need. For instance, if someone has 2+ years of
                experience in chemistry, they would apply to become a tutor and
                earn community service hours in exchange for their work. This
                framework allows us to serve as many students as possible at the
                cost of nothing while still maintaining quality. From the depths
                of math to complex texts in English, every student has struggled
                at one point or another. We want to bridge this divide in
                education by providing free tutoring to any student. But how do
                we accomplish this difficult task?
              </p>

              <p data-aos="fade-up" data-aos-delay="400">
                Silverline creates a free and flexible tutoring service by
                finding the experts in our community and assigning them to
                students in need. For instance, if someone has 2+ years of
                experience in chemistry, they would apply to become a tutor and
                earn community service hours in exchange for their work. This
                framework allows us to serve as many students as possible at the
                cost of nothing while still maintaining quality.{" "}
              </p>
            </div>
            <div className="col-lg-1"></div>
          </div>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-1"></div>
            <div className="col-lg-12">
              <h1 style={headingStyle} data-aos="fade-up">
                Our Goals
              </h1>
              <h2
                className="heading mb-3"
                data-aos="fade-up"
                data-aos-delay="100"
              ></h2>

              <p data-aos="fade-up" data-aos-delay="200">
                At Silverline, we want to solve the education divide, one
                student at a time, by making learning enjoyable and stress-free
                for all. Therefore, we never hold students accountable to a
                strict schedule and always work based on the student needs,
                allowing them to benefit the most. Our tutors are vetted in
                advance to ensure that they are student-friendly and adaptable.
                Monthly trivia contests and other games are also held to promote
                a fun learning environment. We want to set our students up for
                success while building a strong community that facilitates
                opportunities for everyone involved. Because of this foundation,
                our community now serves up to 5000 members.
              </p>

              <h1 styles={headingStyle} data-aos="fade-up">
                Our Goals
              </h1>
              <h2
                className="heading mb-3"
                data-aos="fade-up"
                data-aos-delay="100"
              ></h2>

              <p data-aos="fade-up" data-aos-delay="200">
                At Silverline, we want to solve the education divide, one
                student at a time, by making learning enjoyable and stress-free
                for all. Therefore, we never hold students accountable to a
                strict schedule and always work based on the student needs,
                allowing them to benefit the most. Our tutors are vetted in
                advance to ensure that they are student-friendly and adaptable.
                Monthly trivia contests and other games are also held to promote
                a fun learning environment. We want to set our students up for
                success while building a strong community that facilitates
                opportunities for everyone involved. Because of this foundation,
                our community now serves up to 5000 members.
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-1"></div>
            <div className="col-lg-12">
              <h1 style={headingStyle} data-aos="fade-up">
                Our Target Group
              </h1>
              <h2
                className="heading mb-3"
                data-aos="fade-up"
                data-aos-delay="100"
              ></h2>

              <p data-aos="fade-up" data-aos-delay="200">
                Silverline is primarily for students in high school. However,
                our reach extends beyond simply highschoolers. We also offer
                services to elementary and middle schoolers and college-level
                students, depending on the course. Our diverse group of tutors
                allows us to serve a greater population of people.{" "}
              </p>

              <p data-aos="fade-up" data-aos-delay="300">
                Additionally, aside from students, adults and any other age
                group are also welcome if they are looking for a refresher in a
                past course or simply looking to learn something new.
              </p>

              <p data-aos="fade-up" data-aos-delay="400">
                In terms of tutors, Silverline accepts anyone from the sophomore
                year of high school and above. In the past, we have had school
                teachers helping in our system, meaning that even adults are
                more than welcome to join our community. Therefore, regardless
                of age or education, Silverline is an open outlet for all groups
                whether it be in the form of being a student or a teacher.
              </p>
              <h1 styles={headingStyle} data-aos="fade-up">
                Our Target Group
              </h1>
              <h2
                className="heading mb-3"
                data-aos="fade-up"
                data-aos-delay="100"
              ></h2>

              <p data-aos="fade-up" data-aos-delay="200">
                Silverline is primarily for students in high school. However,
                our reach extends beyond simply highschoolers. We also offer
                services to elementary and middle schoolers and college-level
                students, depending on the course. Our diverse group of tutors
                allows us to serve a greater population of people.{" "}
              </p>

              <p data-aos="fade-up" data-aos-delay="300">
                Additionally, aside from students, adults and any other age
                group are also welcome if they are looking for a refresher in a
                past course or simply looking to learn something new.
              </p>

              <p data-aos="fade-up" data-aos-delay="400">
                In terms of tutors, Silverline accepts anyone from sophomore
                year of highschool and above. In the past, we have had school
                teachers helping in our system, meaning that even adults are
                more than welcome to join our community. Therefore, regardless
                of age or education, Silverline is an open outlet for all groups
                whether it be in the form of being a student or a teacher.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
