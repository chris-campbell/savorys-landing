import React, { useState } from "react";
import CloseButton from "./closeButton/CloseButton";
import Carousel from "./carousel/Carousel";
import { useCartState } from "../../../../../context/cart";

const Cart = ({ lineItems }) => {
  const { total_items, subtotal } = useCartState();
  const [order, setOrder] = useState({});

  return (
    <div className="popout-cart-wrapper">
      <CloseButton />

      <Carousel
        items={lineItems}
        totalItems={total_items}
        subtotal={subtotal}
        setOrder={setOrder}
        order={order}
      />
    </div>
  );
};

export default Cart;
