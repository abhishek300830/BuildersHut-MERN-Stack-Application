import React from "react";
import chartH from '../../../images/headers/chart.png'
import { ResumeStyleDiv } from "./resumeStyle";

const ResumeBuilder = () => {
  return (
  <ResumeStyleDiv>
    <img src={chartH} alt="header" className="header"/>

    <section className="rMain">
      {/* main div where textfields will b there  */}
        <div className="left"></div>

        {/* a4 size template  */}
        <div className="right">
          <div className="a4"></div>
        </div>
    </section>
    
  </ResumeStyleDiv>
  );
};

export default ResumeBuilder;
