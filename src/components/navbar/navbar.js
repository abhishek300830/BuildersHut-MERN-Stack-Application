import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { NavbarDiv } from "./navbarStyle";
import hut2 from "../../images/favicon/builderhut2.png";
import aari from "../../images/favicon/aari.png";
import hathoda from "../../images/favicon/hathoda.png";
import sun from "../../images/favicon/sun.png";
import moon from "../../images/favicon/moon.png";
import { useContext } from "react";
import builderContext from "../../context/builderContext";

const Navbar = () => {
  const {themebg,setThemebg,setFormbg,setBorderbg} = useContext(builderContext);
  
  
  const sunOnclick = () => {
    document.getElementById("sun_id").style.backgroundColor = "#f3f7139d";
    document.getElementById("moon_id").style.backgroundColor = "transparent";
  
    setThemebg("white")
    setFormbg("white")
    setBorderbg("black")
  };

  const moonOnclick = () => {
    document.getElementById("sun_id").style.backgroundColor = "unset";
    document.getElementById("moon_id").style.backgroundColor = "#8e8d8d6c";

    setThemebg("#0a0a0ad7")
    setFormbg("#d1d1d1")
    setBorderbg("#d1d1d1")
  };
  document.body.style.backgroundColor = themebg;


  return (
    <NavbarDiv>
      <div className="main">

        <div className="left">
          <NavLink to="about">About</NavLink>
        </div>
        
        <div className="mid">
          <NavLink to="/">
            <img src={hut2} className="hut2" alt="" />
            <img src={aari} className="aari" alt="" />
            <img src={hathoda} className="hathoda" alt="" />
          </NavLink>
        </div>
        <div className="right">
          <div className="theme">
            <div id="sun_id" onClick={sunOnclick}>
              <img src={sun} alt="" />
            </div>
            <div id="moon_id" onClick={moonOnclick}>
              <img src={moon} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="outlet">
        <Outlet />
      </div>
    </NavbarDiv>
  );
};

export default Navbar;
