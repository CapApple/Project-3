import React from "react";
import { useAuth0 } from "../react-auth0-wrapper";

const Auth = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button 
          onClick={() =>
            loginWithRedirect({})
          } 
        >
          Register/Sign In 
        </button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
    </div>
  );
};

export default Auth;