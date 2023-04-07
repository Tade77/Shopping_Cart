import React from "react";
import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../Utils/FormatCurrency";

const ProductStore = ({ id, name, price, imgUrl }) => {
  const { getItemsQuantity, handleAdd, handleMinus, removeItem } =
    useShoppingCart();
  const quantity = getItemsQuantity(id);
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body>
        <>
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <span className="fs-4">{name}</span>
            <span className="ms-2 text-muted">{formatCurrency(price)}</span>
          </Card.Title>
          <div className="ms-auto">
            {quantity === 0 ? (
              <Button className="w-100" onClick={() => handleAdd(id)}>
                + Add To Cart
              </Button>
            ) : (
              <div
                className="d-flex justify-content-center flex-column"
                style={{ gap: "0.5rem" }}
              >
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ gap: "0.5rem" }}
                >
                  <Button onClick={() => handleMinus(id)}>-</Button>
                  <div>
                    <span className="fs-3">{quantity}</span> in cart
                  </div>
                  <Button onClick={() => handleAdd(id)}>+</Button>
                </div>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeItem(id)}
                >
                  Remove
                </Button>
              </div>
            )}
          </div>
        </>
      </Card.Body>
    </Card>
  );
};

export default ProductStore;
