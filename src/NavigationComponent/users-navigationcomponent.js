import { Link } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";

const UserNavigationComponent = () => {
  return (
    <>
      <Nav className="me-auto">
        <NavDropdown title="Profile Settings" id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to={"/user/details"}>
            Edit Profile
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to={"/user/change-password"}>
            Change Password
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </>
  );
};


export default UserNavigationComponent;