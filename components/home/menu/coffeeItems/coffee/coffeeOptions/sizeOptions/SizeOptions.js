import React from "react";
import styled from "styled-components";

const SizeOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 0.3rem;

  .size-option {
    font-family: ${({ theme }) => theme.fonts[1]};
    color: ${({ theme }) => theme.colors.beanGreen};
    font-size: 0.7rem;
    font-weight: 600;
  }
`;

const Size = styled.div`
  text-align: center;
  font-size: 0.9rem;
  font-family: ${({ theme }) => theme.fonts[1]};
  color: ${({ theme }) => theme.colors.beanGreen};
  /* font-weight: 600; */
`;

const SizeOptions = ({ options }) => {
  const sizeOptions = () =>
    options.map(({ name, id }) => <Size key={id}>{`${name} `}</Size>);

  return (
    <SizeOptionsContainer className="coffee-size-options">
      {sizeOptions()}
    </SizeOptionsContainer>
  );
};

export default SizeOptions;
