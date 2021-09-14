import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token,expirationTime) => {},
  logout: () => {},
});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjustedExpirationime = new Date(expirationTime).getTime();

  const remainingDuration = adjustedExpirationime - currentTime;
  
  return remainingDuration;
};

export const AuthContextProvider = (props) => {
  const intialToken = localStorage.getItem("idToken");
  const [token, setToken] = useState(intialToken);

  const userIsLoggedIn = !!token;

  

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("idToken");
  };

  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem("idToken", token);

    const remainingTime = calculateRemainingTime(expirationTime);

    setTimeout(logoutHandler,remainingTime);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
