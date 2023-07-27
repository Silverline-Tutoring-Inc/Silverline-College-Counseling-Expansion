import React from "react";
import SpecialtyBox from "./SpecialtyBox";

export default function SilverlineSpecialties() {
  const containerStyle = {
    color: "#D6D3CD",
    position: "relative",
    fontFamily: "DM Sans, sans-serif",
  };

  const titleStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
  };

  const bodyStyle = {
    fontSize: "1.1rem",
    fontWeight: "bold",
  };

  return (
    <div className="container" style={containerStyle}>
      <h1 className="pt-3" style={titleStyle}>
        Silverline Specialities
      </h1>
      <br></br>
      <p style={bodyStyle}>
        Several organizations provide similar services, so why us? Silverline
        Tutoring is an exceptional option because of our diversity of topics as
        well as highly-rated tutors. Perhaps most importantly, our free tutoring
        comes with no tradeoff in quality. We serve as an all-in-one stop for
        educational needs. Our use of online platforms provides flexibility that
        cannot be matched, especially at the quality of service we provide.
      </p>
      <br></br>
      <br></br>

      <SpecialtyBox
        color={"#FF5722"}
        title={"Math"}
        desc={
          "Silverline Tutoring students have the chance to learn several fundamental math concepts. Usually, depending on the student's needs, we can teach any math level from elementary school math all the way up to college level math. Our diversity among tutors allows us to offer coverage in areas such as linear algebra and applied calculus."
        }
      />
      <br />
      <SpecialtyBox
        color={"#2196F3"}
        title={"Science"}
        desc={
          "From biology to AP physics to chemistry, Silverline Tutoring has several tutors specializing in science. We give students an in-depth understanding of any topics presented. Our science department has no limits with some of our tutors actively studying physics in universities such as Carnegie Mellon."
        }
      />
      <br />
      <SpecialtyBox
        color={"#4CAF50"}
        title={"English"}
        desc={
          "We cover English from middle school levels to AP Language and Composition and AP Literature. Typically, tutors in the English area are aimed more at writing lessons or essay work. Additionally, help in preparing for AP exams is another commonality; however, students have the ability to adjust their lessons as needed."
        }
      />
      <br />
      <SpecialtyBox
        color={"#025E51"}
        title={"History"}
        desc={
          "Students have the opportunity to learn a variety of historical topics. We offer tutoring for AP history exams, such as the AP EURO and APUSH exam, along with tutoring middle-school level history. Resources are important when learning history, and our history division is equipped with the necessary and correct resources for students such as AMSCO."
        }
      />
      <br />
      <SpecialtyBox
        color={"#04C7AB"}
        title={"Languages"}
        desc={
          "Our diversity in our foreign language department allows Silverline to better provide for students. We currently offer tutoring in Spanish, French, Mandarin, and Hindi, and we are adding new languages every day. Our tutors can help students with reading, writing, and speaking. Tutors are provided with various resources that can assist students whether they are studying for a class or they are learning the language as a hobby."
        }
      />
      <br />
      <SpecialtyBox
        color={"#A664C4"}
        title={"Coding"}
        desc={
          "Students have the opportunity to learn a plethora of languages from front-end to back-end, depending on the tutor. Typically, we will specialize in the topic given by the student, but if they desire to learn from scratch, we will start from Python and progress to Java, and later to real-life applications."
        }
      />
      <br />
      <SpecialtyBox
        color={"#C46C64"}
        title={"Econ"}
        desc={
          "Students have the opportunity to learn microeconomics, macroeconomics, or finance. We offer on-on-one tutoring, and tutors provide various free resources as well that will aid the student in economics. They can also assist students in preparing for various business competitions like DECA. Silverline looks to host various community-wide activities centered around economics, such as a free online stock market simulator competition."
        }
      />
      <br />
      <SpecialtyBox
        color={"#B3B3B3"}
        title={"Chess"}
        desc={
          "This area of tutoring is one of the most popular here at Silverline. Students learn about different strategies and various chess theories. Our community often hosts different chess tournaments as well as daily chess puzzles, so students have the opportunity to test their new skills."
        }
      />
      <br />
      <SpecialtyBox
        color={"#C25DA5"}
        title={"SAT"}
        desc={
          "From the specific sections of the SAT to tips and tricks on how to do well on test day, Silverline tutoring students learn a variety of skills to help them increase their score on the SAT. These lessons typically take place over the course of a 5-week period."
        }
      />
      <br />
      <SpecialtyBox
        color={"#AD2628"}
        title={"ACT"}
        desc={
          "Our ACT program at Silverline runs parallel to the SAT program with focus on the differences in the ACT such as the science section. Student’s can perform practice tests and review incorrect or tricky problems with their dedicated tutor."
        }
      />
      <br />
    </div>
  );
}
