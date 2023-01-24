import React from 'react'
import { PractDiv } from './practiceStyle'
import sun from '../../images/sun.png'
import moon from '../../images//moon.png'
const Practice = () => {

  const sunOnclick=()=>{
    document.getElementById('sun_id').style.backgroundColor='#f2f5439d';
    document.getElementById('moon_id').style.backgroundColor='transparent';
  }

  const moonOnclick=()=>{
    document.getElementById('sun_id').style.backgroundColor='unset';
    document.getElementById('moon_id').style.backgroundColor='#8e8d8d6c';
    document.body.style.background="white";

  }

  return (
    <PractDiv>  
    <div className="theme" >
        <div id='sun_id' onClick={sunOnclick}>
            <img src={sun} alt="a"/>
        </div>
        <div id='moon_id' onClick={moonOnclick}>
          <img src={moon} alt="s"/>
        </div>
    </div>
    </PractDiv>
  )
}

export default Practice