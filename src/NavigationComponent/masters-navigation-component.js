import { Link, Route } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";
import { useContext } from "react";
import AuthContext from "../Store/auth-context";

const MasterNavigationComponent = () => {
  const context = useContext(AuthContext);
  debugger;
  const isAdmin = context.role == "admin" ? true : false;
  return (
    <>
      {isAdmin && (
        <Nav className="me-auto">
          <NavDropdown title="Masters" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to={"/masters/create-new-test"}>
              Test Master
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to={"/masters/add-category"}>
              Category Master
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      )}
    </>
  );
};

export default MasterNavigationComponent;
