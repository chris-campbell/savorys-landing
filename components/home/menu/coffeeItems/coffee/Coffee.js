import React from "react";
import CoffeeContainer from "./styles/styles";
import CoffeeTitle from "./coffeeTitle/CoffeeTitle";
import CoffeeImage from "./coffeeImage/CoffeeImage";
import CoffeeDescription from "./coffeeDescription/CoffeeDescription";
import AddCoffeeToCart from "./addCoffeeToCart/AddCoffeeToCart";

const Coffee = ({ name, image, description, attributes, price, id }) => {
  return (
    <CoffeeContainer>
      <div className="coffee-wrapper">
        <CoffeeTitle name={name} attributes={attributes} />
        <CoffeeImage image={image} />
        <CoffeeDescription desc={description} />
        <AddCoffeeToCart price={price} coffeeId={id} />
      </div>
    </CoffeeContainer>
  );
};

export default Coffee;
