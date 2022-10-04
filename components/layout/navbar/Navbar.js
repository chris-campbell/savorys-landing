import React, { useContext } from "react";
import Image from "next/image";
import NavbarContainer from "./styles/styles";
import HamburgerBtn from "../../../assets/icons/hamburger.svg";
import ShoppingBag from "../../../assets/icons/shopping-bag.svg";
import PopoutCart from "./popoutCart/PopoutCart";
import { CartOpenContext } from "../../../context/openCart";
import { useCartState } from "../../../context/cart";

const Navbar = () => {
  const { toggle, open } = useContext(CartOpenContext);
  const { total_items } = useCartState();

  return (
    <NavbarContainer>
      <PopoutCart toggle={toggle} open={open} />

      <div className="navbar-wrapper">
        <div className="logo">Savorys</div>

        <div className="navbar-nav">
          <div className="nav-cart">
            <div for="toggle" className="shopping-bag">
              <Image src={ShoppingBag} width={20} height={20} />
            </div>
            <div className="bag-count" onClick={() => toggle()}>
              {total_items}
            </div>
          </div>
          <div className="menu-btn">
            <Image src={HamburgerBtn} width={20} height={20} />
          </div>
        </div>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
