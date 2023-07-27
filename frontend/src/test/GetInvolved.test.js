import React from "react";
import { render } from "@testing-library/react";
import GetInvolved from "../components/GetInvolved";

describe("Get Involved Component", () => {
  test("renders component without error", () => render(<GetInvolved />));

  test("displays banner image", () => {
    const { getByAltText } = render(<GetInvolved />);
    const image = getByAltText("Get Involved Banner");
    expect(image).toBeInTheDocument();
  });

  test("displays correct intro headers", () => {
    const { getByText } = render(<GetInvolved />);
    const headers = ["Get Involved Today", "Student Signup", "Tutoring Signup"];
    headers.forEach((h) => {
      const header = getByText(h);
      expect(header).toBeInTheDocument();
    });
  });
});
