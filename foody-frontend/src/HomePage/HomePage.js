import { useAuth0, User } from "@auth0/auth0-react";
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import FoodList from "../Food/FoodList";
import Loading from "../Loading";
import LoginButton from "../LoginButton";
import NotLogin from "../NotLogin";
import SearchFormByIng from "../Search/SearchFromByIng";
import UserContext from "../UserContext";
import "./HomePage.css";
const HomePage = () => {
  const { isAuthenticated, user, isLoading } = useAuth0();
  const [foods, setFoods] = useState([]);
  const { currentUsser } = useContext(UserContext);

  useEffect(() => {
    const getRandomRecipes = async (data) => {
      // console.log(data);
      const params = {
        apiKey: process.env.REACT_APP_API_KEY,
        number: 10,
      };
      const res = await axios.get(
        "https://api.spoonacular.com/recipes/random",
        {
          params,
        },
      );
      // console.log(res);
      // console.log(res.data);
      setFoods(res.data.recipes);
    };
    getRandomRecipes();
  }, [currentUsser]);
  console.log(currentUsser);
  // const searchByIngr = async (data) => {
  //   const params = {
  //     type: "public",
  //     app_id: process.env.REACT_APP_EDAMAM_APP_ID,
  //     app_key: process.env.REACT_APP_EDAMAM_APP_KEY,
  //     q: data.ingredients,
  //     random: true,
  //   };
  //   const headers = {
  //     headers: {
  //       accept: "application/json",
  //       "Accept-Language": "en",
  //     },
  //   };
  //
  //   const res = await axios.get(
  //     "https://api.edamam.com/api/recipes/v2",
  //     {
  //       params,
  //     },
  //     headers,
  //   );
  //   console.log(res);
  //
  //   console.log(res.data.hits);
  //   setFoods(res.data.hits.map((hit) => hit.recipe));
  // };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {isAuthenticated ? (
        <div>
          <FoodList foods={foods} />
        </div>
      ) : (
        <div>
          <NotLogin />{" "}
        </div>
      )}
    </>
  );
};

export default HomePage;
