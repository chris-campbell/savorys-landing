import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
  width: 30%;
  padding: 0.5rem 0rem;
  height: 2rem;
  border: none;
  color: ${({ theme }) => theme.colors.tan};
  border-radius: 0.2rem;

  background-color: ${({ theme }) => theme.colors.darkPurple};
  &:hover {
  }

  &:active {
    transform: scale(0.97);
  }
`;

const Button = ({ setPromo }) => {
  return <ButtonContainer onClick={(e) => setPromo(e)}>Apply</ButtonContainer>;
};

export default Button;
