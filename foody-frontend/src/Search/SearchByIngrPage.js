import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import React, { useState } from "react";
import FoodList from "../Food/FoodList";
import Loading from "../Loading";
import SearchFormByIng from "../Search/SearchFromByIng";
import "../Search/SearchByIngrPage.css";

const SearchByIngrPage = () => {
  localStorage.setItem("lastVisitedURL", window.location.pathname);

  const { isLoading } = useAuth0();
  const [foods, setFoods] = useState([]);

  const searchByIngr = async (data) => {
    const params = {
      apiKey: process.env.REACT_APP_API_KEY,
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
  //
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <SearchFormByIng searchByIngr={searchByIngr} />
      <FoodList foods={foods} />
    </>
  );
};

export default SearchByIngrPage;
