import React, { useEffect, useState } from "react";
import CartContents from "../cartContents/CartContents";
import CloseButton from "./closeButton/CloseButton";
import { useCartState } from "../../../../../context/cart";
import Payment from "../payment/Payment";
import Confirmation from "../confirmation/Confirmation";

const Cart = ({ lineItems }) => {
  const { total_items, subtotal } = useCartState();
  const [index, setIndex] = useState(0);
  const [order, setOrder] = useState({});

  const goToCheckOut = () => {
    if (total_items > 0) {
      setIndex((prev) => prev + 1);
    } else {
      console.log("Cart has no items");
    }
  };

  return (
    <div className="popout-cart-wrapper">
      <CloseButton />

      {index === 0 ? (
        <div className="cart">
          <div className="cart-items-count">
            <h3>Shopping Cart</h3>
            <p>{total_items}</p>
          </div>

          <CartContents lineItems={lineItems} goTo={goToCheckOut} />
        </div>
      ) : index === 1 ? (
        <Payment subtotal={subtotal} setOrder={setOrder} setIndex={setIndex} />
      ) : (
        <Confirmation order={order} setIndex={setIndex} />
      )}
    </div>
  );
};

export default Cart;
