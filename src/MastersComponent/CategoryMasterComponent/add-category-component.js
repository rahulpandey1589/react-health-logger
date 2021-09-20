import { Accordion } from "react-bootstrap";

import CategoryListComponent from "./list-category";
import CategoryComponent from "./category-component";

const AddCategoryComponent = () => {
  return (
    <>
      <div className="container-fluid">
        <CategoryComponent actionName="Add Category"></CategoryComponent>
        <div className="row">
          <div className="col-8">
            <hr />
            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey="1">
                <Accordion.Header>List Categories</Accordion.Header>
                <Accordion.Body>
                  <CategoryListComponent></CategoryListComponent>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCategoryComponent;
