import React from "react";
import { WorkshopDiv } from "./workshopStyle";
import prof_icon from "../../images/builder icons/resume_png.png";
import image_icon from "../../images/builder icons/image_png.png";
import color_icon from "../../images/builder icons/color_png.png";
import task_icon from "../../images/builder icons/task_builder.png";
import meme_icon from "../../images/builder icons/meme_png.png";
import chart_icon from "../../images/builder icons/chart_png.png";
import Footer from "../footer/Footer";
import workshop_img from "../../images/left out/workshop2.png";
import crack from "../../images/left out/crack.png";
import Card from "../workshop_card/Card";
import aura_icon from "../../images/builder icons/aura_png.png";
import soon_icon from "../../images/builder icons/soon_png.png";
import builder_bg from "../../images/builder/builder2_bg.png";

const Workshop = () => {
  const btn1 = [
    "Resume",
    "Image",
    "Color",
    "Schedule",
    "Meme",
    "Chart",
    "Aura",
    "",
  ];
  const btn2 = ["Profile", "", "", "", "", "", "", ""];
  const btn3 = ["CV", "", "", "", "", "", "", ""];

  const photo = [
    prof_icon,
    image_icon,
    color_icon,
    task_icon,
    meme_icon,
    chart_icon,
    aura_icon,
    soon_icon,
  ];
  const build_names = [
    "Profile",
    "Image",
    "Colour",
    "Schedule",
    "Meme",
    "Chart",
    "Aura",
    "Soon",
  ];
  const desc =
    "Professional builder helps to build different documents required for coorporate work. It include Resume, CV, profile builder.";
  return (
    <>
      <WorkshopDiv>
        <img src={crack} alt="crack" className="crack" />
        <img src={workshop_img} className="workshop-img" alt="" />
        <img
          src={builder_bg}
          alt="builder bg"
          className="builder_bg"
        />

        <div className="scroll-up">
          <div className="work-main">
            {build_names.map((val, ind) => (
              <Card
                key={ind}
                index={ind}
                name={val}
                desc={desc}
                url={photo[ind]}
                btn1={btn1[ind]}
                btn2={btn2[ind]}
                btn3={btn3[ind]}
              />
            ))}
          </div>
        </div>

        {/* <Footer/> */}
      </WorkshopDiv>

      {/* footer design  */}
    </>
  );
};

export default Workshop;
