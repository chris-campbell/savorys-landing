import React from "react";
import CoffeeSection from "./coffeeSection/CoffeeSection";
import Hero from "./hero/Hero";
import styled from "styled-components";
import ThcSection from "./thcSection/ThcSection";
import CupsSold from "./cupsSold/CupsSold";

const HomeContainer = styled.div`
  position: relative;
  clear: both;
`;

const Home = () => {
  return (
    <HomeContainer>
      <div>
        <Hero />
        <CoffeeSection />
        <ThcSection />
        <CupsSold />
      </div>
    </HomeContainer>
  );
};

export default Home;
