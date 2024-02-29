import { useAuth0, User } from "@auth0/auth0-react";
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import FoodList from "../Food/FoodList";
import Loading from "../Loading";
import LoginButton from "../LoginButton";
import NotLogin from "../NotLogin";
import SearchFormByIng from "../Search/SearchFromByIng";
import UserContext from "../UserContext";
import "./HomePage.css";
const HomePage = () => {
  const { isAuthenticated, user, isLoading } = useAuth0();
  const [foods, setFoods] = useState([]);
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem("lastVisitedURL", window.location.pathname);
    }

    const exclude_tags = new Set([
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
    ]);

    const getRandomRecipes = async (data) => {
      // console.log(data);
      currentUser.diet.split(",").map((d) => {
        if (exclude_tags.has(d)) return exclude_tags.delete(d);
      });
      const params = {
        apiKey: process.env.REACT_APP_API_KEY,
        number: 10,
        "include-tags": currentUser.diet,
        "exclude-tags": Array.from(exclude_tags).join(","),
      };
      console.log(params);
      const res = await axios.get(
        "https://api.spoonacular.com/recipes/random",
        {
          params,
        },
      );
      // console.log(res);
      console.log(res.data);
      setFoods(res.data.recipes);
    };
    if (currentUser) {
      getRandomRecipes();
    }
  }, [currentUser]);
  console.log(currentUser);
  // const searchByIngr = async (data) => {
  //   const params = {
  //     type: "public",
  //     app_id: process.env.REACT_APP_EDAMAM_APP_ID,
  //     app_key: process.env.REACT_APP_EDAMAM_APP_KEY,
  //     q: data.ingredients,
  //     random: true,
  //   };
  //   const headers = {
  //     headers: {
  //       accept: "application/json",
  //       "Accept-Language": "en",
  //     },
  //   };
  //
  //   const res = await axios.get(
  //     "https://api.edamam.com/api/recipes/v2",
  //     {
  //       params,
  //     },
  //     headers,
  //   );
  //   console.log(res);
  //
  //   console.log(res.data.hits);
  //   setFoods(res.data.hits.map((hit) => hit.recipe));
  // };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {isAuthenticated ? (
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
