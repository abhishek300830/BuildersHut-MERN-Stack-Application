import React from "react";
import yogaImage from '../../../images/auraBuilder/yoga.png'
import { AuraContainer } from "./auraStyle";

const AuraBuilder = () => {
  return (
    <AuraContainer>
        <section>
          <div className="top-left"></div>
          <div className="top-right"></div>
          <div className="bottom-left"></div>
          <div className="bottom-right"></div>
        </section>
          <img src={yogaImage} alt="person-image" className="yoga-man"/>
        
    </AuraContainer> 
 );
};


export default AuraBuilder;
