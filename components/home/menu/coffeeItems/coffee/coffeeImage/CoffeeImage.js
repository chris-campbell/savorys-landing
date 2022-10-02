import React from "react";
import Image from "next/image";
import styled from "styled-components";

const CoffeeImageContainer = styled.div`
  text-align: center;
  align-self: center;
  @media (max-width: 743px) {
    margin: 1rem 0;
  }
`;

const CoffeeImage = ({ image }) => {
  return (
    <CoffeeImageContainer>
      <Image src={image.url} width={85} height={120} />
    </CoffeeImageContainer>
  );
};

export default CoffeeImage;
