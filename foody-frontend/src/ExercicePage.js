import axios from "axios";
import React, { useState } from "react";
import ExerciseCard from "./ExerciseCard";
import SearchFormExercise from "./SearchFormExercise";
import SearchFormExerciseByMuscle from "./SearchFormExerciseByMuscle";

const ExercisePage = () => {
  console.log(process.env);
  const [exercises, setExercises] = useState([]);

  const searchExercise = async (query) => {
    const params = {
      ...query,
      // app_id: process.env.REACT_APP_NUTRITIONIX_APP_ID,
      // app_key: process.env.REACT_APP_NUTRITIONIX_APP_KEY,
    };
    const headers = {
      "Content-Type": "application/json",
      "x-app-id": process.env.REACT_APP_NUTRITIONIX_APP_ID,
      "x-app-key": process.env.REACT_APP_NUTRITIONIX_APP_KEY,
    };

    console.log(params);
    const res = await axios.post(
      `https://trackapi.nutritionix.com/v2/natural/exercise`,

      // query: "swam for 1 hour",
      params,

      {
        headers,
      },
    );
    console.log(res.data.exercises);
    setExercises(res.data.exercises);
  };

  const searchExercieByMuscle = async (data) => {
    const headers = {
      "X-Api-Key": process.env.REACT_APP_API_NINJA,
    };
    const { query, type } = data;
    console.log(query, type);
    const res = await axios.get(
      `https://api.api-ninjas.com/v1/exercises?${type}=${query}`,
      {
        headers,
      },
    );
    console.log(res.data);
    setExercises(res.data);
  };

  return (
    <>
      <h1> EXERCISES </h1>
      <SearchFormExercise searchExercise={searchExercise} />
      <SearchFormExerciseByMuscle
        searchExercieByMuscle={searchExercieByMuscle}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        {exercises.map((exercise) => (
          <ExerciseCard key={exercise.tag_id} exercise={exercise} />
        ))}
      </div>
    </>
  );
};

export default ExercisePage;
