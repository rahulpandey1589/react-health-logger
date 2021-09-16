import { Link, Route } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";

const MasterNavigationComponent = () => {
  return (
    <>
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
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </>
  );
};

export default MasterNavigationComponent;