import React, { useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import FoodyApi from "../api";
import SearchForm from "../Search/SearchForm";
import FoodList from "../Food/FoodList";
import axios from "axios";
import UserContext from "../UserContext";
import Loading from "../Loading";

const RecipeProfile = () => {
  const { currentUser, mealsIds } = useContext(UserContext);
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    if (currentUser) {
      setFoods(currentUser.meals);
      console.log(mealsIds);
    }
  }, [currentUser, mealsIds]);

  if (!currentUser) {
    return <Loading />;
  }

  return (
    <div>
      <FoodList foods={foods} />
    </div>
  );
};

export default RecipeProfile;
