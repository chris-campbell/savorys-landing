import React from "react";
import CupsSoldContainer from "./styles/styles";

const CupsSold = () => {
  return (
    <CupsSoldContainer>
      <div className="cups-sold-wrapper">
        <div className="message">
          <p>Over 1.5 million cups sold this year alone</p>
          <div className="highlight"></div>
        </div>
      </div>
    </CupsSoldContainer>
  );
};

export default CupsSold;
