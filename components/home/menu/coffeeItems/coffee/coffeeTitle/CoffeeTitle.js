import React from "react";
import styled from "styled-components";

const CoffeeTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  .coffee-attributes {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: fit-content;
    text-align: center;
    align-self: center;

    h4 {
      font-size: ${({ theme }) => theme.fontSizes.sm};
      text-transform: uppercase;
      font-weight: 600;
    }

    .coffee-calories {
      color: ${({ theme }) => theme.colors.lightPurple};
      font-family: ${({ theme }) => theme.fonts[0]};
      font-weight: 600;
      text-transform: uppercase;
    }
  }
`;

const CoffeeTitle = ({ name, attributes }) => {
  return (
    <CoffeeTitleContainer>
      <div className="coffee-attributes">
        <h4 className="coffee-name">{name}</h4>
        <div className="coffee-calories">{attributes[0].value} Cal</div>
      </div>
    </CoffeeTitleContainer>
  );
};

export default CoffeeTitle;
