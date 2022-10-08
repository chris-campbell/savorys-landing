import React from "react";
import HeroContainer from "./styles/styles";

const Hero = () => {
  return (
    <HeroContainer>
      <div className="content-wrapper">
        <div className="content">
          <h2>Premium ~ Organic</h2>
          <h1>Drop-kick morning stress with our green coffee and THC fusion</h1>
          <p>
            Begin your day with our premium in-house blend of expertly curated
            green coffee, infused with a mild shot of our unique hybrid strains
            of THC specifically bred to relieve mental + body stress.
          </p>

          <a href="#menu">Menu</a>
        </div>
      </div>
    </HeroContainer>
  );
};

export default Hero;
