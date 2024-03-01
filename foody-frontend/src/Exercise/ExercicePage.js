import axios from "axios";
import React, { useState } from "react";
import ExerciseList from "./ExerciseList";
import SearchFormExercise from "../Search/SearchFormExercise";
import SearchFormExerciseByType from "../Search/SearchFormExerciseByType";

const ExercisePage = () => {
  localStorage.setItem("lastVisitedURL", window.location.pathname);

  const [exercises, setExercises] = useState([]);

  const searchExercise = async (query) => {
    const params = {
      ...query,
    };
    const headers = {
      "Content-Type": "application/json",
      "x-app-id": process.env.REACT_APP_NUTRITIONIX_APP_ID,
      "x-app-key": process.env.REACT_APP_NUTRITIONIX_APP_KEY,
    };

    const res = await axios.post(
      `https://trackapi.nutritionix.com/v2/natural/exercise`,

      // query: "swam for 1 hour",
      params,

      {
        headers,
      },
    );
    setExercises(res.data.exercises);
  };

  const searchExercieByType = async (data) => {
    const headers = {
      "X-Api-Key": process.env.REACT_APP_API_NINJA,
    };
    const { query, type, difficulty } = data;
    const res = await axios.get(
      `https://api.api-ninjas.com/v1/exercises?${type}=${query}&difficulty=${difficulty}`,
      {
        headers,
      },
    );
    setExercises(res.data);
  };

  return (
    <>
      <SearchFormExercise searchExercise={searchExercise} />
      <SearchFormExerciseByType searchExercieByType={searchExercieByType} />
      <ExerciseList exercises={exercises} />
    </>
  );
};

export default ExercisePage;
