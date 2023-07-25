import React from "react";

const AboutOurCommunity = () => {
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
        <h1 style={titleStyle} data-aos="fade-up">About Our Community</h1>
        <h2 className="heading mb-3" data-aos="fade-up" data-aos-delay="100"></h2>
        <p style={bodyStyle} data-aos="fade-up" data-aos-delay="200">
          Silverline is filled with students eager to learn. Our communication networks promote healthy discourse between students, allowing for members to find others with similar interests. In this sense, students have the opportunity to connect on a higher level than simply tutoring. They can discuss sports, school, musical interests and any hobbies they have in mind. Additionally, our community is divided into specific categories of interest, such as a debate category that offers healthy discourse surrounding issues such as healthcare but also interesting, light-hearted topics such as movies vs books. Therefore, Silverline also instills a stronger sense of community between members that facilitates a stress-free and positive learning environment for all involved.
        </p>
        <p style={bodyStyle} data-aos="fade-up" data-aos-delay="300">
          Our community also hosts chess tournaments and trivia contests, presenting all members with ways to unwind and enjoy the community. We understand that learning can be stressful, so we provide a plethora of resources for students in our community to take a breather and relax. Many of these contests often have cash prizes, providing an incentive for all students.
        </p>
      </div>
    </div>
  );
};

export default AboutOurCommunity;
