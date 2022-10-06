import React from "react";
import CartItem from "../cartItem/CartItem";
import { useCartState } from "../../../../../context/cart";
import styled from "styled-components";

const CartItemCount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
  h3 {
    font-family: ${({ theme }) => theme.fonts[0]};
    color: ${({ theme }) => theme.colors.tan};
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: 900;
  }

  p {
    width: 30px;
    height: 30px;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.darkPurple};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.tan};
    font-size: 0.7em;
  }
`;

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
  box-shadow: 10px 10px 16px -11px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 16px -11px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 16px -11px rgba(0, 0, 0, 0.75);
`;

const CartContents = ({ lineItems, goTo, totalItems }) => {
  const { subtotal } = useCartState();

  return (
    <>
      <CartItemCount className="cart-items-count">
        <h3>Shopping Cart</h3>
        <p>{totalItems}</p>
      </CartItemCount>

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

          <ContinueToPaymentBtn onClick={() => goTo()}>
            Continue to Payment
          </ContinueToPaymentBtn>
        </>
      )}
    </>
  );
};

export default CartContents;
