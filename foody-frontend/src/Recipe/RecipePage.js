import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeCard from "./RecipeCard";

const RecipePage = () => {
  const [recipe, setRecipe] = useState({});
  const urlParams = useParams();
  const params = {
    apiKey: process.env.REACT_APP_API_KEY,
  };

  useEffect(() => {
    localStorage.setItem("lastVisitedURL", window.location.pathname);
    const getRecipe = async () => {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/${urlParams.id}/information`,
        {
          params,
        },
      );
      setRecipe(res.data);
    };
    getRecipe();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "2rem",
        marginBottom: "2rem",
      }}
    >
      <RecipeCard key={recipe.id} recipe={recipe} />
    </div>
  );
};

export default RecipePage;
