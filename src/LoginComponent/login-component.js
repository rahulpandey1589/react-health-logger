import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";

import AuthContext from "../Store/auth-context";
import "./login-component.css";
import axios from "../Services/axios";
import AlertComponent from "../SharedComponent/alert";

const validate = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length > 250) {
    errors.username = "Username should be less than 250 characters.";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)
  ) {
    errors.username = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 5) {
    errors.password = "Password should be atleast 5 chracters long";
  } else if (values.password > 15) {
    errors.password = "Password should be less than  15 chracters long";
  }
  return errors;
};

const LoginComponent = () => {
  const authContext  = useContext(AuthContext);
  const history= useHistory();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      submitLoginForm(values);
    },
  });

  const submitLoginForm = (values) => {
    const { username, password } = values;
    const data = { username: username, password: password };
    axios
      .post("/auth/authenticate", data)
      .then((data) => {
        const { token, expiresIn, displayName, role } = data.data.response;

        if (data.data.success) {
          const expirationTime = new Date(
            new Date().getTime() + +expiresIn * 1000
          );
          authContext.login(
            token,
            expirationTime.toISOString(),
            displayName,
            role
          );
          history.push("/dashboard");
        }
      })
      .catch((error) => {
        let errorMessages = error.data.errors;
        let errorList = [];
        errorMessages.forEach((element) => {
          errorList.push(element.msg);
        });
      });
  };

  return (
    <>
      <div className="container center">
        <form onSubmit={formik.handleSubmit}>
          <div className="row col-md-4 offset-2">
            <label name="username">UserName</label>
            <input
              id="username"
              name="username"
              type="text"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control"
              placeholder="Please Enter UserName"
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="error">{formik.errors.username}</div>
            ) : null}
            <br />
            <label name="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control"
              placeholder="Please Enter Password"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>
          <br />
          <div className="row">
            <div className="col-md-4 offset-4">
              <button
                disabled={!formik.isValid}
                type="submit"
                className="btn btn-primary"
              >
                Login
              </button>
              <a href="www.google.com">Forgot Password</a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginComponent;
