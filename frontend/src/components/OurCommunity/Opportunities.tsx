import React from "react";

const Opportunities = () => {
  const bodyStyle = {
    fontSize: "1.1rem",
    fontWeight: "bold",
    color: "#D6D3CD",
  };
  const titleStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#918CA1",
  };
  return (
    <div style={{ backgroundColor: "#1E2022", padding: "7rem" }}>
      <div className="container">
        <h1 style={titleStyle} data-aos="fade-up">Opportunities</h1>
        <h2 className="heading mb-3" data-aos="fade-up" data-aos-delay="100"></h2>
        <p className="my-0" style={bodyStyle} data-aos="fade-up" data-aos-delay="200">
          As high schoolers, we acknowledge the difficulty in finding
          opportunities such as internships or research positions. In
          our community, we have an “Opportunities” hub that allows
          students to find positions in these areas. Whenever a new
          opportunity is posted, students who have signed up to
          receive notifications will be notified of the posting. In
          this sense, Silverline is a diverse organization that
          provides for students beyond just tutoring. Students receive
          tutoring, but even more, students also have the chance to
          improve their college applications or resumes, making
          Silverline the all-in-one community for students.
        </p>
      </div>
    </div>
  );
};

export default Opportunities;
