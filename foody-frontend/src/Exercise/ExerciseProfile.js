import React, { useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import SearchForm from "../Search/SearchForm";
import ExerciseList from "./ExerciseList";
import axios from "axios";
import UserContext from "../UserContext";
import Loading from "../Loading";

const ExerciseProfile = () => {
  const { currentUser } = useContext(UserContext);
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    if (currentUser) {
      console.log(currentUser);
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
