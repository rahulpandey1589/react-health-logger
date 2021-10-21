import jwt_decode from "jwt-decode";
import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useFormik } from "formik";
import "react-datepicker/dist/react-datepicker.css";

import AuthContext from "../Store/auth-context";
import customAxios from "../Services/axios";
import ButtonComponent from "../SharedComponent/button-component";
import DropdownComponent from "../SharedComponent/dropdown-component";

const validate = (values) => {
  let errors = {};
  const { gender, firstName, lastName, dob } = values;

  if (!firstName) {
    errors.firstName = "Required";
  } else if (firstName.length < 5 || firstName.length > 15) {
    errors.firstName =
      "Firstname should be greater than 5 characters and less than 15.";
  }

  if (!lastName) {
    errors.lastName = "Required";
  } else if (lastName.length < 5 || lastName.length > 15) {
    errors.firstName =
      "Lastname should be greater than 5 characters and less than 15.";
  }

  // if (gender !== "Male" || gender !== "Female") {
  //   errors.gender = "Please select a valid value from dropdown.";
  // }

  return errors;
};

const UserDetailComponent = () => {
  const context = useContext(AuthContext);
  const jwtToken = context.token;
  const decodedToken = jwt_decode(jwtToken);
  const userId = decodedToken.id;

  const [startDate, setStartDate] = useState();

  const genderItems = [
    {
      value: "Male",
      text: "Male",
    },
    {
      value: "Female",
      text: "Female",
    },
  ];

  const genderChangeHandler = (data) => {
    formik.setFieldValue("gender", data);
  };

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    customAxios
      .get(`users/find?id=${userId}`)
      .then((response) => {
        if (response.data.success) {
          const { first_name, last_name, username, date_of_birth, gender } =
            response.data.data;

          formik.setValues({
            ...formik.values,
            firstName: first_name,
            lastName: last_name,
            username: username,
            dob: date_of_birth,
            gender: gender,
          });

          setStartDate(new Date(1989, 8, 15));
        }
      })
      .catch((error) => {});
  };

  const updateUser = (values) => {
    const data = {
      ...values,
      id:userId
    };

    console.log(data);
    customAxios
      .put("/users/update",data)
      .then((response) => { 
        debugger;
      })
      .catch((error) => {
        debugger;
      });
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      dob: "",
      username: "",
      gender: "",
    },
    validate,
    onSubmit: (values) => {
      updateUser(values);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-4">
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-control"
                placeholder="Please Enter FirstName"
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className="error">{formik.errors.firstName}</div>
              ) : null}
            </div>
            <div className="col-4">
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-control"
                placeholder="Please Enter LastName"
              />
              {formik.touched.lastName && formik.touched.lastName ? (
                <div className="error">{formik.errors.lastName}</div>
              ) : null}
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <label htmlFor="dob">Date of Birth</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="dd/MM/yyyy"
              />
            </div>
            <div className="col-4">
              <label htmlFor="username">UserName</label>
              <input
                id="username"
                name="username"
                type="text"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-control"
                disabled="true"
                placeholder="Please Enter Date of Birth"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <label htmlFor="gender">Gender</label>
              <DropdownComponent
                className="form-select"
                items={genderItems}
                defaultText="Please select gender"
                onChange={genderChangeHandler}
              ></DropdownComponent>
              {formik.touched.gender && formik.touched.gender ? (
                <div className="error">{formik.errors.gender}</div>
              ) : null}
            </div>
            <div className="col-4"></div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <ButtonComponent
                label="Update User Details"
                className="btn btn-primary"
                onButtonClick={formik.handleSubmit}
                type="submit"
              ></ButtonComponent>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default UserDetailComponent;
