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
              Silverline Educational Advisory Services is an educational 501(c)(3) nonprofit connecting high school students with enriching and inspiring resources to amplify their education and extracurricular performance within our organization of over 5000 dedicated members. Founded by college and high school students, this company recognizes the difficulty of navigating high school — we’ve all been there.
              </p>

              <p data-aos="fade-up" data-aos-delay="300">
              From the difficulties of finding extracurriculars, to the difficulties of succeeding in them, every student has struggled. We want to provide students with the ability to break past these barriers within extracurricular and educational performance.

              </p>

              <p data-aos="fade-up" data-aos-delay="400">
                Silverline creates a free and flexible tutoring service by
                finding the experts in our community and assigning them to
                students in need. For instance, if someone has 2+ years of
                experience in chemistry, they would apply to become a tutor and
                earn community service hours in exchange for their work. This
                framework allows us to serve as many students as possible at the
                cost of nothing while still maintaining quality.
              </p>

              <h1 style={headingStyle} data-aos="fade-up">
                Our Goals
              </h1>
              <h2
                className="heading mb-3"
                data-aos="fade-up"
                data-aos-delay="100"
              ></h2>

              <p data-aos="fade-up" data-aos-delay="200">
              At Silverline we are passionate about equal opportunity within education, extracurriculars, and admissions. We provide students with a variety of resources - ranging from robotics to Science Olympiad assistance - in order to amplify and enrich their experiences. We want to set our students up for success while building a strong community that facilitates opportunities for everyone involved.

              </p>

              <h1 style={headingStyle} data-aos="fade-up">
                Our Target Group
              </h1>
              <h2
                className="heading mb-3"
                data-aos="fade-up"
                data-aos-delay="100"
              ></h2>

              <p data-aos="fade-up" data-aos-delay="200">
              Didnt get text for this
              </p>

              <p data-aos="fade-up" data-aos-delay="300">
              Didnt get text for this
              </p>

              <p data-aos="fade-up" data-aos-delay="400">
              Didnt get text for this
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
