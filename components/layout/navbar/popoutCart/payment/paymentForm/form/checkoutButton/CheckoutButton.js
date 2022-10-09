import React from "react";
import styled from "styled-components";

const CheckoutBtnContainer = styled.button`
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

const CheckoutButton = ({ handleCheckout, stripe, elements }) => {
  return (
    <CheckoutBtnContainer onClick={() => handleCheckout(stripe, elements)}>
      Complete Checkout
    </CheckoutBtnContainer>
  );
};

export default CheckoutButton;
