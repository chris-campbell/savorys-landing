import React from "react";
import CartContents from "../cartContents/CartContents";
import CloseButton from "./closeButton/CloseButton";
import { useCartState } from "../../../../../context/cart";
import styled from "styled-components";

const Cart = ({ lineItems }) => {
  const { total_items } = useCartState();

  return (
    <div className="popout-cart-wrapper">
      <CloseButton />

      <div className="cart">
        <div className="cart-items-count">
          <h3>Shopping Cart</h3>
          <p>{total_items}</p>
        </div>

        <CartContents lineItems={lineItems} />
      </div>
      {/* 
      <ContinueToPaymentBtn>Continue to Payment</ContinueToPaymentBtn> */}
    </div>
  );
};

export default Cart;
