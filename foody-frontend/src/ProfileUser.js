import React, { useContext, useState } from "react";
import ProfileForm from "./ProfileForm";
import UserContext from "./UserContext";

const ProfileUser = () => {
  const { currentUser } = useContext(UserContext);
  const [profile, setProfile] = useState(new Set(currentUser.diet.split(",")));

  return <ProfileForm />;
};
export default ProfileUser;
