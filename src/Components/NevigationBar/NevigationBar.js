import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const NevigationBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <NavLink to="/" className="nav-link">
            <Navbar.Brand>Edu Tech</Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav-link" strict to="/">
                home
              </NavLink>
              <NavLink className="nav-link" strict to="/about">
                About
              </NavLink>
              <NavLink className="nav-link" strict to="/services">
                Services
              </NavLink>
              <NavLink className="nav-link" strict to="/teachers">
                Teachers
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NevigationBar;
