import React from "react";
import { render } from "@testing-library/react";
import NotLogin from "./NotLogin";

describe("Not Log in test ", () => {
  test(" does not break", () => {
    const { asFragment } = render(<NotLogin />);
  });
});
