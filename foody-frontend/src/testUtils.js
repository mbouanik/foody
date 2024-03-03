import React from "react";
import UserContext from "./UserContext";

const demoUser = {
  nickname: "testuser",
  name: "testfirst",
  email: "test@test.net",
  photo_url: null,
  exercises: [],
  meals: [
    {
      calories: 320,
      carbs: "23g",
      fat: "34g",
      image: null,
      protein: "34g",
      id: 2344,
      title: "bla bla bla",
      user_id: "google-oauth2|12345678901234",
    },
  ],
  diet: "",
};

const UserProvider = ({ children, currentUser = demoUser }) => (
  <UserContext.Provider value={{ currentUser }}>
    {children}
  </UserContext.Provider>
);

export { UserProvider };
