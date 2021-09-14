import { Route } from "react-router-dom";
import ListExistingTestComponent from "../MastersComponent/TestMasterComponent/list-test";
import AddNewTestComponent from "../MastersComponent/TestMasterComponent/add-test";
import AddCategoryComponent from "../MastersComponent/CategoryMasterComponent/add-category";

const MasterRoutes = (props) => {
  const { isLoggedIn } = props;

  return (
    <>
      {isLoggedIn && (
        <Route
          path="/masters/create-new-test"
          component={AddNewTestComponent}
        ></Route>
      )}
      {isLoggedIn && (
        <Route
          path="/masters/list-all-test"
          component={ListExistingTestComponent}
        ></Route>
      )}
      {isLoggedIn && (
        <Route
          path="/masters/add-category"
          component={AddCategoryComponent}
        ></Route>
      )}
    </>
  );
};

export default MasterRoutes;
