import React from "react";
import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { productLists } from "../data/Store";
import { formatCurrency } from "../Utils/FormatCurrency";

const CartList = ({ id, quantity }) => {
  const { removeItem } = useShoppingCart();
  const item = productLists.find((i) => i.id === id);
  if (item == null) {
    return null;
  }
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        alt=""
        style={{ width: "120px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div className="d-flex align-items-center">
          {item.name}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.65rem" }}>
              {" "}
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: "0.75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeItem(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
};

export default CartList;
