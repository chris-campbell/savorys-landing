import React, { createContext, useState } from "react";

export const CartOpenContext = createContext(null);

const CartOpenProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <CartOpenContext.Provider value={{ open, toggle }}>
      {children}
    </CartOpenContext.Provider>
  );
};

export default CartOpenProvider;
