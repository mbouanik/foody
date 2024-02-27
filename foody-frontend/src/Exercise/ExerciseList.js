import React, { useContext, useEffect, useState } from "react";
import UserContext from "../UserContext";
import ExerciseCard from "./ExerciseCard";
import "./ExerciseList.css";

const ExerciseList = ({ exercises }) => {
  const { currentUser } = useContext(UserContext);
  const [exercisesIds, setExercisesIds] = useState(new Set());

  useEffect(() => {
    setExercisesIds(
      new Set(currentUser.exercises.map((exercise) => exercise.name)),
    );
  }, [currentUser]);
  return (
    <div className="ExerciseList-display">
      {exercises.map((exercise) => (
        <ExerciseCard
          key={exercise.tag_id || exercise.name}
          exercise={exercise}
          added={exercisesIds.has(exercise.name)}
        />
      ))}
    </div>
  );
};

export default ExerciseList;
