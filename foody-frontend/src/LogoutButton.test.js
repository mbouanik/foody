import React from "react";
import { render } from "@testing-library/react";
import LogoutButton from "./LogoutButton";

describe("Not Log in test ", () => {
  test(" does not break", () => {
    render(<LogoutButton />);
  });
});
