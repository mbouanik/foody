import "./App.css";
import { useEffect, useState } from "react";
import FoodyApi from "./api";
import { useAuth0 } from "@auth0/auth0-react";
import RouterList from "./RouterList";
import Navbar from "./NavBar";
import UserContext from "./UserContext";
import useLocalStorage from "./hooks/useLocalStorage";
import axios from "axios";

function App() {
  const TOKEN_STORAGE = "foody-token";

  const [currentUser, setCurrentUser] = useState(null);
  const { isAuthenticated, user } = useAuth0();
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE);
  const [mealsIds, setMealsIds] = useState(new Set());

  useEffect(() => {
    const getCurrentUser = async () => {
      if (token) {
        // FoodyApi.token = user.sub;
        // setToken(user.sub);
        const res = await FoodyApi.checkUser(token);
        console.log(res.data.user);
        setCurrentUser(res.data.user);
        if (currentUser) {
          setMealsIds(new Set(currentUser.meals.map((meal) => meal.id)));
        }
        console.log(mealsIds);
        // setmealsId(new Set(res.data.user.meals.map((meal) => meal.spoon_id)));
        // console.log(mealsId);

        // setCurrentUser(await FoodyApi.getCurrentUser(sub));
      }
    };
    getCurrentUser();
    // console.log(currentUser);
  }, [isAuthenticated, token]);

  const getRecipeInformation = async (id) => {
    const params = {
      apiKey: process.env.REACT_APP_API_KEY,
      number: 10,
    };

    const res = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/nutritionWidget.json`,
      {
        params,
      },
    );
    console.log(res.data);
    return res.data;
  };
  console.log(currentUser);
  const addMeal = async (meal) => {
    console.log(meal);
    if (!meal.fat) {
      const res = await getRecipeInformation(meal.id);
      console.log(res);
      meal.carbs = res.carbs;
      meal.calories = parseInt(res.calories);
      meal.fat = res.fat;
      meal.protein = res.protein;
      console.log(meal);
    }
    const newMeal = { ...meal, user_id: user.sub };
    currentUser.meals.push(newMeal);
    const res = await FoodyApi.addMeal(newMeal);
    return res;
  };
  const removeMeal = async (id) => {
    const res = await FoodyApi.removeMeal(id);
    return res;
  };
  return (
    <UserContext.Provider
      value={{ currentUser, addMeal, mealsIds, removeMeal, setMealsIds }}
    >
      <div className="App">
        <Navbar />
        <RouterList />
      </div>
    </UserContext.Provider>
  );
}

export default App;
