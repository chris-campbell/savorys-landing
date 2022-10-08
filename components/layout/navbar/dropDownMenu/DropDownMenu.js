import React from "react";
import Link from "next/link";
import DropDownMenuContainer from "./styles/styles";

const DropDownMenu = ({ menuToggle }) => {
  return (
    <DropDownMenuContainer menuToggle={menuToggle}>
      <div className="dropdown-wrapper">
        <ul>
          <li>
            <Link
              title="portfolio"
              href="https://www.2ndplayer.co/"
              target="_blank"
            >
              portfolio
            </Link>
          </li>
          <li>
            <Link
              title="twitter"
              href="https://twitter.com/2ndplayerco"
              target="_blank"
            >
              twitter
            </Link>
          </li>
          <li>
            <Link
              title="linkedin"
              href="https://www.linkedin.com/in/chris-c-6a2267109/"
              target="_blank"
            >
              linkedin
            </Link>
          </li>
        </ul>
      </div>
    </DropDownMenuContainer>
  );
};

export default DropDownMenu;
