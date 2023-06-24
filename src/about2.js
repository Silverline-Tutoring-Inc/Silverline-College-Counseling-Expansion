import React from "react";
import Footer from "./components/Footer";

class About extends React.Component {
  render() {
    return (
      <div className="bg-dark py-2">
        <section className="relative">
          <div className="container">
            <div className="py-5 py-md-5">
              <div className="pb-5 text-center pb-md-5">
                <h1 className="mb-4 text-white font-weight-bold display-4">
                  <span className="text-warning">About Us</span>
                </h1>
              </div>
              <div className="row">
                <div className="col-md-6 order-md-1">
                  <p className="lead text-white bg-dark p-4 rounded">
                    Silverline Tutoring is an educational 501(c)(3) nonprofit
                    connecting tutors and students within our organization of
                    over 5000 dedicated members. Founded by college and high
                    school students, this company recognizes the difficulty of
                    learning—we’ve all been there. From the depths of math to
                    complex texts in English, every student has struggled at one
                    point or another. We want to bridge this divide in education
                    by providing free tutoring to any student. But how do we
                    accomplish this difficult task? Silverline creates a free
                    and flexible tutoring service by finding the experts in our
                    community and assigning them to students in need. For
                    instance, if someone has 2+ years of experience in
                    chemistry, they would apply to become a tutor and earn
                    community service hours in exchange for their work. This
                    framework allows us to serve as many students as possible at
                    the cost of nothing while still maintaining quality.
                  </p>
                </div>
                <div className="col-md-6 order-md-2">
                  <img
                    src="/path/to/your/image1.jpg"
                    className="img-fluid rounded-lg shadow"
                    alt="placeholder"
                  />
                </div>
              </div>
              <h2 className="mb-4 text-white font-weight-bold display-5 text-center">
                More About Silverline
              </h2>
              <div className="row">
                <div className="col-md-6 order-md-2">
                  <div className="lead text-white bg-dark p-4 rounded">
                    Silverline is primarily for students in high school.
                    However, our reach extends beyond simply high schoolers. We
                    also offer services to elementary and middle schoolers and
                    college-level students, depending on the course. Our diverse
                    group of tutors allows us to serve a greater population of
                    people. Additionally, aside from students, adults and any
                    other age group are also welcome if they are looking for a
                    refresher in a past course or simply looking to learn
                    something new. In terms of tutors, Silverline accepts anyone
                    from sophomore year of high school and above. In the past,
                    we have had school teachers helping in our system, meaning
                    that even adults are more than welcome to join our
                    community. Therefore, regardless of age or education,
                    Silverline is an open outlet for all groups whether it be in
                    the form of being a student or a teacher.
                  </div>
                </div>
                <div className="col-md-6 order-md-1">
                  <img
                    src="/path/to/your/image2.jpg"
                    className="img-fluid rounded-lg shadow"
                    alt="placeholder"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default About;
