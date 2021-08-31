const LoginComponent = () => {
  return (
    <>
      <form>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <label name="username">UserName</label>
              <input
                name="username"
                type="text"
                id="username"
                className="form-control"
                placeholder="Please Enter UserName"
              />
              <br />
              <label name="password">Password</label>
              <input
                name="password"
                type="password"
                id="password"
                className="form-control"
                placeholder="Please Enter UserName"
              />
              <br />
              <button type="submit" className="btn btn-primary">Login</button> &nbsp;
              <button type="button" className="btn btn-primary">Forgot Password</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginComponent;
