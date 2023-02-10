import React from "react";
import chartH from '../../../images/headers/chart.png'
import { ResumeStyleDiv } from "./resumeStyle";

const ResumeBuilder = () => {
  return (
  <ResumeStyleDiv>
    <img src={chartH} alt="header" className="header"/>

    <section className="rMain">
      {/* main div where textfields will b there  */}
        <div className="left">
          <div className="user-input">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt doloribus dignissimos officiis voluptate possimus neque amet ad saepe obcaecati eveniet. Repudiandae eveniet cum quia voluptatibus sapiente aspernatur excepturi eaque nobis facere fugit iste, quod quasi nulla expedita ea nisi architecto, magnam, dolor tenetur omnis quos placeat inventore? Porro esse iure tempore. Nihil tempora delectus repudiandae nobis dolorem molestiae illum porro, suscipit expedita sapiente, eius ullam possimus adipisci laboriosam alias repellat, voluptatum provident ipsam sit? Placeat suscipit esse necessitatibus magni omnis, alias libero, consequuntur ea laudantium unde eaque dolorem odit eveniet, deserunt cumque adipisci pariatur eius? Velit officiis commodi placeat iure?
              </p>
          </div>
        </div>

        {/* a4 size template  */}
        <div className="right">
          <div className="a4"></div>
        </div>
    </section>
    
  </ResumeStyleDiv>
  );
};

export default ResumeBuilder;
