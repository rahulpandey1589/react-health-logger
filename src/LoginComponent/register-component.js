import { useState } from "react";
import ButtonComponent from "../SharedComponent/button-component";
import customAxios from "../Services/axios";

const RegisterComponent = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ($event) => {
    $event.preventDefault();

    const { name, value } = $event.target;

    switch (name) {
      case "firstName":
        setFirstName(value);
        break;

      case "lastname":
        setLastName(value);
        break;

      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;
    }
  };

  const onClickHandler = () => {
    const data = {
      first_name: firstname,
      last_name: lastname,
      username: email,
      password: password,
    };
    customAxios
      .post("/auth/register", data)
      .then((response) => {

      })
      .catch((error) => {
        
      });
  };

  return (
    <div className="container center">
      <form>
        <div className="row col-md-4 offset-2">
          <label htmlFor="username">First Name</label>
          <input
            name="firstName"
            type="text"
            placeholder="Please Enter FirstName"
            className="form-control"
            onChange={handleChange}
          />
          <br />
          <label htmlFor="lastName">Last Name</label>
          <input
            name="lastName"
            type="text"
            placeholder="Please Enter LastName"
            className="form-control"
            onChange={handleChange}
          />
          <br />
          <label htmlFor="email">Email Address</label>
          <input
            name="email"
            type="text"
            placeholder="Please Enter Email Address"
            className="form-control"
            onChange={handleChange}
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            htmlFor="password"
            type="password"
            placeholder="Please Enter Password"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <br />
        <div className="row col-md-4 offset-2">
          <ButtonComponent
            label="Register"
            className="btn btn-success"
            onButtonClick={onClickHandler}
          ></ButtonComponent>
        </div>
      </form>
    </div>
  );
};

export default RegisterComponent;
