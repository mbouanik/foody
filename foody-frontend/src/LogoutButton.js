import React, { useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, NavLink } from "react-bootstrap";
import UserContext from "./UserContext";

const LogoutButton = () => {
  const { logout } = useAuth0();
  const { setToken } = useContext(UserContext);

  return (
    <Button
      variant="secondary"
      onClick={() => {
        localStorage.clear();
        setToken(null);
        logout({ logoutParams: { returnTo: window.location.origin } });
      }}
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
