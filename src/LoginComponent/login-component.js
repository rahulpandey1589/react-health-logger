import { useState } from "react";

const LoginComponent = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  let errors = {
    username: "",
    password: "",
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    switch (name) {
      case "username":
        setUserName(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const validate = () =>{
    let userNameError="";

    if(!username.includes('@')){
      userNameError='Invalid email';
    }
  }

  const handleFormSubmit = ($event) => {
    $event.preventDefault();
    
  };

  const clearState = () => {
    setUserName("");
    setPassword("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 offset-2">
            <label name="username">UserName</label>
            <input
              name="username"
              type="text"
              value={username}
              onChange={handleChange}
              className="form-control"
              placeholder="Please Enter UserName"
            />
            {errors.username.length > 0 && <span>{errors.username}</span>}
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
            {errors.password.length > 0 && <span>{errors.password}</span>}
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
