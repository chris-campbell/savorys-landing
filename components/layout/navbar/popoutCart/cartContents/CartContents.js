import React from "react";
import CartItem from "../cartItem/CartItem";
import { useCartState } from "../../../../../context/cart";
import styled from "styled-components";

const CartContentsContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .empty-cart-msg {
    color: ${({ theme }) => theme.colors.tan};
  }
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

const EmptyCartMsg = styled.p`
  color: ${({ theme }) => theme.colors.tan};
`;

const ContinueToPaymentBtn = styled.button`
  padding: 1rem 2rem;
  width: 100%;
  margin-top: 4rem;
  border: none;
  border-radius: 0.2rem;
  background-color: ${({ theme }) => theme.colors.darkPurple};
  color: ${({ theme }) => theme.colors.tan};
  text-transform: uppercase;
  font-size: 0.7rem;
`;

const CartContents = ({ lineItems }) => {
  const { subtotal } = useCartState();

  console.log({ lineItems });

  return (
    <>
      {lineItems.length <= 0 ? (
        <EmptyCartMsg className="empty-cart-msg">No items in cart</EmptyCartMsg>
      ) : (
        <>
          <div>
            {lineItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>

          <CartContentsContainer>
            <p>
              <span>Subtotal: </span>
              {subtotal?.formatted_with_symbol}
            </p>
          </CartContentsContainer>

          <ContinueToPaymentBtn>Continue to Payment</ContinueToPaymentBtn>
        </>
      )}
    </>
  );
};

export default CartContents;
