import React from "react";
import MemeContainer from "./MemeBuilderStyle";
import image1 from "../../../images/MemeImages/1.jpeg";
import image2 from "../../../images/MemeImages/2.jpeg";
import image3 from "../../../images/MemeImages/3.jpg";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const MemeBuilder = () => {
  return (
    <MemeContainer>
      <div className="upper">
        <div className="leftArrow">
          <ArrowCircleLeftIcon />
        </div>
        <div className="meme-images">
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image1} alt="" />
          <img src={image3} alt="" />
          <img src={image1} alt="" />
          <img src={image1} alt="" />
          <img src={image1} alt="" />
          <img src={image1} alt="" />
          <img src={image1} alt="" />
          <img src={image1} alt="" />
          <img src={image1} alt="" />
          <img src={image1} alt="" />
          <img src={image1} alt="" />
          <img src={image1} alt="" />
          <img src={image1} alt="" />
          <img src={image1} alt="" />
          <img src={image1} alt="" />
          <img src={image1} alt="" />
          <img src={image1} alt="" />
          <img src={image1} alt="" />
        </div>
        <div className="rightArrow">
          <ArrowCircleRightIcon />
        </div>
      </div>

      <div className="lower">Lower Part</div>
    </MemeContainer>
  );
};

export default MemeBuilder;
