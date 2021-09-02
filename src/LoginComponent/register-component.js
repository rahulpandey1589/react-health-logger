const RegisterComponent = () => {
  return (
    <div className="container-fluid">
      <form>
        <div className="row col-md-4 offset-2">
          <label for="username">UserName</label>
          <input
            name="username"
            type="text"
            placeholder="Please Enter UserName"
            className="form-control"
          />
          <br />
          <label for="password">Password</label>
          <input
            for="password"
            type="password"
            placeholder="Please Enter Password"
            className="form-control"
          />
        </div>
        <br />
        <div className="row col-md-4 offset-2">
           <button className="btn btn-primary">
             Register
           </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterComponent;
