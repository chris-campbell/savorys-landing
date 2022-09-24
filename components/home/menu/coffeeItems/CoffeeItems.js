import React from "react";
import Coffee from "./coffee/Coffee";
import styled from "styled-components";

const CoffeeItemsContainer = styled.div`
  .coffee-items-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
    grid-auto-columns: 1fr;

    @media (max-width: 777px) {
      grid-template-columns: none;
      grid-template-columns: repeat(1, 1fr);
    }

    @media (max-width: 461px) {
      grid-template-columns: none;
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

const CoffeeItems = ({ coffees }) => {
  return (
    <CoffeeItemsContainer>
      <div className="coffee-items-wrapper">
        {coffees.map((coffee) => (
          <Coffee {...coffee} />
        ))}
      </div>
    </CoffeeItemsContainer>
  );
};

export default CoffeeItems;
