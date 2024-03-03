import React from "react";
import { render } from "@testing-library/react";
import LoginButton from "./LoginButton";

describe("Not Log in test ", () => {
  test(" does not break", () => {
    render(<LoginButton />);
  });
});
