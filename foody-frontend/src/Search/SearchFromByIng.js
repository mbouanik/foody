import React, { useState } from "react";

import { Button, Form } from "react-bootstrap";
const SearchFormByIng = ({ searchByIngr }) => {
  const [formData, setFormData] = useState({
    ingredients: "",
    number: 30,
  });

  const handleChange = (evt) => {
    setFormData((formData) => ({
      ...formData,
      [evt.target.name]: evt.target.value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    searchByIngr(formData);
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
        value={formData.ingredients}
        name="ingredients"
        onChange={handleChange}
        placeholder="Search recipe by ingredient ex: avocado,eggs,..."
      />
      <button className="success"> Submit</button>
    </Form>
  );
};

export default SearchFormByIng;
