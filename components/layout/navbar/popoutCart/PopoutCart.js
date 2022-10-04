import React, { useContext } from "react";
import { useCartState } from "../../../../context/cart";
import { PopOutCartContainer } from "./styles/styles";
import { CartOpenContext } from "../../../../context/openCart";
import Cart from "./cart/Cart";

const PopoutCart = () => {
  const { line_items } = useCartState();
  const { open } = useContext(CartOpenContext);

  console.log({ line_items });

  return (
    <PopOutCartContainer toggleOn={open}>
      <Cart lineItems={line_items} />
    </PopOutCartContainer>
  );
};

export default PopoutCart;
