import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar expand="lg" bg="light" variant="light" className="py-3">
      <Container>
        
        <Navbar.Brand href="#">
          <img src="./logo.png" alt="Logo" height="40" className="me-2" />
          E-Banking
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="home" className="mx-3">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="about" className="mx-3">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="services" className="mx-3">
              Contact
            </Nav.Link>
          </Nav>
          <div className="d-flex">
            <Button variant="outline-dark" className="me-2" as={Link} to="login">
              Login
            </Button>
            <Button variant="primary" as={Link} to="registration">Register</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
