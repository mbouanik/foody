import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/",
      },
    });
  };

  return (
    <button
      style={{ fontWeight: "bold" }}
      className="btn btn-outline-success"
      onClick={handleLogin}
    >
      Log In/Sign Up
    </button>
  );
};

export default LoginButton;
