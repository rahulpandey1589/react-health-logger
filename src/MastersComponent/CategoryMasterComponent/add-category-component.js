import { Accordion } from "react-bootstrap";
import firebase from "../../firebase";

import ButtonComponent from "../../SharedComponent/button-component";
import CategoryListComponent from "./list-category";
import CategoryComponent from "./category-component";

const AddCategoryComponent = () => {
  const categoryDbRef = firebase.ref("Category");

  const addCategory = () => {
    // let categoryData = {
    //   CategoryName: category,
    //   Description: description,
    //   IsActive: true,
    // };
    // categoryDbRef.push(categoryData);

    // clear();
  };

  const clear = () => {
    // setCategory("");
    // setDescription("");
  };

  return (
    <>
      <div className="container-center">
        <CategoryComponent></CategoryComponent>
        <div className="row">
          <div className="col-md-4 offset-6">
            <ButtonComponent
              label="Add Category"
              className="btn btn-success"
              onButtonClick={addCategory}
            ></ButtonComponent>
          </div>
        </div>
        <div className="row">
          <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="0">
              <Accordion.Header>List Categories</Accordion.Header>
              <Accordion.Body>
                <CategoryListComponent></CategoryListComponent>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default AddCategoryComponent;
