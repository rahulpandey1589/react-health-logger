import jwt_decode from "jwt-decode";
import { useContext, useEffect } from "react";
import AuthContext from "../Store/auth-context";
import customAxios from "../Services/axios";
import InputComponent from "../SharedComponent/input-component";

const UserDetailComponent = () => {
  const context = useContext(AuthContext);
  let firstName, lastName;

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
          const { first_name, last_name } = response.data.data;
          document.getElementById("txtFirstName").value = first_name;
          document.getElementById("txtLastName").value = last_name;
        }
      })
      .catch((error) => {});
  };

  const handleChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;

    switch (name) {
      case "firstname":
        firstName = value;
        break;
      case "lastname":
        lastName = value;
        break;
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <label htmlFor="txtFirstName">First Name</label>
            <InputComponent
              className="form-control"
              id="txtFirstName"
              name="firstName"
              getInputValue={handleChange}
            ></InputComponent>
          </div>
          <div className="col-4">
            <label htmlFor="txtLastName">Last Name</label>
            <InputComponent
              id="txtLastName"
              className="form-control"
              name="lastname"
              getInputValue={handleChange}
            ></InputComponent>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <label htmlFor="txtDOB">Date of Birth</label>
            <InputComponent
              className="form-control"
              id="txtDOB"
              name="dateofbirth"
              getInputValue={handleChange}
            ></InputComponent>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetailComponent;
