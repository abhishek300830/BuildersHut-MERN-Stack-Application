import React, { useState } from "react";
import MemeContainer from "./MemeBuilderStyle";
import image1 from "../../../images/MemeImages/1.jpeg";
import image2 from "../../../images/MemeImages/2.jpeg";
import image3 from "../../../images/MemeImages/3.jpg";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const ImagesArray = [image1, image2, image3];

const MemeBuilder = () => {
  const [memeImage, setMemeImage] = useState();
  return (
    <MemeContainer>
      <div className="upper">
        <div className="leftArrow">
          <ArrowCircleLeftIcon />
        </div>
        <div className="meme-images">
          {ImagesArray.map((val, idx) => {
            return (
              <img
                key={idx}
                src={val}
                alt=""
                onClick={() => {
                  setMemeImage(val);
                }}
              />
            );
          })}
        </div>
        <div className="rightArrow">
          <ArrowCircleRightIcon />
        </div>
      </div>

      <div className="lower">
        <div className="lower-left">
          <h2>Create Your Meme Here</h2>
          <img src={memeImage} alt="meme" />
        </div>
        <div className="lower-right"></div>
      </div>
    </MemeContainer>
  );
};

export default MemeBuilder;
