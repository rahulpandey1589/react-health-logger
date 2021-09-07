import { useState } from "react";
import ButtonComponent from "../../SharedComponent/button-component";
import firebase from "../../firebase";
import CategoryListComponent from "./list-category";

const AddCategoryComponent = () => {
  const [category, setCategory] = useState("");

  const categoryDbRef = firebase.ref("Category");

  const categoryChangeHandler = ($event) => {
    setCategory($event.target.value);
  };

  const addCategory = () => {
    let categoryData = {
      CategoryName: category,
      IsActive: true,
    };
    categoryDbRef.push(categoryData);
  };

  return (
    <>
      <div className="container">
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
          <div className="col-md-4 offset-6">
            <ButtonComponent
              label="Add Category"
              className="btn btn-success"
              onButtonClick={addCategory}
            ></ButtonComponent>
          </div>
        </div>
        <div className="row">
          <CategoryListComponent></CategoryListComponent>
        </div>
      </div>
    </>
  );
};

export default AddCategoryComponent;
