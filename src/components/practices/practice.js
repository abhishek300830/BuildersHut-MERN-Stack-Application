import React from 'react'
import hut2 from '../../images/builderhut2.png'
import aari from '../../images/aari.png'
import hathoda from '../../images/hathoda.png'
import { PractDiv } from './practiceStyle'
const Practice = () => {
  return (
    <PractDiv>  
    <div className="imgdiv">
        <img src={hut2} className='hut2' alt="" />
        <img src={aari} className='aari' alt="" />
        <img src={hathoda} className='hathoda' alt="" />

    </div>
    </PractDiv>
  )
}

export default Practice