import React, { useContext, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import ProfileUser from "./ProfileUser";
import UserContext from "./UserContext";

const ProfileForm = ({ userDiet }) => {
  const { updateProfile, currentUser } = useContext(UserContext);
  const [diets, setDiets] = useState({});
  const exclude_tags = new Set(currentUser.diet.split(","));

  useEffect(() => {
    localStorage.setItem("lastVisitedURL", window.location.pathname);
    setDiets({
      gluten_free: exclude_tags.has("gluten_free"),
      ketogenic: exclude_tags.has("ketogenic"),
      vegetarian: exclude_tags.has("vegetarian"),
      lacto_vegetarian: exclude_tags.has("lacto_vegetarian"),
      ovo_vegetarian: exclude_tags.has("ovo_vegetarian"),
      vegan: exclude_tags.has("vegan"),
      pescetarian: exclude_tags.has("pescetarian"),
      paleo: exclude_tags.has("paleo"),
      primal: exclude_tags.has("primal"),
      whole30: exclude_tags.has("whole30"),
    });
  }, [currentUser]);

  const handleChange = (evt) => {
    setDiets((diets) => ({
      ...diets,
      [evt.target.name]: evt.target.checked,
    }));
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const res = Object.keys(diets)
      .filter((k) => diets[k])
      .join(",");
    currentUser.diet = res;
    updateProfile({ diet: res, id: currentUser.id });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Check
        onChange={handleChange}
        inline
        type="checkbox"
        name="gluten_free"
        label="Gluten Free"
        checked={diets.gluten_free}
      />
      <Form.Check
        onChange={handleChange}
        inline
        type="checkbox"
        name="ketogenic"
        label="Ketogenic"
        checked={diets.ketogenic}
      />
      <Form.Check
        onChange={handleChange}
        inline
        type="checkbox"
        name="vegetarian"
        label="Vegetarian"
        checked={diets.vegetarian}
      />
      <Form.Check
        onChange={handleChange}
        inline
        type="checkbox"
        name="lacto_vegetarian"
        label="Lacto Vegetarian"
        checked={diets.lacto_vegetarian}
      />
      <Form.Check
        onChange={handleChange}
        inline
        type="checkbox"
        name="ovo_vegetarian"
        label="Ovo Vegetarian"
        checked={diets.ovo_vegetarian}
      />
      <Form.Check
        onChange={handleChange}
        inline
        type="checkbox"
        name="vegan"
        label="Vegan"
        checked={diets.vegan}
      />

      <Form.Check
        onChange={handleChange}
        inline
        type="checkbox"
        name="pescetarian"
        label="Pescetarian"
        checked={diets.pescetarian}
      />
      <Form.Check
        onChange={handleChange}
        inline
        type="checkbox"
        name="paleo"
        label="Paleo"
        checked={diets.paleo}
      />
      <Form.Check
        onChange={handleChange}
        inline
        type="checkbox"
        name="primal"
        label="Primal"
        checked={diets.primal}
      />
      <Form.Check
        onChange={handleChange}
        inline
        type="checkbox"
        name="whole30"
        label="Whole30"
        checked={diets.whole30}
      />

      <button className="btn btn-success"> Save </button>
    </Form>
  );
};

export default ProfileForm;
