import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import AuthContext from "../Store/auth-context";
import AlertComponent from "../SharedComponent/alert";
import "./login-component.css";
import { LoginErrorModel } from "../Models/login-model";
import axios from "../Services/axios";

const LoginComponent = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isformValid, setFormValid] = useState(false);
  const history = useHistory();
  const authContext = useContext(AuthContext);
  const displayAlert = false;

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormValid(false);

    switch (name) {
      case "username":
        validateUserName(value);
        setUserName(value);
        break;
      case "password":
        validateUserPassword(value);
        setPassword(value);
        break;
      default:
        break;
    }

    if (
      emailError.length === 0 &&
      passwordError.length === 0 &&
      username.length > 0 &&
      password.length > 0
    ) {
      setFormValid(true);
    }
  };

  const validateUserName = (value) => {
    if (!value.includes("@")) {
      setEmailError("The entered email address is not in correct format.");
    } else {
      setEmailError("");
    }
  };

  const validateUserPassword = (password) => {
    if (password.length <= 5 || password.length > 15) {
      setPasswordError(
        "Password should be greater than 5 character and should be less than 15."
      );
    } else {
      setPasswordError("");
    }
  };

  const handleFormSubmit = ($event) => {
    $event.preventDefault();
    if (!isformValid) {
      return;
    }

    const data = { username: username, password: password };

    axios.post("/auth/authenticate", data).then((response) => {
      const { success, token, expiresIn } = response.data;
      if (success) {
        const expirationTime = new Date(
          new Date().getTime() + +expiresIn * 1000
        );
        authContext.login(token, expirationTime.toISOString());
        history.push("/dashboard");
      } else {
        alert("Invalid Credentials");
      }
    });
    clearState();
  };

  const clearState = () => {
    setUserName("");
    setPassword("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="container center">
        <div className="row col-md-4 offset-2">
          <label name="username">UserName</label>
          <input
            name="username"
            type="text"
            value={username}
            onChange={handleChange}
            className="form-control"
            placeholder="Please Enter UserName"
          />
          {emailError.length > 0 && (
            <span className="span-error">{emailError}</span>
          )}
          <br />
          <label name="password">Password</label>
          <input
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
            className="form-control"
            placeholder="Please Enter Password"
          />
          {passwordError.length > 0 && (
            <span className="span-error">{passwordError}</span>
          )}
        </div>
        <br />
        <div className="row">
          <div className="col offset-2">
            <button
              disabled={!isformValid}
              type="submit"
              className="btn btn-primary"
            >
              Login
            </button>
          </div>
          <div className="col-md-4">
            <a href="www.google.com">Forgot Password</a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2 offset-4">
            {displayAlert && (
              <AlertComponent
                className="alert alert-danger"
                displayText="Please enter"
              ></AlertComponent>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginComponent;
