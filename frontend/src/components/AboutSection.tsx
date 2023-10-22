import React from "react";
import aboutImg from "../images/Home/about_1.webp";

interface About {
  img: string;
  alt: string;
}

const about: Array<About> = [
  {
    img: aboutImg,
    alt: "icon for about section"
  }
]

const AboutSection: React.FC = () => {
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
            Silverline Educational Advisory is a 501(c)(3) nonprofit connecting high school students with enriching resources to amplify their extracurricular performance. Founded by college and high school students, this company recognizes the difficulty of navigating high school and helps connect them within our community of over 5000 members worldwide.
            </p>
            <p data-aos="fade-up" data-aos-delay="200">
            From the difficulties of finding extracurriculars, to the difficulties of succeeding in them, every student has struggled. We want to provide students with the ability to break past these barriers within extracurricular and educational performance.
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
                  src={about[0].img}
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
