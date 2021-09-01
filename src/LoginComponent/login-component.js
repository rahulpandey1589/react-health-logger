import { useState } from "react";

const LoginComponent = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const nameChangeHandler = ($event) => setUserName($event.target.value);
  const passwordChangeHandler = ($event) => setPassword($event.target.value);

  const submitFormHandler = ($event) => {
    console.log(process.env);
    $event.preventDefault();
    if (username === "rahulpandey862@gmail.com" && password === "rahul@123") {
      clearState();
    }
  };

  const clearState = () => {
    setUserName("");
    setPassword("");
  };

  return (
      <form onSubmit={submitFormHandler}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-2">
              <label name="username">UserName</label>
              <input
                name="username"
                type="email"
                value={process.env.REACT_APP_NOT_SECRET_CODE}
                onChange={nameChangeHandler}
                className="form-control"
                placeholder="Please Enter UserName"
              />
              <br />
              <label name="password">Password</label>
              <input
                name="password"
                type="password"
                value={password}
                minLength="8"
                maxLength="16"
                onChange={passwordChangeHandler}
                className="form-control"
                placeholder="Please Enter Password"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 offset-4">
              <button type="submit" className="btn btn-success">
                Login
              </button>
              <button type="button" className="btn btn-success">
                Register
              </button>
            </div>
          </div>
        </div>
      </form>
  );
};

export default LoginComponent;
