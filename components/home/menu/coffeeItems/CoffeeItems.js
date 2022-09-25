import React from "react";
import Coffee from "./coffee/Coffee";
import CoffeeItemsContainer from "./styles/styles";

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
