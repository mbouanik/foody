import React, { useState } from "react";

import { Form } from "react-bootstrap";
const SearchFormExercise = ({ searchExercise }) => {
  const [formData, setFormData] = useState({
    query: "",
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
    searchExercise(formData);
  };

  return (
    <Form
      style={{
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
        alignContent: "center",
      }}
      onSubmit={handleSubmit}
    >
      <Form.Control
        style={{ maxWidth: "35rem" }}
        type="text"
        value={formData.query}
        name="query"
        onChange={handleChange}
        placeholder="Search energy expenditure by Exercise ex: row for 20min"
      />
      <button className="btn btn-success"> Submit</button>
    </Form>
  );
};

export default SearchFormExercise;
