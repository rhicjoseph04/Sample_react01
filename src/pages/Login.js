import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  const handleLogout = () => {
    localStorage.removeItem('user');
    logout({ returnTo: window.location.origin });
  };

  const handleLogin = () => {
    // Customize your login logic here
    // For example, you can show a modal, redirect to a custom login page, etc.
    loginWithRedirect();
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Hi {user.name}</p>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      ) : (
        <div>
          {/* Your custom login form or button */}
          <button onClick={handleLogin}>Log In</button>
        </div>
      )}
    </div>
  );
};

export default LoginButton;

















