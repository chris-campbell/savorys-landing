import React from "react";
import Image from "next/image";
import CoffeeSectionContainer from "./styles/styles";

const CoffeeSection = () => {
  return (
    <CoffeeSectionContainer>
      <div className="coffee-section-wrapper">
        <div>
          <Image
            src="https://s3.us-east-2.amazonaws.com/2ndplayer.co/coffee-pouring.jpg"
            width={430}
            height={550}
          />
        </div>
        <div className="coffee-copy">
          <h3>Premium Green Coffee</h3>
          <p>
            Our un-roasted specialty grade of Nicaraguan Green Coffee is ground
            and brewed fresh to order. Delivering a pleasing earthy aroma and a
            full-bodied flavor. With about 50% less caffeine than traditional
            coffee, you get the metal alertness without the unwanted side
            effects.
          </p>
        </div>
      </div>
    </CoffeeSectionContainer>
  );
};

export default CoffeeSection;
