import React from "react";
import { render } from "@testing-library/react";
import Loading from "./Loading";

describe("Not Log in test ", () => {
  test(" does not break", () => {
    render(<Loading />);
  });
});
