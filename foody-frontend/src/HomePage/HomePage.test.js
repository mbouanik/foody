import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage.js";
import MemoryRouter from "react-router-dom";
import UserContext from "../UserContext";
import { useAuth0 } from "@auth0/auth0-react";
import { UserProvider } from "../testUtils.js";
jest.mock("@auth0/auth0-react");

describe("HomePage test ", () => {
  beforeEach(() => {
    useAuth0.mockReturnValue({
      loginWithRedirect: jest.fn(),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("not break", () => {
    render(
      <UserProvider>
        <HomePage />
      </UserProvider>,
    );
    const welcomeMessage = screen.getByText("Welcome to Foody");
    expect(welcomeMessage).toBeInTheDocument();
  });
});
