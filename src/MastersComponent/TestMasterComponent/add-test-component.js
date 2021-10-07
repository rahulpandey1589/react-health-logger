import { useState, useCallback } from "react";

import axios from "../../Services/axios";
import ButtonComponent from "../../SharedComponent/button-component";
import CategoryDropdownComponent from "../CategoryMasterComponent/category-dropdown-component";

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
    const testData = {
      title: title,
      description: description,
      categoryId: category,
      price: price,
    };
    axios.post("/masters/test", testData).then((data) => {
      debugger;
    });
  };

  const categoryChangeHandler = (data) => {
    setCategory(data);
  };

  return (
    <>
      <div className="row">
        <div className="col-4">
          <label htmlFor="category">Category</label>
          <CategoryDropdownComponent
            onChange={categoryChangeHandler}
          ></CategoryDropdownComponent>
        </div>
        <div className="col-4">
          <label htmlFor="title">Title</label>
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
      <div className="row">
        <div className="col-4">
          <label htmlFor="description">Description</label>
          <input
            className="form-control"
            type="text"
            name="description"
            value={description}
            onChange={onChangeHandler}
            placeholder="Please enter description"
          ></input>
        </div>
        <div className="col-4">
          <label htmlFor="title">Price</label>
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
      <br />
      <div className="row">
        <div className="col">
          <ButtonComponent
            label="Add New"
            className="btn btn-success"
            onButtonClick={addHandler}
          ></ButtonComponent>
        </div>
      </div>
    </>
  );
};

export default AddTestComponent;
