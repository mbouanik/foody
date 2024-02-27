import "./App.css";
import { useEffect, useState } from "react";
import FoodyApi from "./api";
import { useAuth0 } from "@auth0/auth0-react";
import RouterList from "./RouterList";
import Navbar from "./NavBar/NavBar";
import UserContext from "./UserContext";
import useLocalStorage from "./hooks/useLocalStorage";
import axios from "axios";
import Loading from "./Loading";

function App() {
  const TOKEN_STORAGE = "foody-token";

  const [currentUser, setCurrentUser] = useState(null);
  const { isAuthenticated, user, isLoading } = useAuth0();
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE);
  // const [mealsIds, setMealsIds] = useState(new Set());
  // const [exercisesIds, setExercisesIds] = useState(new Set());

  useEffect(() => {
    const getCurrentUser = async () => {
      const res = token
        ? await FoodyApi.getCurrentUser(token)
        : await checkUser(user.sub);

      setCurrentUser(res.data.user);
      // if (currentUser) {
      //   console.log(` jjjjjj${currentUser} `);
      //   setMealsIds(new Set(currentUser.meals.map((meal) => meal.id)));
      //   setExercisesIds(
      //     new Set(currentUser.exercises.map((exercise) => exercise.name)),
      //   );
      // }
    };
    if (isAuthenticated) {
      getCurrentUser();
    }
  }, [isAuthenticated, token]);

  const checkUser = async (id) => {
    setToken(id);
    return await FoodyApi.checkUser(id);
  };

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

  const addExercise = async (data) => {
    console.log(data);
    // currentUser.exercises.push(data);
    const res = await FoodyApi.addExercise(data);
    return res;
  };
  const removeExercise = async (data) => {
    console.log(data);
    // currentUser.exercises.push(data);
    const res = await FoodyApi.removeExercise(data);
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
