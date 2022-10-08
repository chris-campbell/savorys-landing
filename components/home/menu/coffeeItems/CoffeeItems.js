import React from "react";
import Coffee from "./coffee/Coffee";
import CoffeeItemsContainer from "./styles/styles";

const CoffeeItems = ({ coffees }) => {
  coffees.map((coffee) => {
    coffee?.variant_groups?.map(({ options, name }) => ({
      name,
      options: options.map((option) => console.log("NAME", option.name)),
    }));
  });

  return (
    <CoffeeItemsContainer>
      <div className="coffee-items-wrapper">
        {coffees.map((coffee) => (
          <Coffee key={coffee.id} {...coffee} />
        ))}
      </div>
    </CoffeeItemsContainer>
  );
};

export default CoffeeItems;
