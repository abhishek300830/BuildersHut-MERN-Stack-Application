import React from "react";
import yogaImage from '../../../images/auraBuilder/yoga.png'
import { AuraContainer } from "./auraStyle";
import style1 from '../../../images/auraBuilder/design1.png'
import style2 from '../../../images/auraBuilder/design2.png'
import style3 from '../../../images/auraBuilder/design3.png'
import style4 from '../../../images/auraBuilder/design4.png'

const AuraBuilder = () => {
  return (
    <AuraContainer>
        <section>
          <img src={style1} alt="anahata" className="top-left common"/>
          <img src={style2} alt="muladhara" className="top-right common"/>
          <img src={style3} alt="manipura" className="bottom-left common"/>
          <img src={style4} alt="ajna" className="bottom-right common"/>
        </section>
          <img src={yogaImage} alt="person-image" className="yoga-man"/>
        
    </AuraContainer> 
 );
};


export default AuraBuilder;
