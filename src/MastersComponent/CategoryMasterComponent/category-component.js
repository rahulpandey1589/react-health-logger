import firebase from "../../firebase";
import { useState, useEffect } from "react";

import ButtonComponent from "../../SharedComponent/button-component";
import InputComponent from "../../SharedComponent/input-component";

const categoryDbRef = firebase.ref("Category");

const CategoryComponent = (props) => {
  const { actionName, categoryId } = props;

  useEffect(() => {
    if (categoryId !== undefined) {
      console.log("Fetch Category Loaded!!!!");
      fetchCategoryById();
    }
  }, [categoryId]);

  const categoryName = ($value) => {
    cName = $value;
  };

  const descriptionChangeHandler = ($event) => {
    setDescription($event.target.value);
  };

  const fetchCategoryById = () => {
    if (categoryId === undefined) {
      console.error("Invalid Category Id found");
      return;
    }

    categoryDbRef.child(categoryId).once("value", function (data) {
      const { CategoryName, Description, IsActive } = data.val();
      setCategory(CategoryName);
      setDescription(Description);
    });
  };

  const addCategory = () => {
    debugger;
    let categoryData = {
      CategoryName: cName,
      Description: description,
      IsActive: true,
    };
    categoryDbRef.push(categoryData);
    clear();
  };

  const updateCategory = () => {};

  const clear = () => {
    setCategory("");
    setDescription("");
  };

  const onClickHandler = () => {
    if (actionName === "Add Category") {
      addCategory();
    } else {
      updateCategory();
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-md-3">
          <label for="category">Category Name</label>
        </div>
        <div className="col-md-5">
          <InputComponent
            className="form-control"
            placeholder="Please enter category name"
            getInputValue={inputValueHandler}
          ></InputComponent>
          {/* <input
            className="form-control"
            type="text"
            value={category}
            onChange={categoryChangeHandler}
            placeholder="Please enter category name"
          ></input> */}
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <label for="category">Category Description</label>
        </div>
        <div className="col-md-5">
          <InputComponent
            className="form-control"
            placeholder="Please enter category description"
            getInputValue={inputValueHandler}
          ></InputComponent>
          {/* <input
            className="form-control"
            type="text"
            value={description}
            onChange={descriptionChangeHandler}
            placeholder="Please enter category description"
          ></input> */}
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 offset-6">
          <ButtonComponent
            label={actionName}
            className="btn btn-success"
            onButtonClick={onClickHandler}
          ></ButtonComponent>
        </div>
      </div>
    </>
  );
};

export default CategoryComponent;
