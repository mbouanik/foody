import { useAuth0 } from "@auth0/auth0-react";
import parse from "html-react-parser";
import React, { useContext, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserContext from "../UserContext";

const FoodCard = ({ food, added }) => {
  const { currentUser, addMeal, removeMeal } = useContext(UserContext);
  const [button, setButton] = useState({ color: "", text: "" });
  const [mealsIds, setMealsIds] = useState(new Set());
  // const [mealsIds, setMealsIds] = useState(new Set());
  const { isAuthenticated } = useAuth0();
  useEffect(() => {
    if (currentUser) {
      setMealsIds(new Set(currentUser.meals.map((meal) => meal.spoon_id)));

      console.log(added);
      // mealsIds.has(food.id)
      added
        ? setButton({
            color: "secondary",
            text: "Remove",
            handleMeal: handleRemoveMeal,
          })
        : setButton({
            color: "success",
            text: "Add",
            handleMeal: handleAddMeal,
          });
    }
  }, [currentUser]);

  const handleAddMeal = () => {
    const meal = {
      calories: food.calories,
      carbs: food.carbs,
      fat: food.fat,
      image: food.image,
      protein: food.protein,
      id: food.id,
      title: food.title,
      user_id: currentUser.id,
    };
    addMeal(meal);
    setButton({
      color: "secondary",
      text: "Remove",
      handleMeal: handleRemoveMeal,
    });
    console.log(mealsIds);
    mealsIds.add(meal.id);
    console.log(mealsIds);
  };
  const handleRemoveMeal = () => {
    console.log(food.id);
    removeMeal(food.id);
    setButton({
      color: "success",
      text: "Add",
      handleMeal: handleAddMeal,
    });
  };
  return (
    <>
      <Card className="FoodCard-display" style={{ width: "25rem" }}>
        <Card.Img variant="top" src={food.image} />
        <Card.Body>
          <Card.Title>{food.title || food.label}</Card.Title>
          {food.fat ? (
            <>
              <Card.Text> Calories: {food.calories} </Card.Text>
              <Card.Text> Carbs: {food.carbs} </Card.Text>
              <Card.Text> Protein: {food.protein} </Card.Text>
              <Card.Text> Fat: {food.fat} </Card.Text>
            </>
          ) : (
            <Card.Text>
              {food.summary ? parse(`${food.summary.slice(0, 255)}...`) : ""}
            </Card.Text>
          )}
        </Card.Body>
        <Card.Footer
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <Link className="btn btn-success" to={`/recipes/${food.id}`}>
            {" "}
            Recipe
          </Link>

          <Button variant={button.color} onClick={button.handleMeal}>
            {button.text}
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default FoodCard;
