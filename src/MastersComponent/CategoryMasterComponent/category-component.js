import { useState } from "react";

const CategoryComponent = () => {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const categoryChangeHandler = ($event) => {
    setCategory($event.target.value);
  };

  const descriptionChangeHandler = ($event) => {
    setDescription($event.target.value);
  };
  return (
    <>
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
      
    </>
  );
};

export default CategoryComponent;
