import { useAuth0 } from "@auth0/auth0-react";
import React, { useContext, useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import "./FoodList.css";
import Loading from "./Loading";
import UserContext from "./UserContext";

const FoodList = ({ foods }) => {
  const { isLoading } = useAuth0();
  const [mealsIds, setMealsIds] = useState(new Set());
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    if (currentUser) {
      setMealsIds(new Set(currentUser.meals.map((meal) => meal.id)));
    }
  }, [currentUser]);

  if (isLoading) return <Loading />;
  return (
    <div className="FoodList-display">
      {foods.map((food) => (
        <FoodCard key={food.id} food={food} mealsIds={mealsIds} />
      ))}
    </div>
  );
};

export default FoodList;
