import { Route } from "react-router-dom";

import ListExistingTestComponent from "../MastersComponent/TestMasterComponent/list-test-component";
import AddCategoryComponent from "../MastersComponent/CategoryMasterComponent/add-category-component";
import EditCategoryComponent from "../MastersComponent/CategoryMasterComponent/edit-category-component";
import TestComponent from "../MastersComponent/TestMasterComponent/test-component";


const MasterRoutes = (props) => {
  const { isLoggedIn } = props;

  return (
    <>
      {isLoggedIn && (
        <Route
          path="/masters/create-new-test"
          component={TestComponent}
        ></Route>
      )}
      {isLoggedIn && (
        <Route
          path="/masters/add-category"
          component={AddCategoryComponent}
        ></Route>
      )}
      <Route
        path="/masters/edit-category/:categoryId"
        component={EditCategoryComponent}
      ></Route>
    </>
  );
};

export default MasterRoutes;
