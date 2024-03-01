import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { NavLink } from "react-bootstrap";

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
    <button
      // style={{ color: "green" }}
      className="btn btn-outline-success"
      onClick={handleLogin}
    >
      Log In/Sign Up
    </button>
  );
};

export default LoginButton;
