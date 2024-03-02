import React, { useContext, useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import "./FoodList.css";
import UserContext from "../UserContext";

const FoodList = ({ foods }) => {
  const [mealsIds, setMealsIds] = useState(new Set());
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    if (currentUser) {
      setMealsIds(new Set(currentUser.meals.map((meal) => meal.id)));
    }
  }, [currentUser]);

  return (
    <div className="FoodList-display">
      {foods.map((food) => (
        <FoodCard key={food.id} food={food} added={mealsIds.has(food.id)} />
      ))}
    </div>
  );
};

export default FoodList;
