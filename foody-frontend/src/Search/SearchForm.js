import React, { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import FormRange from "react-bootstrap/esm/FormRange";
import UserContext from "../UserContext";

const SearchForm = ({ searchFor }) => {
  const INITIAL_VALUE = {
    minCalories: 50,
    maxCalories: 51,
    minCarbs: 10,
    maxCarbs: 11,
    minProtein: 10,
    maxProtein: 11,
    minFat: 1,
    maxFat: 2,
    number: 30,
    random: true,
  };
  const [formData, setFormData] = useState(INITIAL_VALUE);
  const handleChange = (evt) => {
    setFormData((formData) => ({
      ...formData,
      [evt.target.name]: parseInt(evt.target.value),
    }));
  };
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log(formData);
    searchFor(formData);
  };
  return (
    <Form
      style={{ marginLeft: "20rem", marginRight: "20rem" }}
      onSubmit={handleSubmit}
    >
      <Form.Label htmlFor="maxCalories" style={{ color: "blue" }}>
        Calories
      </Form.Label>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Form.Range
          variant="success"
          name="maxCalories"
          min={50}
          max={800}
          onChange={handleChange}
          value={formData.maxCalories}
        />

        <span style={{ color: "blue" }}>{formData.maxCalories} </span>
      </div>
      <Form.Label htmlFor="maxCarbs" style={{ color: "red" }}>
        Carbs{" "}
      </Form.Label>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Form.Range
          name="maxCarbs"
          min={10}
          max={100}
          onChange={handleChange}
          value={formData.maxCarbs}
        />
        <span style={{ color: "red" }}> {formData.maxCarbs} </span>
      </div>

      <Form.Label htmlFor="maxProtein" style={{ color: "orange" }}>
        Protein{" "}
      </Form.Label>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Form.Range
          name="maxProtein"
          min={10}
          max={100}
          onChange={handleChange}
          value={formData.maxProtein}
        />
        <span style={{ color: "orange" }}> {formData.maxProtein}</span>
      </div>
      <Form.Label htmlFor="maxFat" style={{ color: "green" }}>
        Fat{" "}
      </Form.Label>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Form.Range
          name="maxFat"
          min={1}
          max={100}
          onChange={handleChange}
          value={formData.maxFat}
          variant="success"
        />
        <span style={{ color: "green" }}> {formData.maxFat}</span>
      </div>
      <button className="btn btn-success" onClick={handleSubmit}>
        Search
      </button>
    </Form>
  );
};

export default SearchForm;
