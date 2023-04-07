import React, { createContext, useState } from "react";
import { useContext } from "react";

const ShoppingCartContext = React.createContext({});

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
export const ShoppingProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const getItemsQuantity = (id) => {
    return items.find((item) => item.id === id)?.quantity || 0;
  };
  const handleAdd = (id) => {
    setItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const handleMinus = (id) => {
    setItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const removeItem = (id) => {
    setItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{ getItemsQuantity, handleAdd, handleMinus, removeItem }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
