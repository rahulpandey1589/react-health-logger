import { useState } from "react";
import firebase from "../firebase";

const AddTestControl = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const onChangeHandler = (event) => {
    event.preventDefault();
    
    const { name, value } = event.target;
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

  const add = () => {
    const testMasterRef = firebase.ref("TestMaster");
    testMasterRef.push("");
  };

  return (
    <>
      <div className="row">
        <div className="col-md-2">
          <label for="category">Category</label>
        </div>
        <div className="col-md-4">
          <select className="form-select" aria-label="Default select example">
            <option selected>Please select category</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2">
          <label for="title">Title</label>
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
      <div className="row">
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
      <div className="row">
        <div className="col-md-2">
          <label htmlFor="title">Price</label>
        </div>
        <div className="col-md-4">
          <input
            className="form-control"
            type="number"
            value={price}
            onChange={onChangeHandler}
            placeholder="Please enter price"
          ></input>
        </div>
      </div>
    </>
  );
};

export default AddTestControl;
