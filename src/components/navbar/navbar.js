import React from 'react'
import { NavbarDiv } from './navbarStyle'
import hut2 from '../../images/builderhut2.png'
import aari from '../../images/aari.png'
import hathoda from '../../images/hathoda.png'
import logoImg from '../../images/builder_hut.png'
import nvImg from '../../images/navbar copy.png'

const Navbar=()=>{
  return (
    <NavbarDiv>
        {/* <img className='base' src={nvImg} alt="navbar"/>*/}
        <div className="main">
            <div className="left"></div>
            <div className="mid">
                {/* <img src={logoImg} className='logo' alt="logo" />  */}
                  <img src={hut2} className='hut2' alt="" />
                  <img src={aari} className='aari' alt="" />
                  <img src={hathoda} className='hathoda' alt="" />
            </div>
            <div className="right"></div>
        </div>
    </NavbarDiv>
  )
}

export default Navbar;
