import React from "react";
import styled from "styled-components";

const InfuserDescriptionContainer = styled.p`
  font-size: clamp(1rem, 1vw, ${({ theme }) => theme.fontSizes.xs});
`;

const InfuserDescription = ({ desc }) => {
  const modDescription = desc.replace(/<[^>]+>/g, "");

  return (
    <InfuserDescriptionContainer>{modDescription}</InfuserDescriptionContainer>
  );
};

export default InfuserDescription;
