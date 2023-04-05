import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavList = () => {
  return (
    <Navbar sticky="top" className="bg-blue shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          variant="outline-primary"
          className="rounded-circle"
          style={{ height: "3rem", width: "3rem", position: "relative" }}
        >
          <img src="/shopping-cart.svg" alt="" />
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: "white",
              position: "absolute",
              bottom: "0",
              right: "0",
              height: "1.5rem",
              width: "1.5rem",
              transform: "translate(25%, 35%)",
            }}
          >
            3
          </div>
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavList;
