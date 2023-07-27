import React from "react";
import { Link } from "react-router-dom";

const tutors = [
  {
    title: "tutor 1",
    desc: "lorem ipsum dolor sit amet",
  },
  {
    title: "tutor 2",
    desc: "lorem ipsum dolor sit amet",
  },
  {
    title: "tutor 3",
    desc: "lorem ipsum dolor sit amet",
  },
];

export default function Tutors() {
  return (
    <>
      <div
        className="container-lg p-25 mx-auto"
        style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      >
        {/* { tutors.map(t => <TSCard {...t}/>) } */}
        <div
          className="container p-10"
          style={{
            width: "35%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <h2 style={{ color: "#5271FF" }}>Tutors</h2>
          <div
            className="container-lg"
            style={{ display: "flex", flexDirection: "column", gap: 10 }}
          >
            <TutorItem number="1" desc="Complete the application form" />
            <TutorItem
              number="2"
              desc="Interview with our Human Resources Department"
            />
            <TutorItem number="3" desc="Join the Silverline Community!" />
          </div>
        </div>
        <div
          className="container p-10"
          style={{
            width: "45%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <p
            className=""
            style={{ fontWeight: 600, fontSize: 18, color: "#ddd" }}
          >
            Shortly after receiving the information of an applicant, one of our
            executive board members will contact the applicant and conduct a
            short interview. More information about the interview can be found
            under{" "}
            <Link
              to="/get-involved"
              style={{ textDecoration: "none", color: "#5271FF" }}
            >
              Get Involved
            </Link>
            . After acceptance, the tutor will be brought into our Discord
            server—the main hub of our community—where they will be paired with
            a student. Then, one of our coordinators will confirm with the tutor
            which subject that particular student wishes to learn. The subject
            desired by a tutor will be indicated during the interview. From this
            point, the tutor will work with the student to decide hours and
            structure of tutoring. Each tutor is permitted to use their own
            format of teaching as long as long as our board approves of it.
            Tutors receive volunteer hours via a form on our server for their
            work. For the most part, tutors have flexible schedules as long as
            they check in with our board regularly and meet the necessities of
            the assigned student. This tutoring format has led Silverline to
            great success as we have the ability to scale the quantity of our
            tutors without compromising on our student’s needs.
          </p>
        </div>
      </div>
      <div style={{ height: 40 }} />
      <div
        className="container-lg p-25 mx-auto"
        style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      >
        {/* { tutors.map(t => <TSCard {...t}/>) } */}
        <div
          className="container p-10"
          style={{
            width: "35%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <h2 style={{ color: "#5271FF" }}>Students</h2>
          <div
            className="container-lg"
            style={{ display: "flex", flexDirection: "column", gap: 10 }}
          >
            <TutorItem number="1" desc="Complete the signup form" />
            <TutorItem number="2" desc="Join the Silverline Community" />
            <TutorItem number="3" desc="Begin tutoring once notified" />
          </div>
        </div>
        <div
          className="container p-10"
          style={{
            width: "45%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <p
            className=""
            style={{ fontWeight: 600, fontSize: 18, color: "#ddd" }}
          >
            For the most part, a student looking for tutoring simply needs to
            fill out the form under{" "}
            <Link
              to="/get-involved"
              style={{ textDecoration: "none", color: "#5271FF" }}
            >
              Get Involved
            </Link>
            . From there, they can join our Discord server where they will be
            notified of the tutor they are assigned to. Students also have great
            flexibility in tutoring, but we ask that all students communicate
            with their tutors 12 hours in advance to allow tutors to be ready
            and prepared for any given lesson. There is no fixed lesson plan for
            each student as it varies from tutor to tutor, but all plans under
            our system are verified and assured for a quality learning
            experience. We also have other features for immediate help and
            student resources that can be found under{" "}
            <Link
              to="/our-community"
              style={{ textDecoration: "none", color: "#5271FF" }}
            >
              Our Community
            </Link>
          </p>
        </div>
      </div>
      <div style={{ height: 40 }} />
    </>
  );
}

function TutorItem({ number, desc }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <span
        className="container"
        style={{
          width: 35,
          height: 35,
          borderRadius: "50%",
          backgroundColor: "#5271FF",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontWeight: "700",
        }}
      >
        {number}
      </span>
      <p style={{ color: "white", width: "80%", fontWeight: "600" }}>{desc}</p>
    </div>
  );
}

function TSCard({ title, desc }) {
  return (
    <div
      className="card p-4"
      style={{ width: "18rem", backgroundColor: "#444" }}
    >
      <h2 className="card-title" style={{ color: "white" }}>
        {title}
      </h2>
      <p className="card-text" style={{ color: "#999" }}>
        {desc}
      </p>
    </div>
  );
}
