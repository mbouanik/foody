import React from "react";
import UserContext from "./auth/UserContext";

const demoUser = {
  nickname: "testuser",
  name: "testfirst",
  email: "test@test.net",
  photo_url: null,
};

const UserProvider = ({ children, currentUser = demoUser }) => (
  <UserContext.Provider value={{ currentUser }}>
    {children}
  </UserContext.Provider>
);

export { UserProvider };
