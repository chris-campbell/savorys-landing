import React from "react";
import CoffeeItems from "./coffeeItems/CoffeeItems";
import MenuContainer from "./styles/styles";

const Menu = ({ products }) => {
  const coffees = products.filter(
    (item) => item.categories[0].slug === "green-coffee"
  );

  return (
    <div style={{ position: "relative" }}>
      <MenuContainer>
        <div className="menu-wrapper">
          <div id="menu" className="menu-title">
            <div className="promo">Order. Pick-up. Get 15% Off</div>
            <h3>Select A Premium Coffee</h3>
          </div>

          <CoffeeItems coffees={coffees} />
        </div>
      </MenuContainer>
    </div>
  );
};

export default Menu;
