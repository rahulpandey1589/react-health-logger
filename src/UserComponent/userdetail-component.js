import jwt_decode from "jwt-decode";
import { useContext, useEffect } from "react";
import AuthContext from "../Store/auth-context";
import customAxios from "../Services/axios";
import { useFormik } from "formik";

const UserDetailComponent = () => {
  const context = useContext(AuthContext);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    const jwtToken = context.token;
    const decodedToken = jwt_decode(jwtToken);
    const userId = decodedToken.id;

    customAxios
      .get(`users/find?id=${userId}`)
      .then((response) => {
        if (response.data.success) {
          const { first_name, last_name,username } = response.data.data;
        
          formik.setValues({
            firstName:first_name,
            lastName:last_name
          });

          formik.setValues({
            username:username
          })
        }
      })
      .catch((error) => {});
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      dob: "",
      username: "",
    },
  });

  return (
    <>
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
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <label htmlFor="dob">Date of Birth</label>
            <input
              id="dob"
              name="dob"
              type="text"
              value={formik.values.dob}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control"
              placeholder="Please Enter Date of Birth"
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
      </div>
    </>
  );
};

export default UserDetailComponent;
