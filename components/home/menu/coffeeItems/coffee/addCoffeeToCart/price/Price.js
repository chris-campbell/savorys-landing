import React from "react";
import styled from "styled-components";

const PriceContainer = styled.div`
  font-family: ${({ theme }) => theme.fonts[0]};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.beanGreen};
  text-transform: uppercase;
  font-weight: 600;
`;

const Price = ({ price }) => {
  return <PriceContainer>${price.formatted}</PriceContainer>;
};

export default Price;
