import "./App.css";
import { useEffect, useState } from "react";
import FoodyApi from "./api";
import { useAuth0 } from "@auth0/auth0-react";
import RouterList from "./RouterList";
import Navbar from "./NavBar/NavBar";
import UserContext from "./UserContext";
import useLocalStorage from "./hooks/useLocalStorage";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

function App() {
  const TOKEN_STORAGE = "foody-token";

  const [currentUser, setCurrentUser] = useState(null);
  const { isAuthenticated, user } = useAuth0();
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE);
  const navigate = useNavigate();

  const checkUser = async () => {
    const res = await FoodyApi.checkUser(user.sub);
    setToken(res.user.token);
    FoodyApi.token = res.user.token;
    return res;
  };

  useEffect(() => {
    const initCurrentUser = async () => {
      const res = token ? await getCurrentUser(token) : await checkUser();
      setCurrentUser(res.user);
    };
    if (isAuthenticated) {
      initCurrentUser();
    } else {
      localStorage.removeItem("foody-token");
      localStorage.removeItem("lastVisitedURL");
      localStorage.clear();
      FoodyApi.token = null;
      setToken(null);
    }
    const lastVisitedURL = localStorage.getItem("lastVisitedURL");

    // Navigate to the last visited URL
    if (lastVisitedURL && isAuthenticated) {
      navigate(lastVisitedURL);
    }
  }, [isAuthenticated, navigate, token]);

  const getCurrentUser = async (token) => {
    FoodyApi.token = token;
    const { id } = jwtDecode(token);
    const res = await FoodyApi.getCurrentUser(id);
    return res;
  };

  const getRecipeInformation = async (id) => {
    const params = {
      apiKey: process.env.REACT_APP_SPOONACULAR_API_KEY,
      number: 10,
    };

    const res = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/nutritionWidget.json`,
      {
        params,
      },
    );
    return res.data;
  };

  const addMeal = async (meal) => {
    if (!meal.fat) {
      const res = await getRecipeInformation(meal.id);
      meal.carbs = res.carbs;
      meal.calories = parseInt(res.calories);
      meal.fat = res.fat;
      meal.protein = res.protein;
    }
    const newMeal = { ...meal, user_id: user.sub };
    currentUser.meals.push(newMeal);
    const res = await FoodyApi.addMeal(newMeal);
    return res;
  };

  const removeMeal = async (data) => {
    const res = await FoodyApi.removeMeal(data);
    return res;
  };

  const addExercise = async (data) => {
    currentUser.exercises.push(data);
    const res = await FoodyApi.addExercise(data);
    return res;
  };
  const removeExercise = async (data) => {
    const res = await FoodyApi.removeExercise(data);
    return res;
  };

  const updateProfile = async (data) => {
    const res = await FoodyApi.updateProfile(data);
    return res;
  };
  return (
    <UserContext.Provider
      value={{
        currentUser,
        addMeal,
        removeMeal,
        addExercise,
        removeExercise,
        setToken,
        updateProfile,
        setCurrentUser,
      }}
    >
      <div className="App">
        <Navbar />
        <RouterList />
      </div>
    </UserContext.Provider>
  );
}

export default App;
