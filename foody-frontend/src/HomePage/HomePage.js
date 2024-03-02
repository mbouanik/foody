import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import FoodList from "../Food/FoodList";
import Loading from "../Loading";
import NotLogin from "../NotLogin";
import UserContext from "../UserContext";
import "./HomePage.css";

const HomePage = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const [foods, setFoods] = useState([]);
  const { currentUser, token } = useContext(UserContext);

  useEffect(() => {
    if (currentUser) {
    }

    const exclude_tags = [
      "gluten_free",
      "ketogenic",
      "vegetarian",
      "lacto_vegetarian",
      "ovo_vegetarian",
      "vegan",
      "pescetarian",
      "paleo",
      "primal",
      "whole30",
    ];

    const getRandomRecipes = async (data) => {
      const tags = new Set(currentUser.diet.split(","));
      const params = {
        apiKey: process.env.REACT_APP_SPOONACULAR_API_KEY,
        number: 9,
        "include-tags": currentUser.diet,
        "exclude-tags": exclude_tags.filter((tag) => !tags.has(tag)).join(","),
      };
      const res = await axios.get(
        "https://api.spoonacular.com/recipes/random",
        {
          params,
        },
      );
      setFoods(res.data.recipes);
    };
    if (token && currentUser) {
      localStorage.setItem("lastVisitedURL", window.location.pathname);
      getRandomRecipes();
    }
  }, [currentUser, isAuthenticated]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {token ? (
        <div>
          <FoodList foods={foods} />
        </div>
      ) : (
        <div>
          <NotLogin />{" "}
        </div>
      )}
    </>
  );
};

export default HomePage;
