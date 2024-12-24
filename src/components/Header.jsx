import React from "react";
import { FaBitcoin } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavStyle  from "../components/Styled/NavStyle"
import IconStyle from "../components/Styled/IconStyle"

const Header = () => {
  return (
    <Link to="/" >
      <NavStyle>
        <IconStyle>
          <FaBitcoin />
          <span>
            COIN  CHASER
            </span>
         
        </IconStyle>
      </NavStyle>
    </Link>
  );
};

export default Header;