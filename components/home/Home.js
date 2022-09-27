import React from "react";
import CoffeeSection from "./coffeeSection/CoffeeSection";
import Hero from "./hero/Hero";
import styled from "styled-components";
import ThcSection from "./thcSection/ThcSection";
import CupsSold from "./cupsSold/CupsSold";
import Menu from "./menu/Menu";

const HomeContainer = styled.div`
  position: relative;
  clear: both;
`;

const Home = ({ products }) => {
  return (
    <HomeContainer>
      <div>
        <Hero />
        <CoffeeSection />
        <ThcSection />
        <CupsSold />
        <Menu products={products} />
      </div>
    </HomeContainer>
  );
};

export default Home;
