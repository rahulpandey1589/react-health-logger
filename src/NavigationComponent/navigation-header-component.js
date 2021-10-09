import { Link, Route, Switch, Redirect } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useContext } from "react";

import App from "../App";
import HomeComponent from "../HomeComponent/home-component";
import LoginComponent from "../LoginComponent/login-component";
import RegisterComponent from "../LoginComponent/register-component";
import AuthContext from "../Store/auth-context";
import DashboardComponent from "../DashboardComponent/dashboard-component";

import MasterNavigationComponent from "./masters-navigation-component";
import MasterRoutes from "./master-routes";

const NavigationComponent = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const isAdmin = authCtx.role == "admin" ? true : false;

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to={"/dashboard"}>
            Health Logger
          </Navbar.Brand>
          {isLoggedIn && isAdmin && (
            <MasterNavigationComponent></MasterNavigationComponent>
          )}

          <Nav className="justify-content-end">
            {!isLoggedIn && (
              <Nav.Link as={Link} to={"/login"}>
                Login
              </Nav.Link>
            )}
            {!isLoggedIn && (
              <Nav.Link as={Link} to={"/register"}>
                Register
              </Nav.Link>
            )}
            {isLoggedIn && (
              <Nav.Link as={Link} onClick={logoutHandler} to={"/login"}>
                Logout
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route path="/login" component={LoginComponent}></Route>
        <Route path="/register" component={RegisterComponent}></Route>
        <Route path="/home" component={HomeComponent}></Route>
        <Route path="/dashboard" component={DashboardComponent}></Route>
        <MasterRoutes isLoggedIn={isLoggedIn}></MasterRoutes>
        <Route path="*">
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
    </>
  );
};

export default NavigationComponent;
