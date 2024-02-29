import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import UserContext from "../UserContext";

const ExerciseCard = ({ exercise, added }) => {
  const { currentUser, addExercise, removeExercise } = useContext(UserContext);
  const [button, setButton] = useState({ color: "", text: "" });
  const [exercisesIds, setExercisesIds] = useState(
    new Set(currentUser.exercises.map((exercise) => exercise.name)),
  );

  useEffect(() => {
    // setExercisesIds(
    //   new Set(currentUser.exercises.map((exercise) => exercise.name)),
    // );
    added
      ? setButton({
          color: "secondary",
          text: "Remove",
          handleExercise: handleRemoveExercise,
        })
      : setButton({
          color: "success",
          text: "Add",
          handleExercise: handleAddExercise,
        });
  }, [currentUser]);

  const handleAddExercise = () => {
    exercise.user_id = currentUser.id;
    exercisesIds.add(exercise.name);
    addExercise(exercise);
    setButton({
      color: "secondary",
      text: "Remove",
      handleExercise: handleRemoveExercise,
    });
  };
  const handleRemoveExercise = () => {
    removeExercise({ name: exercise.name, user_id: currentUser.id });
    setButton({
      color: "success",
      text: "Add",
      handleExercise: handleAddExercise,
    });
  };
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
              <Card.Header style={{ backgroundColor: "green", color: "white" }}>
                {" "}
                {exercise.name}{" "}
              </Card.Header>
              <Card.Text
                style={{
                  display: "flex",
                  flexWrap: "nowrap",
                  gap: "1rem",
                  justifyContent: "center",
                  color: "green",
                }}
              >
                <Card.Text>{exercise.equipment} </Card.Text>
                <Card.Text>{exercise.type} </Card.Text>
                <Card.Text>{exercise.muscle} </Card.Text>
                <Card.Text> {exercise.difficulty} </Card.Text>
              </Card.Text>
              <Card.Text>{exercise.instructions} </Card.Text>
            </>
          )}
        </Card.Body>
        {exercise.muscle ? (
          <Card.Footer>
            <Button variant={button.color} onClick={button.handleExercise}>
              {button.text}
            </Button>
          </Card.Footer>
        ) : (
          ""
        )}
      </Card>
    </>
  );
};

export default ExerciseCard;
