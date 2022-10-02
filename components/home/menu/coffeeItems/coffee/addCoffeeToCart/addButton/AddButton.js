import React from "react";
import styled from "styled-components";

const AddButtonContainer = styled.button`
  background-color: ${({ theme }) => theme.colors.lightPurple};
  padding: 0.1rem 0.4rem;
  border: none;
  color: ${({ theme }) => theme.colors.tan};
  border-radius: 0.2rem;
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  cursor: pointer;
  &:hover {
    transition: background 0.2s ease-in-out;
    background-color: ${({ theme }) => theme.colors.darkPurple};
  }
  &:active {
    transform: scale(0.95);
  }
`;

const AddButton = ({ addToCart }) => {
  return <AddButtonContainer onClick={addToCart}>+</AddButtonContainer>;
};

export default AddButton;
