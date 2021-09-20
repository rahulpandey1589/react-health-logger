const RegisterComponent = () => {
  return (
    <div className="container center">
      <form>
        <div className="row col-md-4 offset-2">
          <label htmlFor="username">First Name</label>
          <input
            name="firstName"
            type="text"
            placeholder="Please Enter FirstName"
            className="form-control"
          />
          <br />
          <label htmlFor="lastName">Last Name</label>
          <input
            name="lastName"
            type="text"
            placeholder="Please Enter LastName"
            className="form-control"
          />
          <br />
          <label htmlFor="email">Email Address</label>
          <input
            name="email"
            type="text"
            placeholder="Please Enter Email Address"
            className="form-control"
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            htmlFor="password"
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
