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
    console.log(exclude_tags);
    // const init = () => {
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
    // };
    // init();
  }, [currentUser]);
  console.log(diets);

  const handleChange = (evt) => {
    console.log(evt.target.name);
    setDiets((diets) => ({
      ...diets,
      [evt.target.name]: evt.target.checked,
    }));
    // console.log(evt.target.removeAttribute("checked"));
    console.log(diets[evt.target.name]);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log(diets);
    const res = Object.keys(diets)
      .filter((k) => diets[k])
      .join(",");
    console.log(res);
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

      <button className="btn btn-success"> Save </button>
    </Form>
  );
};

export default ProfileForm;
