import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeCard from "./RecipeCard";

const RecipePage = () => {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const params = {
      apiKey: process.env.REACT_APP_SPOONACULAR_API_KEY,
    };

    localStorage.setItem("lastVisitedURL", window.location.pathname);
    const getRecipe = async () => {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information`,
        {
          params,
        },
      );
      setRecipe(res.data);
    };
    getRecipe();
  }, [id]);
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
