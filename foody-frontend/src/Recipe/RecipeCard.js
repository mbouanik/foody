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
          <Card.Header>
            <h2> {recipe.title} </h2>
          </Card.Header>
          <Card.Title style={{ marginTop: "1rem" }}>
            {parse(`${recipe.summary}`)}
          </Card.Title>

          <Card.Body>
            <h3> Ingredients </h3>
            {recipe.extendedIngredients
              ? recipe.extendedIngredients.map((ingr) => (
                  <div> {ingr.original}</div>
                ))
              : ""}
          </Card.Body>
          <h3 className="RecipeCard-h3">Instructions </h3>
          <Card.Body>
            <div>{parse(`${recipe.instructions}`)}</div>
          </Card.Body>
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
