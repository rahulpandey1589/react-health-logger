import { useState } from "react";
import ButtonComponent from "../../SharedComponent/button-component";
import firebase from "../../firebase";
import CategoryListComponent from "./list-category";
import { Accordion } from "react-bootstrap";
import classes from './add-category.css'

const AddCategoryComponent = () => {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const categoryDbRef = firebase.ref("Category");

  const categoryChangeHandler = ($event) => {
    setCategory($event.target.value);
  };

  const descriptionChangeHandler = ($event) =>{
    setDescription($event.target.value);
  }

  const addCategory = () => {
    let categoryData = {
      CategoryName: category,
      Description:description,
      IsActive: true,
    };
    categoryDbRef.push(categoryData);

    clear();
  };

  const clear=() =>{
    setCategory('');
    setDescription('');
  }

  return (
    <>
      <div className="container-center">
        <div className="row">
          <div className="col-md-3">
            <label for="category">Category Name</label>
          </div>
          <div className="col-md-5">
            <input
              className="form-control"
              type="text"
              value={category}
              onChange={categoryChangeHandler}
              placeholder="Please enter category name"
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label for="category">Category Description</label>
          </div>
          <div className="col-md-5">
            <input
              className="form-control"
              type="text"
              value={description}
              onChange={descriptionChangeHandler}
              placeholder="Please enter category description"
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 offset-6">
            <ButtonComponent
              label="Add Category"
              className="btn btn-success"
              onButtonClick={addCategory}
            ></ButtonComponent>
          </div>
        </div>
        <div className="row"></div>
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
