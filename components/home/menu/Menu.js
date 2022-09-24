import React from "react";
import CoffeeItems from "./coffeeItems/CoffeeItems";
import InfuserItems from "./infuserItems/InfuserItems";
import styled from "styled-components";

const MenuContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.tan};
  padding: clamp(7rem, 20vw, 150px) clamp(1rem, 7vw, 50px);

  .menu-title {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 3rem;

    .promo {
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.darkPurple};
      font-weight: 600;
      font-size: clamp(0.9rem, 1vw, 1em);
    }

    h3 {
      text-transform: uppercase;
      font-size: ${({ theme }) => theme.fontSizes.md};
      color: ${({ theme }) => theme.colors.beanGreen};
      font-weight: 600;
      font-size: clamp(1.8rem, 5vw, 2.1875em);
    }
  }

  .divider {
    padding: 3rem 0 6rem 0;

    h3 {
      font-size: ${({ theme }) => theme.fontSizes.sm};
      text-transform: uppercase;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.beanGreen};
    }
  }
`;

const Menu = ({ products }) => {
  const coffees = products.filter(
    (item) => item.categories[0].slug === "green-coffee"
  );

  const infusers = products.filter(
    (item) => item.categories[0].slug === "infuser"
  );

  return (
    <MenuContainer>
      <div className="menu-wrapper">
        <div className="menu-title">
          <div className="promo">Order. Pick-up. Get 15% Off</div>
          <h3>Select A Premium Coffee</h3>
        </div>

        <CoffeeItems coffees={coffees} />

        <div className="divider">
          <h3>+ THC Infusers</h3>
        </div>

        <InfuserItems infusers={infusers} />
      </div>
    </MenuContainer>
  );
};

export default Menu;
