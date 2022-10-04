import React from "react";
import styled from "styled-components";
import SelectInfuser from "./selectInfuser/SelectInfuser";

const InfuserOptionsContainer = styled.div`
  select {
    border: 1px solid transparent;
    border-radius: 0.2rem;
    padding: 0.2rem;
    background-color: transparent;
    font-family: ${({ theme }) => theme.fonts[1]};
    color: ${({ theme }) => theme.colors.lightPurple};
    text-transform: capitalize;
    font-size: 0.9rem;
    padding: 0.5rem 0.2rem;
    font-weight: 600;
  }
`;

const InfuserOptions = ({ infusers, setInfuser, variantGroupId }) => {
  return (
    <InfuserOptionsContainer>
      <SelectInfuser
        infusers={infusers}
        setInfuser={setInfuser}
        variantGroupId={variantGroupId}
      />
    </InfuserOptionsContainer>
  );
};

export default InfuserOptions;
