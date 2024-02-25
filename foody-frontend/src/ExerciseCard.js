import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ExerciseCard = ({ exercise }) => {
  return (
    <>
      <Card style={{ width: "25rem", marginTop: "2rem" }}>
        <Card.Body>
          {exercise.nf_calories ? (
            <>
              <Card.Title>{exercise.name}</Card.Title>
              <Card.Text>Calories: {exercise.nf_calories}</Card.Text>
              <Card.Text>
                metabolic equivalent of task (MET) : {exercise.met}
                {}{" "}
              </Card.Text>
              <Card.Text>
                Duration : {exercise.duration_min} min
                {}{" "}
              </Card.Text>
            </>
          ) : (
            <>
              <Card.Text>{exercise.difficulty} </Card.Text>
              <Card.Text>{exercise.equipment} </Card.Text>
              <Card.Text>{exercise.type} </Card.Text>
              <Card.Text>{exercise.muscle} </Card.Text>
              <Card.Text>{exercise.instructions} </Card.Text>
            </>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default ExerciseCard;
