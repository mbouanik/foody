import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { UserProvider } from "../testUtils.js";
import SearchByNutrientsPage from "./SearchByNutrientsPage.js";
jest.mock("@auth0/auth0-react");

describe("The Application Component in logged in state", () => {
  beforeEach(() => {
    const user = {
      email: "johndoe@me.com",
      email_verified: true,
      sub: "google-oauth2|12345678901234",
      name: "testUser",
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

  test("When the app starts it renders a Search By Nutrients Page", () => {
    const { getByTestId, queryByText, debug } = render(
      <MemoryRouter>
        <UserProvider>
          <SearchByNutrientsPage />
        </UserProvider>
      </MemoryRouter>,
    );
    const btn = queryByText("Search");
    const calories = getByTestId("calories");
    const carbs = getByTestId("carbs");
    const protein = getByTestId("protein");
    const fat = getByTestId("fat");
    fireEvent.change(calories, {
      target: { value: 300 },
    });
    fireEvent.change(carbs, {
      target: { value: 30 },
    });
    fireEvent.change(protein, {
      target: { value: 30 },
    });
    fireEvent.change(fat, {
      target: { value: 30 },
    });

    fireEvent.click(btn);
    const addBtn = queryByText("Add");

    waitFor(() => expect(addBtn.toBeInTheDocument()));
  });
});
