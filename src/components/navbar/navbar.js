import React from 'react'
import { NavbarDiv } from './navbarStyle'

import logoImg from '../../images/builder_hut.png'
import nvImg from '../../images/navbar copy.png'
const Navbar=()=>{
  return (
    <NavbarDiv>
        {/* <img className='base' src={nvImg} alt="navbar"/>*/}
        <div className="main">
            <div className="left"></div>
            <div className="mid">
                <img src={logoImg} className='logo' alt="logo" /> 
            </div>
            <div className="right"></div>
        </div>
    </NavbarDiv>
  )
}

export default Navbar;
