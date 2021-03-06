import { Link } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";

const MasterNavigationComponent = () => {
  return (
    <>
      <Nav className="me-auto">
        <NavDropdown title="Masters" id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to={"/masters/create-new-test"}>
            Test Master
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to={"/masters/add-category"}>
            Category Master
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </>
  );
};

export default MasterNavigationComponent;
