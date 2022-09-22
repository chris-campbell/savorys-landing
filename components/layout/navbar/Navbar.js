import React from "react";
import Image from "next/image";
import NavbarContainer from "./styles/styles";
import HamburgerBtn from "../../../assets/icons/hamburger.svg";
import ShoppingBag from "../../../assets/icons/shopping-bag.svg";

const Navbar = () => {
  return (
    <NavbarContainer>
      <div className="navbar-wrapper">
        <div className="logo">Savorys</div>

        <div className="navbar-nav">
          <div className="nav-cart">
            <div className="shopping-bag">
              <Image src={ShoppingBag} width={20} height={20} />
            </div>
            <div className="bag-count">3</div>
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
