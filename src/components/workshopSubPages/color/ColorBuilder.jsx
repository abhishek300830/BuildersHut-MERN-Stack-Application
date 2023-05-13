import React, { useState } from "react";
import { ColorContainer } from "./ColorBuilderStyle";

import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import SouthEastOutlinedIcon from "@mui/icons-material/SouthEastOutlined";
import SouthOutlinedIcon from "@mui/icons-material/SouthOutlined";
import SouthWestOutlinedIcon from "@mui/icons-material/SouthWestOutlined";
import NorthWestOutlinedIcon from "@mui/icons-material/NorthWestOutlined";

const ColorBuilder = () => {
  const [colorInput1, setColorInput1] = useState("#00ff40");
  const [colorInput2, setColorInput2] = useState("#069cf9");
  const [colorAlignment, setColorAlignment] = useState("to right");
  let color = "red";
  const handleColor1 = (event) => {
    setColorInput1(event.target.value);
  };
  const handleColor2 = (event) => {
    setColorInput2(event.target.value);
  };
  const handleGenerate = () => {
    let colorDiv = document.getElementById("colorContainer");
    colorDiv.style.background = `linear-gradient(${colorAlignment},${colorInput1},${colorInput2})`;
  };
  return (
    <ColorContainer id="colorContainer" color={color}>
      <span className="colorPreview"> COLOR BUILDER</span>
      <h1>Generate a CSS Color Gradient</h1>
      <div className="colorGenerator">
        <h3>Choose Orientation</h3>
        <div className="iconButtons">
          <div
            onClick={() => {
              setColorAlignment("to right top");
            }}
          >
            <ArrowOutwardOutlinedIcon />
          </div>
          <div
            onClick={() => {
              setColorAlignment("to right");
            }}
          >
            <ArrowForwardOutlinedIcon />
          </div>
          <div
            onClick={() => {
              setColorAlignment("to right bottom");
            }}
          >
            <SouthEastOutlinedIcon />
          </div>
          <div
            onClick={() => {
              setColorAlignment("to bottom");
            }}
          >
            <SouthOutlinedIcon />
          </div>
          <div
            onClick={() => {
              setColorAlignment("to left bottom");
            }}
          >
            <SouthWestOutlinedIcon />
          </div>
          <div
            onClick={() => {
              setColorAlignment("to left");
            }}
          >
            <ArrowBackOutlinedIcon />
          </div>

          <div
            onClick={() => {
              setColorAlignment("to left top");
            }}
          >
            <NorthWestOutlinedIcon />
          </div>
          <div
            onClick={() => {
              setColorAlignment("to top");
            }}
          >
            <ArrowUpwardOutlinedIcon />
          </div>
        </div>
        <h3>Choose Colors</h3>
        <div className="chooseColors">
          <input type="color" onChange={handleColor1} value={colorInput1} />
          <input type="color" onChange={handleColor2} value={colorInput2} />
        </div>
        <div className="generateButton">
          <button onClick={handleGenerate}>
            <RocketLaunchOutlinedIcon /> GENERATE
          </button>
        </div>
      </div>
      <div className="cssCode">
        <div className="cssHeading">CSS CODE </div>
        <span className="cssCodeBackground">
          Background-image: linear-gradient ({colorAlignment} , {colorInput1} ,
          {colorInput2});
        </span>
      </div>
    </ColorContainer>
  );
};

export default ColorBuilder;
