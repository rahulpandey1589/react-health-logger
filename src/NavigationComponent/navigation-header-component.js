import { Link, Route, Switch } from "react-router-dom";
import LoginComponent from "../LoginComponent/login-component";
import RegisterComponent from "../LoginComponent/register-component";

const NavigationComponent = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={"/login"} className="nav-link">
              Login
            </Link>
          </li>
          <li>
            <Link to={"/register"} className="nav-link">
              Register
            </Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Switch>
        <Route  path="/login" component={LoginComponent}></Route>
        <Route  path="/register" component={RegisterComponent}></Route>
      </Switch>
    </>
  );
};

export default NavigationComponent;
