import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Button, NavLink } from "react-bootstrap";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/profile",
      },
    });
  };

  return (
    <Button variant="success" className="button__login" onClick={handleLogin}>
      Log In/Sign Up
    </Button>
  );
};

export default LoginButton;
