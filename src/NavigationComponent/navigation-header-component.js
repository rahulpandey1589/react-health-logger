import { Link, Route, Switch } from "react-router-dom";
import HomeComponent from "../HomeComponent/home-component";
import LoginComponent from "../LoginComponent/login-component";
import RegisterComponent from "../LoginComponent/register-component";

import { Navbar, Nav, Container } from "react-bootstrap";
import App from "../App";

const NavigationComponent = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Health Logger</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="#home">Home</Nav.Link>
            <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
            <Nav.Link as={Link} to={"/register"}>Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Switch>
        <Route path="/login" component={LoginComponent}></Route>
        <Route path="/register" component={RegisterComponent}></Route>
        <Route path="/home" component={HomeComponent}></Route>
      </Switch>
    </>
  );
};

export default NavigationComponent;
