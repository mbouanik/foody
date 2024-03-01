import React, { useContext, useEffect, useState } from "react";
import ExerciseList from "./ExerciseList";
import UserContext from "../UserContext";
import Loading from "../Loading";

const ExerciseProfile = () => {
  const { currentUser } = useContext(UserContext);
  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    if (currentUser) {
      setExercises(currentUser.exercises);
    }
    localStorage.setItem("lastVisitedURL", window.location.pathname);
  }, [currentUser]);

  if (!currentUser) {
    return <Loading />;
  }

  return (
    <div>
      <ExerciseList exercises={exercises} />
    </div>
  );
};

export default ExerciseProfile;
