import React from "react";
import CartItem from "../cartItem/CartItem";
import { useCartState } from "../../../../../context/cart";
import styled from "styled-components";

const CartContentsContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  p {
    color: ${({ theme }) => theme.colors.tan};
    width: fit-content;
    font-family: ${({ theme }) => theme.fonts[1]};
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 2rem;
    span {
      font-size: ${({ theme }) => theme.fontSizes.xs};
      font-family: ${({ theme }) => theme.fonts[0]};
      font-weight: 600;
      text-transform: uppercase;
    }
  }
`;

const CartContents = ({ lineItems }) => {
  const { subtotal } = useCartState();

  return (
    <>
      <div>
        {lineItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>

      <CartContentsContainer className="cart-total">
        <p>
          <span>Subtotal: </span>
          {subtotal?.formatted_with_symbol}
        </p>
      </CartContentsContainer>
    </>
  );
};

export default CartContents;
