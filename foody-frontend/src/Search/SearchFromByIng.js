import React, { useState } from "react";

import { Form } from "react-bootstrap";
const SearchFormByIng = ({ searchByIngr }) => {
  const INITIAL_VALUES = { ingredients: "", number: 30 };
  const [formData, setFormData] = useState(INITIAL_VALUES);

  const handleChange = (evt) => {
    setFormData((formData) => ({
      ...formData,
      [evt.target.name]: evt.target.value,
    }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await searchByIngr(formData);
    setFormData(INITIAL_VALUES);
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
        data-testid="items"
      />
      <button className="btn btn-success" data-testid="btn">
        Submit
      </button>
    </Form>
  );
};

export default SearchFormByIng;
