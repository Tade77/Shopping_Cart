import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
// import ShoppingCart from "./ShoppingCart";

const NavList = () => {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <Navbar className="bg-blue shadow-sm mb-3">
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
        {cartQuantity > 0 && (
          <Button
            variant="outline-primary"
            className="rounded-circle"
            style={{ height: "3rem", width: "3rem", position: "relative" }}
            onClick={openCart}
          >
            <>
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
                {cartQuantity}
              </div>
            </>
          </Button>
        )}
      </Container>
    </Navbar>
  );
};

export default NavList;
