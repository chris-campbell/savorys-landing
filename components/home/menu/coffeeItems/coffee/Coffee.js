import { useState } from "react";
import CoffeeName from "./coffeeName/CoffeeName";
import CoffeeImage from "./coffeeImage/CoffeeImage";
import CoffeeDescription from "./coffeeDescription/CoffeeDescription";
import CoffeeOptions from "./coffeeOptions/CoffeeOptions";
import CoffeeContainer from "./styles/styles";
import AddCoffeeToCart from "./addCoffeeToCart/AddCoffeeToCart";

const Coffee = ({
  name,
  image,
  description,
  attributes,
  price,
  id,
  variant_groups,
}) => {
  const [selectedInfuserId, setSelectedInfuserId] = useState("");
  const [infuserGroupId, setInfuserGroupId] = useState("");
  const [sizeGroupId, setSizeGroupId] = useState("");

  console.log(variant_groups);

  return (
    <CoffeeContainer>
      <div className="coffee-wrapper">
        <CoffeeName name={name} attributes={attributes} />
        <CoffeeImage image={image} />
        <CoffeeDescription desc={description} />
        <CoffeeOptions
          variants={variant_groups}
          setInfuser={setSelectedInfuserId}
          setInfuserGroupId={setInfuserGroupId}
          setSizeGroupId={setSizeGroupId}
        />

        <AddCoffeeToCart
          price={price}
          selectedInfuserId={selectedInfuserId}
          infuserGroupId={infuserGroupId}
          sizeGroupId={sizeGroupId}
          coffeeId={id}
        />
      </div>
    </CoffeeContainer>
  );
};

export default Coffee;
