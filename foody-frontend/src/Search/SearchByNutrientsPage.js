import axios from "axios";
import React, { useState } from "react";
import FoodList from "../Food/FoodList";
import SearchFormByNutrients from "./SearchFormByNutrients";

const SearchByNutrientsPage = () => {
  localStorage.setItem("lastVisitedURL", window.location.pathname);

  const [foods, setFoods] = useState([]);
  const search = async (nutrients) => {
    const params = {
      apiKey: process.env.REACT_APP_SPOONACULAR_API_KEY,
      ...nutrients,

      // dataType: "Foundation",
    };

    const headers = {
      "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    };
    const res = await axios.get(
      `https://api.spoonacular.com/recipes/findByNutrients`,
      {
        params,
      },
      headers,
    );
    setFoods(res.data);
  };
  return (
    <>
      <SearchFormByNutrients searchFor={search} />
      <FoodList foods={foods} />
    </>
  );
};
export default SearchByNutrientsPage;
