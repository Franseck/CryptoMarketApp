import React from "react";
import { FaBitcoin } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavStyle  from "../components/Styled/NavStyle"
import IconStyle from "../components/Styled/IconStyle"
import { ImgStyle } from "./Styled/ImgStyle";
import logo from "../assets/Logo.png"

const Header = () => {
  return (
    <Link to="/" >
        <NavStyle>
<ImgStyle>
<img src={logo} alt="" />
</ImgStyle>
    
   <span>
            COIN  CHASER
            </span>
        <IconStyle>
                   <FaBitcoin />
           </IconStyle>
      </NavStyle>
    </Link>
  );
};

export default Header;