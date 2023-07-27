import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

test("renders the navigation menu", () => {
  const { getByText } = render(<App />);

  const homeLink = getByText("Home");
  const aboutLink = getByText("About Us ▾");
  const servicesLink = getByText("Services");
  const contactLink = getByText("Contact Us");

  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(servicesLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
});

test("renders the testimonials section", () => {
  const { getByText } = render(<App />);

  const testimonialsTitle = getByText("Testimonials");
  const testimonial1 = getByText("Rithvik");
  const testimonial2 = getByText("Shanti");
  const testimonial3 = getByText("Li Jian");
  const testimonial4 = getByText("Rithin");

  expect(testimonialsTitle).toBeInTheDocument();
  expect(testimonial1).toBeInTheDocument();
  expect(testimonial2).toBeInTheDocument();
  expect(testimonial3).toBeInTheDocument();
  expect(testimonial4).toBeInTheDocument();
});
