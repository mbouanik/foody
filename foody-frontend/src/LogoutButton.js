import React, { useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, NavLink } from "react-bootstrap";
import UserContext from "./UserContext";

const LogoutButton = ({ resetUser }) => {
  const { logout } = useAuth0();
  const { setToken } = useContext(UserContext);

  const handleLogout = () => {
    resetUser();
    logout({ logoutParams: { returnTo: window.location.origin } });
  };
  return (
    <Button variant="secondary" onClick={handleLogout}>
      Log Out
    </Button>
  );
};

export default LogoutButton;
