import React, { useContext, useState } from "react";
import ProfileForm from "./ProfileForm";
import UserContext from "./UserContext";

const ProfileUser = () => {
  return (
    <>
      <h3 style={{ marginTop: "1rem" }}> Choose Your Diet </h3>
      <ProfileForm />;
    </>
  );
};
export default ProfileUser;
