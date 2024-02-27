import React, { useState } from "react";

import { Button, Form } from "react-bootstrap";
const SearchFormExerciseByMuscle = ({ searchExercieByMuscle }) => {
  const [formData, setFormData] = useState({
    query: "",
    type: "",
    difficulty: "",
  });
  const [placeholder, setPlaceholder] = useState("");
  const [options, setOptions] = useState({
    type: "exercise type ex: cardio, olympic weightlifting, plyometrics, powerlifting, strength, stretching, strongman",
    muscle: "muscle group targeted by the exercise",
    name: "name of exercise. This value can be partial (e.g. press will match Dumbbell Bench Press)",
  });
  const handleChange = (evt) => {
    setFormData((formData) => ({
      ...formData,
      [evt.target.name]: evt.target.value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(formData);
    searchExercieByMuscle(formData);
  };

  const handleOptions = (evt) => {
    setPlaceholder(options[evt.target.value]);
    setFormData((formData) => ({
      ...formData,
      ["type"]: evt.target.value,
    }));
  };
  return (
    <Form
      style={{
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
        alignContent: "center",
        flexWrap: "wrap",
      }}
      onSubmit={handleSubmit}
    >
      <Form.Select
        style={{ width: "7rem" }}
        onChange={handleOptions}
        aria-label="Default select example"
      >
        <option>Options</option>
        <option name="type" value="muscle">
          Muscle
        </option>
        <option name="type" value="type">
          Type
        </option>
        <option name="type" value="name">
          Name
        </option>
      </Form.Select>
      <Form.Control
        style={{ maxWidth: "35rem" }}
        type="text"
        value={formData.query}
        name="query"
        onChange={handleChange}
        placeholder={placeholder}
        disabled={!placeholder}
      />
      <Form.Check
        onChange={handleChange}
        type="radio"
        label="beginner"
        name="difficulty"
        value="beginner"
      />
      <Form.Check
        onChange={handleChange}
        type="radio"
        label="intermediate"
        name="difficulty"
        value="intermediate"
      />
      <Form.Check
        onChange={handleChange}
        type="radio"
        label="expert"
        name="difficulty"
        value="expert"
      />
      <button className="btn btn-success"> Submit</button>
    </Form>
  );
};

export default SearchFormExerciseByMuscle;
