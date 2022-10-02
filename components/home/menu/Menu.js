import React from "react";
import CoffeeItems from "./coffeeItems/CoffeeItems";
import InfuserItems from "./infuserItems/InfuserItems";
import MenuContainer from "./styles/styles";

const Menu = ({ products }) => {
  const coffees = products.filter(
    (item) => item.categories[0].slug === "green-coffee"
  );

  const infusers = products.filter(
    (item) => item.categories[0].slug === "infuser"
  );

  return (
    <div style={{ position: "relative" }}>
      <MenuContainer>
        <div className="menu-wrapper">
          <div className="menu-title">
            <div className="promo">Order. Pick-up. Get 15% Off</div>
            <h3>Select A Premium Coffee</h3>
          </div>

          <CoffeeItems coffees={coffees} />

          {/* 
        <div className="divider">
        <h3>+ THC Infusers</h3>
        </div>
        
      <InfuserItems infusers={infusers} /> */}
        </div>
      </MenuContainer>
    </div>
  );
};

export default Menu;
