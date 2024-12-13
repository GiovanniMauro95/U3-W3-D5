import React from "react";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const MyNavbar = () => {
  return (
    <Navbar bg="dark" expand="lg" className="shadow-sm custom-navbar">
      <Container className="my-0">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <h2 className="me-2">
          <i class="bi bi-apple"></i> Music
        </h2>
        <Navbar.Brand href="#home" className="fw-bold text-primary me-2">
          <h1 className="text-danger">Accedi</h1>
        </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="text-secondary">
              Home
            </Nav.Link>
            <Nav.Link href="#features" className="text-secondary">
              Features
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-secondary">
              Pricing
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-primary" className="text-danger">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
