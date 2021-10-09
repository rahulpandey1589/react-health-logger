import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token, expirationTime) => {},
  logout: () => {},
  displayName: "",
  role: "",
});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjustedExpirationime = new Date(expirationTime).getTime();
  const remainingDuration = adjustedExpirationime - currentTime;
  return remainingDuration;
};

export const AuthContextProvider = (props) => {
  const intialToken = localStorage.getItem("idToken");
  const intialRole = localStorage.getItem("role");
  const intialDisplayName = localStorage.getItem("displayName");

  const [token, setToken] = useState(intialToken);
  const [role,setRole] = useState(intialRole);
  const [displayName,setDisplayName] = useState(intialDisplayName);
  const userIsLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("idToken");
  };

  const loginHandler = (token, expirationTime,displayName,role) => {
    setDisplayName(displayName);
    setRole(role);
    setToken(token);

    localStorage.setItem("idToken", token);
    localStorage.setItem("role", role);
    localStorage.setItem("displayName", displayName);


    const remainingTime = calculateRemainingTime(expirationTime);

    setTimeout(logoutHandler, remainingTime);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    role:role,
    displayName:displayName
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
