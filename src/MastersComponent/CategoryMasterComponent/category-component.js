import firebase from "../../firebase";
import { useEffect } from "react";

import ButtonComponent from "../../SharedComponent/button-component";
import InputComponent from "../../SharedComponent/input-component";

const categoryDbRef = firebase.ref("Category");

const CategoryComponent = (props) => {
  const { actionName, categoryId } = props;
  
  let cName, cDescription;

  useEffect(() => {
    if (categoryId !== undefined) {
      console.log("Fetch Category Loaded!!!!");
      fetchCategoryById();
    }
  }, [categoryId]);

  const handlerChange = ($value) => {
    debugger;
    const { key, value } = $value;
    switch (key) {
      case "name":
        cName = value;
        break;
      case "description":
        cDescription = value;
        break;
      default:
        break;
    }

  };

  const fetchCategoryById = () => {
    if (categoryId === undefined) {
      console.error("Invalid Category Id found");
      return;
    }

    categoryDbRef.child(categoryId).once("value", function (data) {
       const { CategoryName, Description, IsActive } = data.val();
       document.getElementById('txtCategory').value = CategoryName;
       document.getElementById('txtCategoryDesc').value = Description;
    });
  };

  const addCategory = () => {
    debugger;
    let categoryData = {
      CategoryName: cName,
      Description: cDescription,
      IsActive: true,
    };
    categoryDbRef.push(categoryData);
    clear();
  };

  const updateCategory = () => {
    debugger;
    firebase.ref("Category").update({
      CategoryName: cName,
      Description: cDescription,
      IsActive: true
    });
    clear();
  };

  const clear = () => {
    // setCategory("");
    // setDescription("");
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
            id="txtCategory"
            name="name"
            placeholder="Please enter category name"
            getInputValue={handlerChange}
            renderedValue={cName}
          ></InputComponent>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <label for="category">Category Description</label>
        </div>
        <div className="col-md-5">
          <InputComponent
            id="txtCategoryDesc"
            className="form-control"
            name="description"
            placeholder="Please enter category description"
            getInputValue={handlerChange}
            renderedValue={cDescription}
          ></InputComponent>
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
