import React, { useContext } from "react";
import { useCartState } from "../../../../context/cart";
import { PopOutCartContainer } from "./styles/styles";
import { CartOpenContext } from "../../../../context/openCart";
import Cart from "./cart/Cart";
import CloseButton from "./cart/closeButton/CloseButton";

const PopoutCart = () => {
  const { line_items } = useCartState();
  const { open } = useContext(CartOpenContext);

  return (
    <PopOutCartContainer toggleOn={open}>
      <input id="toggle" type="checkbox" checked style={{ display: "none" }} />

      <Cart lineItems={line_items} />
    </PopOutCartContainer>
  );
};

export default PopoutCart;
