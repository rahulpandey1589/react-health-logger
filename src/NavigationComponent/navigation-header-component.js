import App from "../App";
import { Link, Route, Switch } from "react-router-dom";
import HomeComponent from "../HomeComponent/home-component";
import LoginComponent from "../LoginComponent/login-component";
import RegisterComponent from "../LoginComponent/register-component";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import ListExistingTestComponent from "../MastersComponent/list-test";
import AddNewTestComponent from "../MastersComponent/add-test";
import AddCategoryComponent from "../MastersComponent/CategoryMasterComponent/add-category";

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
              <NavDropdown.Item as={Link} to={"/masters/create-new-test"}>
                Create New Test
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/masters/list-all-test"}>
                List All Test
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to={"/masters/add-category"}>
                Add New Category
              </NavDropdown.Item>
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
        <Route
          path="/masters/create-new-test"
          component={AddNewTestComponent}
        ></Route>
        <Route
          path="/masters/list-all-test"
          component={ListExistingTestComponent}
        ></Route>
         <Route
          path="/masters/add-category"
          component={AddCategoryComponent}
        ></Route>
      </Switch>
    </>
  );
};

export default NavigationComponent;
