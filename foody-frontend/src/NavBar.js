import React from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";

const NavBar = () => {
  const { isAuthenticated, user } = useAuth0();
  return (
    <Navbar
      // bg="dark"
      // data-bs-theme="dark"
      style={{ backgroundColor: "green" }}
      expand="lg"
      className="bg-body-tertiary sticky-top"
    >
      <Container>
        <Navbar.Brand
          href="/"
          variant="success"
          style={{ fontWeight: "bold", left: 0, color: "green" }}
        >
          Foody
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ right: 0 }}>
          <Nav className="me-auto">
            {isAuthenticated ? (
              <>
                <Nav.Link title="Profile" href="/profile">
                  {isAuthenticated ? user.nickname : ""} Profile
                </Nav.Link>
                {/*isAuthenticated ? <img src={user.picture} alt={user.name} /> : ""*/}

                <Nav.Link></Nav.Link>
                <NavDropdown title="Search By" id="basic-nav-dropdown">
                  <NavDropdown.Item
                    href="/search/nutrients"
                    element={<NavLink to="/search/nutrients" />}
                  >
                    Nutrients
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    href="/search/ingredients"
                    element={<NavLink to="/search/ingrediens" />}
                  >
                    Ingredients
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/exercises"> Exercises </Nav.Link>
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
