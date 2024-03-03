import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { UserProvider } from "../testUtils.js";
import ExerciseCard from "./ExerciseCard.js";

jest.mock("@auth0/auth0-react");

describe("The Application Component in logged in state", () => {
  beforeEach(() => {
    const user = {
      email: "johndoe@me.com",
      email_verified: true,
      sub: "google-oauth2|12345678901234",
    };

    useAuth0.mockReturnValue({
      isAuthenticated: true,
      user,
      logout: jest.fn(),
      loginWithRedirect: jest.fn(),
      getAccessTokenWithPopup: jest.fn(),
      getAccessTokenSilently: jest.fn(),
      getIdTokenClaims: jest.fn(),
      loginWithPopup: jest.fn(),
      isLoading: false,
      token: true,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("When the app starts it renders a exercise card", () => {
    const exercise = {
      nf_calories: 340,
      name: "row 20 min",
      met: "3",
      duration_min: 20,
    };
    render(
      <MemoryRouter>
        <UserProvider>
          <ExerciseCard exercise={exercise} />
        </UserProvider>
      </MemoryRouter>,
    );
    const element = screen.getByText("row 20 min");
    expect(element).toBeInTheDocument();
  });
});
