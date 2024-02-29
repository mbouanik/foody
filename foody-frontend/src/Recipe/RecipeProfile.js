import React, { useContext, useEffect, useState } from "react";
import FoodList from "../Food/FoodList";
import UserContext from "../UserContext";
import Loading from "../Loading";

const RecipeProfile = () => {
  const { currentUser, mealsIds } = useContext(UserContext);
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    if (currentUser) {
      setFoods(currentUser.meals);
    }
    localStorage.setItem("lastVisitedURL", window.location.pathname);
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
