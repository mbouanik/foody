import React from "react";
import { render } from "@testing-library/react";
import HomePage from "./HomePage";
import MemoryRouter from "react-router-dom";

import { UserProvider } from "../testUtils";
describe("HomePage test ", () => {
  test("not break", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <UserProvider>
          <HomePage />
        </UserProvider>
      </MemoryRouter>,
    );
  });
});
