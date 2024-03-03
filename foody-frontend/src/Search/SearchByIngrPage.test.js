import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { UserProvider } from "../testUtils.js";
import SearchByIngrPage from "./SearchByIngrPage.js";
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

  test("When the app starts it renders a Search By Ingredients Page", () => {
    const { getByTestId, queryByText, debug } = render(
      <MemoryRouter>
        <UserProvider>
          <SearchByIngrPage />
        </UserProvider>
      </MemoryRouter>,
    );
    const btn = queryByText("Submit");
    const searchbar = getByTestId("items");
    fireEvent.change(searchbar, {
      target: { value: "avocado, potato, goat cheesse, eggs" },
    });
    fireEvent.click(btn);
    const addBtn = queryByText("Add");

    waitFor(() => expect(addBtn.toBeInTheDocument()));
  });
});
