import React from "react";
import AddInfuserToCart from "./addInfuserToCart/AddInfuserToCart";
import InfuserDescription from "./infuserDescription/InfuserDescription";
import InfuserTitle from "./infuserTitle/InfuserTitle";
import InfuserContainer from "./styles/styles";

const Infuser = ({ name, description, price, attributes, id }) => {
  return (
    <InfuserContainer>
      <InfuserTitle name={name} attributes={attributes} />
      <InfuserDescription desc={description} />
      <AddInfuserToCart price={price} productId={id} />
    </InfuserContainer>
  );
};

export default Infuser;
