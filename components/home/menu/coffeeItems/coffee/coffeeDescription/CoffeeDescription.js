import React from "react";
import styled from "styled-components";

const CoffeeDescriptionContainer = styled.p`
  color: ${({ theme }) => theme.colors.beanGreen};
  line-height: 1.4;
  align-self: center;
  word-wrap: break-word;
  margin-top: 2rem;
  font-size: clamp(1rem, 1vw, ${({ theme }) => theme.fontSizes.xs});
  font-family: ${({ theme }) => theme.fonts[1]};
  font-weight: 400;
  letter-spacing: 0.03rem;
`;

const CoffeeDescription = ({ desc }) => {
  const modDescription = desc.replace(/<[^>]+>/g, "");

  return (
    <CoffeeDescriptionContainer>{modDescription}</CoffeeDescriptionContainer>
  );
};

export default CoffeeDescription;
