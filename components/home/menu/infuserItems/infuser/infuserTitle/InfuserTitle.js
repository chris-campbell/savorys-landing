import React from "react";
import styled from "styled-components";

const InfuserContainer = styled.div`
  .thc-doseage {
    font-family: ${({ theme }) => theme.fonts[0]};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.lightPurple};
    margin-bottom: 0.2rem;
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    text-transform: uppercase;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.darkPurple};
    margin-bottom: 0.5rem;
  }
`;

const InfuserTitle = ({ name, attributes }) => {
  return (
    <InfuserContainer>
      <div className="thc-doseage">THC {attributes[1].value}MG</div>
      <h3>{name}</h3>
    </InfuserContainer>
  );
};

export default InfuserTitle;
