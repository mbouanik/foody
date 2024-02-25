import axios from "axios";
import React, { useState } from "react";
import FoodList from "./FoodList";
import SearchForm from "./SearchForm";

const SearchPage = () => {
  const [foods, setFoods] = useState([]);
  const search = async (nutrients) => {
    console.log(nutrients);
    const params = {
      apiKey: process.env.REACT_APP_API_KEY,
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
    console.log(res.data);
    setFoods(res.data);
  };
  return (
    <>
      <SearchForm searchFor={search} />
      <FoodList foods={foods} />
    </>
  );
};
export default SearchPage;
