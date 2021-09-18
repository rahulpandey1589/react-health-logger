import { useState } from "react";
import firebase from "../../firebase";
import ButtonComponent from "../../SharedComponent/button-component";
import CategoryDropdownComponent from "../CategoryMasterComponent/category-dropdown-component";
import TestMasterModel from "../../Models/test-master-model";

const AddTestComponent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const onChangeHandler = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setStateItems(name, value);
  };

  const setStateItems = (name, value) => {
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "price":
        setPrice(value);
        break;
      case "category":
        setCategory(value);
        break;
      default:
        break;
    }
  };

  const addHandler = () => {
    const testMasterRef = firebase.ref("TestMaster");
    let data = new TestMasterModel(title, description, category, price);
    console.log(data);
    testMasterRef.push(data);
  };

  const categoryChangeHandler = (data) => {
    setCategory(data);
  };

  return (
    <>
      <div className="row">
        <div className="col-md-8 offset-2">
          <div className="col-md-4">
            <label htmlFor="category">Category</label>
          </div>
          <div className="col-md-4">
            <CategoryDropdownComponent
              onChange={categoryChangeHandler}
            ></CategoryDropdownComponent>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 offset-2">
          <div className="col-md-4">
            <label htmlFor="title">Title</label>
          </div>
          <div className="col-md-4">
            <input
              className="form-control"
              name="title"
              type="text"
              value={title}
              onChange={onChangeHandler}
              placeholder="Title"
            ></input>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 offset-2">
          <div className="col-md-2">
            <label htmlFor="description">Description</label>
          </div>
          <div className="col-md-4">
            <input
              className="form-control"
              type="text"
              name="description"
              value={description}
              onChange={onChangeHandler}
              placeholder="Please enter description"
            ></input>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 offset-2">
          <div className="col-md-2">
            <label htmlFor="title">Price</label>
          </div>
          <div className="col-md-4">
            <input
              className="form-control"
              type="number"
              name="price"
              value={price}
              onChange={onChangeHandler}
              placeholder="Please enter price"
            ></input>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 offset-2">
          <div className="col-md-4">
            <br/>
            <ButtonComponent
              label="Add New"
              className="btn btn-success"
              onButtonClick={addHandler}
            ></ButtonComponent>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTestComponent;
