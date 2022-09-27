import React from "react";
import Infuser from "./infuser/Infuser";
import styled from "styled-components";

const InfuserItemsContainer = styled.div`
  .infuser-items-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 2rem;
    grid-auto-columns: 1fr;

    @media (max-width: 777px) {
      grid-template-columns: none;
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

const InfuserItems = ({ infusers }) => {
  return (
    <InfuserItemsContainer>
      <div className="infuser-items-wrapper">
        {infusers.map((infuser) => (
          <Infuser key={infuser.id} {...infuser} />
        ))}
      </div>
    </InfuserItemsContainer>
  );
};

export default InfuserItems;
