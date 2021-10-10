import { Route } from "react-router-dom";

import UserDetailComponent from "../UserComponent/userdetail-component";
import ChangePasswordComponent from "../UserComponent/change-password-component";

const UserDetailRoutes = (props) => {
  const { isLoggedIn } = props;

  return (
    <>
      <Route path="/user/details" component={UserDetailComponent}></Route>
      <Route
        path="/user/change-password"
        component={ChangePasswordComponent}
      ></Route>
    </>
  );
};

export default UserDetailRoutes;
