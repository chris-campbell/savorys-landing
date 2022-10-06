import CartContents from "../../cartContents/CartContents";
import Payment from "../../payment/Payment";
import Confirmation from "../../confirmation/Confirmation";
import { useState } from "react";

const Carousel = ({ items, totalItems, subtotal, setOrder, order }) => {
  const [index, setIndex] = useState(0);

  const goTo = () => {
    if (totalItems <= 0) return console.log("Cart has no items");

    setIndex((prev) => prev + 1);
  };

  return (
    <>
      {index === 0 ? (
        <CartContents lineItems={items} goTo={goTo} totalItems={totalItems} />
      ) : index === 1 ? (
        <Payment subtotal={subtotal} setOrder={setOrder} setIndex={setIndex} />
      ) : index === 2 ? (
        <Confirmation order={order} setIndex={setIndex} />
      ) : null}
    </>
  );
};

export default Carousel;
