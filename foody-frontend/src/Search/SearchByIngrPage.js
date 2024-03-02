import axios from "axios";
import React, { useState } from "react";
import FoodList from "../Food/FoodList";
import SearchFormByIng from "../Search/SearchFromByIng";
import "../Search/SearchByIngrPage.css";

const SearchByIngrPage = () => {
  localStorage.setItem("lastVisitedURL", window.location.pathname);

  const [foods, setFoods] = useState([]);

  const searchByIngr = async (data) => {
    const params = {
      apiKey: process.env.REACT_APP_SPOONACULAR_API_KEY,
      ...data,
    };
    const res = await axios.get(
      "https://api.spoonacular.com/recipes/findByIngredients",
      { params },
    );
    const ids = res.data.map((recipe) => recipe.id).join(",");
    params.ids = ids;
    const recipeInfo = await axios.get(
      "https://api.spoonacular.com/recipes/informationBulk",
      {
        params,
      },
    );
    setFoods(recipeInfo.data);
  };

  return (
    <>
      <SearchFormByIng searchByIngr={searchByIngr} />
      <FoodList foods={foods} />
    </>
  );
};

export default SearchByIngrPage;
