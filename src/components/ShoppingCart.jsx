import React from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { productLists } from "../data/Store";
import { formatCurrency } from "../Utils/FormatCurrency";
import CartList from "./CartList";

const ShoppingCart = ({ isOpen }) => {
  const { closeCart, items } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {items.map((item) => (
            <CartList key={item.id} {...item} />
          ))}
          <div className="fw-bold fs-5 ms-auto">
            Total:
            {formatCurrency(
              items.reduce((total, item) => {
                const cartItem = productLists.find((i) => i.id === item.id);
                return total + (cartItem?.price || 0) * item.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
