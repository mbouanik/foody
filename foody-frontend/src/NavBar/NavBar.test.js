import NavBar from "./NavBar.js";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { UserProvider } from "../testUtils.js";

jest.mock("@auth0/auth0-react");

describe("NavBar test ", () => {
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
      <MemoryRouter>
        <UserProvider>
          <NavBar />
        </UserProvider>
      </MemoryRouter>,
    );
    const loginElement = screen.getByText("Log In/Sign Up");
    expect(loginElement).toBeInTheDocument();
  });

  test("It redirects the user to the Auth0 Universal Login page when the Log In button is pressed", async () => {
    const { loginWithRedirect } = useAuth0();
    const { getByText } = render(
      <MemoryRouter>
        <UserProvider>
          <NavBar />
        </UserProvider>
      </MemoryRouter>,
    );

    const loginElement = screen.getByText("Log In/Sign Up");
    // const btn = getByText("Log In/Sign Up");
    fireEvent.click(loginElement);

    // fireEvent.click(btn);

    // Expect that if we click the "Log In" button, the loginWithRedirect function gets called
    await waitFor(() => expect(loginWithRedirect).toHaveBeenCalledTimes(1));
    // const auth0login = screen.getByText("Log in to");
  });
});

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

  test("When the app starts it renders a log out button", () => {
    render(
      <MemoryRouter>
        <UserProvider>
          <NavBar />
        </UserProvider>
      </MemoryRouter>,
    );
    const logoutElement = screen.getByText("Log Out");
    expect(logoutElement).toBeInTheDocument();
  });
});
