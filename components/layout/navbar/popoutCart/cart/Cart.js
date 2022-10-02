import React, { useState } from "react";
import CartContents from "../cartContents/CartContents";
import CloseButton from "./closeButton/CloseButton";
import { useCartState } from "../../../../../context/cart";
import styled from "styled-components";
import Payment from "../payment/Payment";
import Confirmation from "../confirmation/Confirmation";

const Cart = ({ lineItems }) => {
  const { total_items } = useCartState();
  const [index, setIndex] = useState(1);

  return (
    <div className="popout-cart-wrapper">
      <CloseButton />
      {index === 0 ? (
        <div className="cart">
          <div className="cart-items-count">
            <h3>Shopping Cart</h3>
            <p>{total_items}</p>
          </div>

          <CartContents lineItems={lineItems} />
        </div>
      ) : index === 1 ? (
        <Payment />
      ) : (
        <Confirmation />
      )}
    </div>
  );
};

export default Cart;
