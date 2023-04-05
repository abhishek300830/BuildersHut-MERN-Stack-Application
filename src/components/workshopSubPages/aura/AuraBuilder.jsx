import React, { useContext, useEffect } from "react";
import yogaImage from '../../../images/auraBuilder/yoga.png'
import { AuraContainer } from "./auraStyle";
import style1 from '../../../images/auraBuilder/design1.png'
import style2 from '../../../images/auraBuilder/design2.png'
import style3 from '../../../images/auraBuilder/design3.png'
import style4 from '../../../images/auraBuilder/design4.png'
import { useState } from "react";
import builderContext from "../../../context/builderContext";

const AuraBuilder = () => {

  const {indexOfColor, setIndexOfColor} = useContext(builderContext)
  
  let colors = ["#0000000","#01adef","#ff0000","#01a651","#fdb501"]
  
useEffect(() => {
    document.getElementById('bg-change').style.background=colors[indexOfColor];
  }, )
  

  function onClickHandler(indx){
    setIndexOfColor(indx)
    document.getElementById('circle').style.display='block';
    document.getElementById('circle').style.background=colors[indx];

    setTimeout(() => {
      document.getElementById('circle').style.display='none';
    }, 500);
  }

  return (
    <AuraContainer>
        <article id="bg-change"></article>
        <article id="circle"></article>
        <section>
          <img src={style1} data-aos="zoom-in" data-aos-duration="2000" onClick={()=>onClickHandler(1)} alt="anahata" className="top-left common"/>
          <img src={style2} data-aos="zoom-in" data-aos-duration="2000" onClick={()=>onClickHandler(2)} alt="muladhara" className="top-right common"/>
          <img src={style3} data-aos="zoom-in" data-aos-duration="2000" onClick={()=>onClickHandler(3)} alt="manipura" className="bottom-left common"/>
          <img src={style4} data-aos="zoom-in" data-aos-duration="2000"  onClick={()=>onClickHandler(4)} alt="ajna" className="bottom-right common"/>
        </section>
          <img src={yogaImage} data-aos="fade-up" 
          alt="person-image" className="yoga-man"/>
        
    </AuraContainer> 
 );
};


export default AuraBuilder;
