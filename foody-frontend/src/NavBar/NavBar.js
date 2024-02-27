import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import LogoutButton from "../LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../LoginButton";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  const { isAuthenticated, user } = useAuth0();
  return (
    <Navbar
      bg="success"
      // data-bs-theme="dark"
      style={{ backgroundColor: "green" }}
      expand="lg"
      className="bg-body-tertiary sticky-top"
    >
      <Container>
        <Navbar.Brand>
          <NavLink
            style={{
              fontWeight: "bold",
              left: 0,
              color: "green",
              textDecoration: "none",
            }}
            to="/"
          >
            Foody{" "}
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ right: 0 }}>
          <Nav className="me-auto">
            <Nav.Link></Nav.Link>

            {isAuthenticated ? (
              <>
                <NavDropdown
                  title={` ${isAuthenticated ? user.nickname : ""} Profile`}
                >
                  <NavDropdown.Item>
                    <NavLink to="/profile/recipes"> Recipes</NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink to="/profile/exercises"> Exercises</NavLink>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Search By" id="basic-nav-dropdown">
                  <NavDropdown.Item className="NavBar-link">
                    <NavLink to="/search/nutrients">Nutrients</NavLink>
                  </NavDropdown.Item>

                  <NavDropdown.Item>
                    <NavLink to="/search/ingredients">Ingredients </NavLink>
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="">
                  <NavLink
                    className="secondary"
                    style={{ textDecoration: "none", color: "grey" }}
                    to="/exercises"
                  >
                    {" "}
                    Exercises{" "}
                  </NavLink>
                </Nav.Link>
              </>
            ) : (
              ""
            )}
          </Nav>
          <Nav.Link>
            {!isAuthenticated ? <LoginButton /> : <LogoutButton />}
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
