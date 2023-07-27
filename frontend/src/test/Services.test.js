import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Services from "../components/Services";

describe("Services component", () => {
  test("renders component without errors", () => {
    render(<Services />);
  });

  test("displays the correct heading", () => {
    const { getByText } = render(<Services />);
    const headingElement = getByText("Our Services");
    expect(headingElement).toBeInTheDocument();
  });

  test("displays the correct image", () => {
    const { getByAltText } = render(<Services />);
    const imageElement = getByAltText("Tutoring Services");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.src).toBe(
      "https://silverlinetutoring.org/wp-content/uploads/2022/01/tutoring-services.jpg",
    );
  });

  test("displays the correct list of services", () => {
    const { getByText } = render(<Services />);
    const servicesListElement = getByText("Our services include:");
    expect(servicesListElement).toBeInTheDocument();

    const services = [
      "One-on-one tutoring sessions tailored to your child's needs",
      "Group tutoring for collaborative learning",
      "Test preparation for standardized exams",
      "Subject-specific tutoring in math, science, English, and more",
      "College application and essay guidance",
      "Study skills development",
      "Homework help and academic support",
      "Summer programs and academic camps",
    ];

    services.forEach((service) => {
      const listItemElement = getByText(service);
      expect(listItemElement).toBeInTheDocument();
    });
  });

  test("displays the contact information", () => {
    const { getByText } = render(<Services />);
    const contactElement = getByText(
      "Contact us today to learn more about our services and how we can help your child achieve their academic goals.",
    );
    expect(contactElement).toBeInTheDocument();
  });
});
