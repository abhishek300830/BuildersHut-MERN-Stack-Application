import React, { useState } from "react";
import MemeContainer from "./MemeBuilderStyle";
import image1 from "../../../images/MemeImages/1.jpeg";
import image2 from "../../../images/MemeImages/2.jpeg";
import image3 from "../../../images/MemeImages/3.jpg";
import image4 from "../../../images/MemeImages/4.avif";
import image5 from "../../../images/MemeImages/5.webp";
import image6 from "../../../images/MemeImages/6.jpeg";
import image7 from "../../../images/MemeImages/8.avif";
import image8 from "../../../images/MemeImages/9.jpg";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const ImagesArray = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
];

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
          {memeImage ? (
            <img src={memeImage} alt="meme" />
          ) : (
            <div className="when-not-image">
              <h4 className="selectImage">Select Image from List</h4>
              <p>OR</p>
              <h4>Upload Image</h4>
            </div>
          )}
        </div>
        <div className="lower-right">
          <div className="memeEditorContainer">
            <h2>Meme Editor</h2>
            <label htmlFor="memeText">Enter Text Here </label>
            <input type="text" name="" id="memeText" />
            <button>ADD To Position</button>
          </div>
        </div>
      </div>
    </MemeContainer>
  );
};

export default MemeBuilder;
