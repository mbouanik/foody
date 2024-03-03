import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { UserProvider } from "../testUtils.js";
import RecipeCard from "./RecipeCard.js";
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
    const recipe = {
      image: null,
      id: 2344,
      summary: "This a wonderful dish form the ancient time of Greece",
      title: "bla bla bla",
      diets: ["paleo"],
      instrusctions: "start with ...",
      extendedIngredients: [],
    };
    render(
      <MemoryRouter>
        <UserProvider>
          <RecipeCard key={recipe.id} recipe={recipe} />
        </UserProvider>
      </MemoryRouter>,
    );
    const title = screen.getByText("bla bla bla");
    expect(title).toBeInTheDocument();
  });
});
