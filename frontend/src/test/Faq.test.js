import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Faq from "../components/Faq";

describe("FAQ component", () => {
  test("renders frequently asked questions", () => {
    render(<Faq />);

    // Verify the presence  of the questions
    expect(
      screen.getByText("1. How do I signup for tutoring?"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("2. Where does tutoring happen?"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("3. Do I have to pay for tutoring?"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("4. How do I signup to be a tutor?"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("5. What is the experience of the tutors"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("6. Who runs Silverline Educational Advisory Services"),
    ).toBeInTheDocument();

    // Verify the presence of the answers
    const answerElements = screen.getAllByTestId("faq-answer");
    const answerTexts = answerElements.map((element) => element.textContent);

    expect(answerTexts).toContain(
      'Fill out the student form located under "get involved," and feel free to join our Discord server to learn more.',
    );
    expect(answerTexts).toContain(
      "Tutoring sessions take place online and can be conducted through zoom or other video conference platforms. If you are a member of our Discord server, the voice channel feature will often be used by our tutors.",
    );
    expect(answerTexts).toContain(
      "No! Silverline is a nonprofit dedicated to ensuring that students recieve tutoring for free. Tutors earn volunteer hours in exchange for their help. However, students can earn from our program as we often host trivia nights with a cash prize thanks to our sponsors.",
    );
    expect(answerTexts).toContain(
      'Fill out the tutor form located under "get involved," and we will reach out to you. Be prepared to answer questions during an interview as well as a short 5-10 minute lesson to demonstrate your skills in teaching. Afterwards, we will determine if you are suited to teach and the specific subjects.',
    );
    expect(answerTexts).toContain(
      "Most of our tutors are high school senior or college students. However, some of our tutors are teachers or former teachers. Regardless of the tutor, we guaruntee that all of our tutors are qualified.",
    );
    expect(answerTexts).toContain(
      "Silverline Educational Advisory Services is run by highschoolers and college students. Our full team can be found here.",
    );
  });
});
