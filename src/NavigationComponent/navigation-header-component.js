import App from "../App";
import { Link, Route, Switch } from "react-router-dom";
import HomeComponent from "../HomeComponent/home-component";
import LoginComponent from "../LoginComponent/login-component";
import RegisterComponent from "../LoginComponent/register-component";
import { Navbar, Nav, Container,NavDropdown } from "react-bootstrap";
import TestMasterComponentList from "../MastersComponent/testmaster-component";

const NavigationComponent = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to={"/"}>
            Health Logger
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavDropdown title="Masters" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to={'/masters/list-all-test'}>Test</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Link as={Link} to={"/login"}>
              Login
            </Nav.Link>
            <Nav.Link as={Link} to={"/register"}>
              Register
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route path="/login" component={LoginComponent}></Route>
        <Route path="/register" component={RegisterComponent}></Route>
        <Route path="/home" component={HomeComponent}></Route>
        <Route path="/masters/list-all-test" component={TestMasterComponentList}></Route>
      </Switch>
    </>
  );
};

export default NavigationComponent;
