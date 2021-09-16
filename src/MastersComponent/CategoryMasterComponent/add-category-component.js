import { Accordion } from "react-bootstrap";

import CategoryListComponent from "./list-category";
import CategoryComponent from "./category-component";

const AddCategoryComponent = () => {
 
  return (
    <>
      <div className="container-center">
        <CategoryComponent actionName="Add Category"></CategoryComponent>
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
