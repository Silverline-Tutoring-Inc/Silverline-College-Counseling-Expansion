import React from "react";
// import banner from "../images/get-involved/banner.webp";
import NavBar from "./NavBar";
import "../assets/fonts.css";
import Footer from "./Footer";

const GetInvolved: React.FC = () => {
  return (
    <div>
      <NavBar pageName="getInvolved" />
      <h1>   \n\n</h1>
      {/* <div style={{ width: "100%", height: "800px" }}>
        <img
          src={banner}
          style={{
            width: "100%",
            objectFit: "cover",
            height: "100%",
          }}
          alt="Get Involved Banner"
        />
      </div> */}
      <div
        style={{
          backgroundColor: "#181A1B",
          width: "100%",
          padding: "80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            width: "50%",
          }}
        >
          <h1
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
            }}
          >

            
            Join Our Community! 
            <a
              href="add discord link here"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#7289DA", // Discord color
                color: "white",
                padding: "10px 20px",
                marginLeft: "50px",
                borderRadius: "50px",
                textDecoration: "none",
              }}
            >
              Discord
            </a>
          </h1>
          <br />
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
            }}
          >
Getting involved with Silverline has never been easier, click the button below to join our community. 
In our discord, you’ll meet students of all ages with similar interests. 
Alongside our employees, students help each other and discuss everything from extracurriculars to sports
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
            }}
          >
            Once a tutor has signed up, our human resources officer will reach
            out requesting either an interview or a resume. In the case of an
            interview, our human resources officer will ask a few basic
            questions and follow up by asking for the tutor to present a 15 - 20
            minute lesson on a subject they desire to teach in. The other option
            is to provide a resume, which will be reviewed by our executive
            team. Acceptance or deferral as a tutor will be provided shortly
            thereafter.
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
            }}
          >
            If a student desires to receive tutoring, they should fill out the
            second form on this page. Our human resources officer will be in
            contact with them after receiving their request. The student will be
            brought into the Discord community server and be paired with an
            appropriate tutor. This tutor serves as someone who can serve longer
            lessons or answer quick questions in the target subject.
          </p>
          <br />
          <br />
          <h1
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
            }}
          >
            Tutoring Signup
          </h1>
          <br />
          <iframe
            src="https://airtable.com/embed/shrBwCsLLhfOY4Y2X?backgroundColor=yellow"
            width="100%"
            height="2491"
            style={{
              background: "transparent",
              border: "1px solid #ccc",
            }}
            loading="lazy"
          ></iframe>
          <br />
          <br />
          <h1
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
            }}
          >
            Student Signup
          </h1>
          <br />
          <iframe
            className="airtable-embed airtable-dynamic-height"
            src="https://airtable.com/embed/shrMfa1HIUI0kZxO7?backgroundColor=green"
            width="100%"
            height="1688"
            style={{
              background: "transparent",
              border: "1px solid #ccc",
            }}
            loading="lazy"
          ></iframe>
          <br />
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
            }}
          >
            Feel free to email us at{" "}
            <a href="mailto:silverlinetutoring2021@gmail.com">
              silverlinetutoring2021@gmail.com
            </a>{" "}
            for further inquiries
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GetInvolved;
