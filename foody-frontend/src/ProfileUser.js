import React, { useContext, useState } from "react";
import ProfileForm from "./ProfileForm";
import UserContext from "./UserContext";

const ProfileUser = () => {
  return (
    <div>
      <h3 style={{ marginTop: "1rem" }}> Choose Your Diet </h3>
      <ProfileForm />;
    </div>
  );
};
export default ProfileUser;
