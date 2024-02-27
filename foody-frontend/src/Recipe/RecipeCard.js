import HTMLReactParser from "html-react-parser";
import React from "react";
import Card from "react-bootstrap/Card";
import parse from "html-react-parser";
import Loading from "../Loading";
import "./RecipeCard.css";

const RecipeCard = ({ recipe }) => {
  if (!recipe.title) return <Loading />;
  return (
    <>
      <Card style={{ width: "50rem" }}>
        <Card.Img variant="top" src={recipe.image} />
        <Card.Body>
          <Card.Title>
            <h2> {recipe.title} </h2>
          </Card.Title>
          <Card.Text>{parse(`${recipe.summary}`)}</Card.Text>

          <Card.Text>
            <h3> Ingredients </h3>
            {recipe.extendedIngredients
              ? recipe.extendedIngredients.map((ingr) => (
                  <div> {ingr.original}</div>
                ))
              : ""}
          </Card.Text>
          <Card.Text>
            <h3 className="RecipeCard-h3">Instructions </h3>
            {parse(`${recipe.instructions}`)}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          {recipe.diets
            ? recipe.diets.map((diet) => <span>{diet} </span>)
            : recipe.sourceURl}
        </Card.Footer>
      </Card>
    </>
  );
};
export default RecipeCard;
