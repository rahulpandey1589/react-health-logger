import { useState } from "react";
import ButtonComponent from "../SharedComponent/button-component";
import customAxios from "../Services/axios";
import AlertComponent from "../SharedComponent/alert";

const RegisterComponent = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState(false);
  const [variant,setVariant] = useState('');

  const handleChange = ($event) => {
    $event.preventDefault();

    const { name, value } = $event.target;

    switch (name) {
      case "username":
        setUserName(value);
        break;

      case "password":
        setPassword(value);
        break;

      case "confirmpassword":
        setConfirmPassword(value);
        break;
    }
  };

  const onClickHandler = () => {
    const data = {
      username: username,
      password: password,
      confirmPassword:confirmPassword
    };
    customAxios
      .post("/auth/register", data)
      .then((response) => {
        setVariant('success');
        let errorList = [];
        errorList.push('User Created Gracefully!!!');
        setAlertMessage(errorList);

      })
      .catch((error) => {
        debugger;
        let errorMessages = error.data.errors;
        let errorList = [];
        errorMessages.forEach((element) => {
          errorList.push(element.msg);
        });
        setAlertMessage(errorList);
        setShowAlert(true);
        setVariant('danger');
      });
  };

  return (
    <>
      <div className="alertBox">
        {showAlert && (
          <AlertComponent
            variant={variant}
            errors={alertMessage}
          ></AlertComponent>
        )}
      </div>
      <div className="container center">
        <form>
          <div className="row col-md-4 offset-2">
            <label htmlFor="username">UserName</label>
            <input
              name="username"
              type="text"
              placeholder="Please Enter UserName"
              className="form-control"
              onChange={handleChange}
            />
            <br />
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Please Enter Password"
              className="form-control"
              onChange={handleChange}
            />
            <br />
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              name="confirmpassword"
              type="password"
              placeholder="Please Enter Email Address"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="row col-md-4 offset-2">
            <ButtonComponent
              label="Register"
              className="btn btn-primary"
              onButtonClick={onClickHandler}
            ></ButtonComponent>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterComponent;
