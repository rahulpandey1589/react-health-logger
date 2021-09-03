import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./login-component.css";

const LoginComponent = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const history = useHistory();

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

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
  };

  const validateUserName = (value) => {
    if (!value.includes("@")) {
      setEmailError("The entered email address is not in correct format.");
    } else {
      setEmailError("");
      console.log(`Email error count is ${emailError.length}`);
    }
  };

  const validateUserPassword = (password) => {
    if (password.length < 5 || password.length > 15) {
      setPasswordError(
        "Password should be greater than 5 character and should be less than 15."
      );
    } else {
      setPasswordError("");

      console.log(`Email error count is ${passwordError.length}`);
    }
  };

  const handleFormSubmit = ($event) => {
    $event.preventDefault();
    fetch(
      `${process.env.REACT_APP_LOGIN_URL}${process.env.REACT_APP_API_KEY}`,
      {
        method: "POST",
        body: JSON.stringify({
          email: username,
          password: password,
          returnSecureToken: true,
        }),
      }
    )
      .then(async (data) => {
        let response = await data.json();
        if (response.ok) {
          history.push("/home");
        }
      })
      .catch((error) => {});

    clearState();
  };

  const clearState = () => {
    setUserName("");
    setPassword("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="container-fluid">
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
        <div className="row col-md-4 offset-2">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
        <div className="row">
          <div className="col-md-4 offset-4"></div>
        </div>
      </div>
    </form>
  );
};

export default LoginComponent;
