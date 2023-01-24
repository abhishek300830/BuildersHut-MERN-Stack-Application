import React from 'react'
import { NavbarDiv } from './navbarStyle'
import hut2 from '../../images/builderhut2.png'
import aari from '../../images/aari.png'
import hathoda from '../../images/hathoda.png'
import sun from '../../images/sun.png'
import moon from '../../images//moon.png'

const Navbar=()=>{

  const sunOnclick=()=>{
    document.getElementById('sun_id').style.backgroundColor='#f3f7139d';
    document.getElementById('moon_id').style.backgroundColor='transparent';
    document.body.style.backgroundColor="white";

  }

  const moonOnclick=()=>{
    document.getElementById('sun_id').style.backgroundColor='unset';
    document.getElementById('moon_id').style.backgroundColor='#8e8d8d6c';
    document.body.style.backgroundColor="#0a0a0ad7";
    
  }

  return (
    <NavbarDiv>
        <div className="main">
            <div className="left"></div>
            <div className="mid">
                  <img src={hut2} className='hut2' alt="" />
                  <img src={aari} className='aari' alt="" />
                  <img src={hathoda} className='hathoda' alt="" />
            </div>
            <div className="right">
              <div className="theme">
                  <div id='sun_id' onClick={sunOnclick}>
                    <img src={sun} alt=""/>
                  </div>
                  <div id='moon_id' onClick={moonOnclick}>
                    <img src={moon} alt=""/>
                  </div>
              </div>
            </div>
        </div>
    </NavbarDiv>
  )
}

export default Navbar;
