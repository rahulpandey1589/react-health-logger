import { useState } from "react";
import ButtonComponent from "../SharedComponent/button-component";
import customAxios from "../Services/axios";
import AlertComponent from "../SharedComponent/alert";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  const { username, password, confirmPassword } = values;

  if (!username) {
    errors.username = "Username is required.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(username)) {
    errors.username = "Invalid email address";
  }

  if (!password) {
    errors.password = "Password is required";
  } else if (password.length < 5 || password.length > 15) {
    errors.password =
      "Password should be greater than 5 characters and should be less than 15.";
  }

  if (!confirmPassword) {
    errors.confirmPassword = "Confirm Password is mandatory";
  } else if (confirmPassword !== password) {
    errors.confirmPassword =
      "Password and Confirm Password should match with each other.";
  }

  return errors;
};

const RegisterComponent = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState(false);
  const [variant, setVariant] = useState("");

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
    validate,
    onSubmit: (values) => {
      submitForm(values);
    },
  });

  const submitForm = (values) => {
    const { username, password, confirmPassword } = values;

    const data = {
      username: username,
      password: password,
      confirmPassword: confirmPassword,
    };
    customAxios
      .post("/auth/register", data)
      .then((response) => {
        setVariant("success");
        let errorList = [];
        errorList.push("User Created Gracefully!!!");
        setAlertMessage(errorList);
      })
      .catch((error) => {
        let errorMessages = error.data.errors;
        let errorList = [];
        errorMessages.forEach((element) => {
          errorList.push(element.msg);
        });
        setAlertMessage(errorList);
        setShowAlert(true);
        setVariant("danger");
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
        <form onSubmit={formik.handleSubmit}>
          <div className="row col-md-4 offset-2">
            <label htmlFor="username">UserName</label>
            <input
              name="username"
              type="text"
              id="username"
              placeholder="Please Enter UserName"
              className="form-control"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="error">{formik.errors.username}</div>
            ) : null}
            <br />
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              id="password"
              placeholder="Please Enter Password"
              className="form-control"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.username && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
            <br />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              name="confirmPassword"
              type="password"
              id="confirmPassword"
              placeholder="Please Enter Email Address"
              className="form-control"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.username && formik.errors.confirmPassword ? (
              <div className="error">{formik.errors.confirmPassword}</div>
            ) : null}
          </div>
          <br />
          <div className="row col-md-4 offset-2">
            <ButtonComponent
              label="Register"
              className="btn btn-primary"
              isDisabled={!formik.isValid}
              onButtonClick={formik.handleSubmit}
            ></ButtonComponent>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterComponent;
