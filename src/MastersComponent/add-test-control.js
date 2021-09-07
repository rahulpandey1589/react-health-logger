const  AddTestControl = () => {
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
            placeholder="Title"
          ></input>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2">
          <label for="description">Description</label>
        </div>
        <div className="col-md-4">
          <input
            className="form-control"
            type="text"
            name="description"
            placeholder="Please enter description"
          ></input>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2">
          <label for="title">Price</label>
        </div>
        <div className="col-md-4">
          <input
            className="form-control"
            type="number"
            placeholder="Please enter price"
          ></input>
        </div>
      </div>
    </>
  );
};

export default AddTestControl;