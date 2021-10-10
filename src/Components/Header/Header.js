import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { MdExitToApp } from "react-icons/md";
import "./Header.css";
import { UserContext } from "./../../App";

const Header = () => {
  const { user } = useContext(UserContext);

  const [loggedInUser, setLoggedInUser] = user;
  return (
    <Navbar>
      <Container>
        {/* <Navbar.Brand></Navbar.Brand> */}
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/" className="header-menu">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/appointment" className="header-menu">
            appointment
          </Nav.Link>
          <Nav.Link className="header-menu">Pricing</Nav.Link>
        </Nav>

        <Nav className="ms-auto">
          {loggedInUser.isSigned ? (
            <Nav.Link className="header-menu text-light">
              <div>
                <FaUserAlt className="loggedInUserIcon" />
                <span>{loggedInUser.name || "MHRakib"}</span>
                <MdExitToApp className="logoutIcon" />
              </div>
            </Nav.Link>
          ) : (
            <Nav.Link
              as={Link}
              to="/login"
              className="header-menu admin-button"
            >
              Login
            </Nav.Link>
          )}
          <Nav.Link as={Link} to="/admin" className="header-menu admin-button">
            Admin
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
