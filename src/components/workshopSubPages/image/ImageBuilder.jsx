import React, { useState } from "react";
import AvatarEditor from "react-avatar-editor";
import ImageBuilderContainer from "./imageBuilderStyle";
import Dropzone from "react-dropzone";
import ScrollBar from "./ScrollBar";
import { Button, Chip } from "@mui/material";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import templateImage from "../../../images/left out/dragDrop.png";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
// icons
import Brightness7Icon from "@mui/icons-material/Brightness7";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import ContrastIcon from "@mui/icons-material/Contrast";
import HighlightIcon from "@mui/icons-material/Highlight";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import GradientIcon from "@mui/icons-material/Gradient";

const ImageBuilder = () => {
  // dropzone state
  const [image, setImage] = useState({
    link: templateImage,
  });
  // handle drop Image
  const handleDropImage = (dropped) => {
    setImage({ link: dropped[0] });
  };

  // state to edit image
  const [rotate, setRotate] = useState(0);
  const [borderRadius, setBorderRadius] = useState(10);
  const [zoom, setZoom] = useState(1.1);

  // filter state object
  const [filters, setFilters] = useState({ filter: "none" });

  // filters for Image
  const handleFilterBrightness = () => {
    setFilters({ filter: "brightness(1.15)" });
    var elements = document.querySelectorAll(".chipContainer div");
    elements.forEach((val) => {
      val.classList.remove("chipOnClick");
    });
    document.getElementById("brightnessChip").classList.add("chipOnClick");
  };
  const handleFilterInvert = () => {
    setFilters({ filter: "invert()" });
    var elements = document.querySelectorAll(".chipContainer div");
    elements.forEach((val) => {
      val.classList.remove("chipOnClick");
    });
    document.getElementById("invertChip").classList.add("chipOnClick");
  };
  const handleFilterNone = () => {
    setFilters({ filter: "none" });
    var elements = document.querySelectorAll(".chipContainer div");
    elements.forEach((val) => {
      val.classList.remove("chipOnClick");
    });
    document.getElementById("noneChip").classList.add("chipOnClick");
  };
  const handleFilterGrayScale = () => {
    setFilters({ filter: "grayscale()" });
    var elements = document.querySelectorAll(".chipContainer div");
    elements.forEach((val) => {
      val.classList.remove("chipOnClick");
    });
    document.getElementById("grayScaleChip").classList.add("chipOnClick");
  };
  const handleFilterSepia = () => {
    setFilters({ filter: "sepia()" });
    var elements = document.querySelectorAll(".chipContainer div");
    elements.forEach((val) => {
      val.classList.remove("chipOnClick");
    });
    document.getElementById("sepiaChip").classList.add("chipOnClick");
  };
  const handleFilterSaturate = () => {
    setFilters({ filter: "saturate(1.4)" });
    var elements = document.querySelectorAll(".chipContainer div");
    elements.forEach((val) => {
      val.classList.remove("chipOnClick");
    });
    document.getElementById("saturateChip").classList.add("chipOnClick");
  };
  const handleFilterContrast = () => {
    setFilters({ filter: "contrast(1.2)" });
    var elements = document.querySelectorAll(".chipContainer div");
    elements.forEach((val) => {
      val.classList.remove("chipOnClick");
    });
    document.getElementById("contrastChip").classList.add("chipOnClick");
  };
  return (
    <ImageBuilderContainer>
      <div className="left">
        {/* dropzone */}
        <div className="photoView">
          <Dropzone
            onDrop={handleDropImage}
            noClick
            noKeyboard
            style={{ width: "250px", height: "250px" }}
          >
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()}>
                {/* <AvatarEditor width={250} height={250} image={image.link} /> */}
                <AvatarEditor
                  image={image.link}
                  width={450}
                  height={450}
                  border={20}
                  borderRadius={borderRadius}
                  // color={[255, 255, 255, 0.6]} // RGBA
                  color={[0, 0, 0, 0.4]} // RGBA
                  scale={zoom}
                  rotate={rotate}
                  style={filters}
                />
                <input {...getInputProps()} />
              </div>
            )}
          </Dropzone>
          <h2>Drop Your Image Here</h2>
        </div>
      </div>

      <div className="right">
        {/* transform properties  */}
        <h3 style={{}}>TRANSFORM PROPERTIES</h3>
        <div className="editorContainer">
          <div className="changeType">
            <div className="typeName">Zoom : </div>
            <div className="typeChange">
              <ScrollBar
                borderRadius={borderRadius}
                setBorderRadius={setBorderRadius}
                isZoom
                zoom={zoom}
                setZoom={setZoom}
              />
            </div>
          </div>

          <div className="changeType">
            <div className="typeName">Border Radius : </div>
            <div className="typeChange">
              <ScrollBar
                borderRadius={borderRadius}
                setBorderRadius={setBorderRadius}
                zoom={zoom}
                setZoom={setZoom}
              />
            </div>
          </div>

          <div className="changeType">
            <div className="typeName">Rotate : </div>
            <div className="typeChange-3">
              <Button
                color="warning"
                variant="contained"
                onClick={() => setRotate(rotate - 2)}
              >
                <RotateLeftIcon />
              </Button>

              <Button
                color="warning"
                variant="contained"
                onClick={() => setRotate(rotate + 2)}
              >
                <RotateRightIcon />
              </Button>

              <Button
                className="button-3"
                color="error"
                variant="contained"
                onClick={() => setRotate(0)}
              >
                <ChangeCircleIcon />
              </Button>
            </div>
          </div>
        </div>

        {/* Filters  */}
        <br />
        <h3>FILTERS</h3>
        <div className="editorContainer">
          TODO : Add filters here
          <div className="chipContainer">
            <Chip
              icon={<DeleteOutlineIcon />}
              id="noneChip"
              className="chip"
              label="None"
              variant="filled"
              onClick={handleFilterNone}
            />
            <Chip
              icon={<InvertColorsIcon />}
              id="invertChip"
              className="chip"
              label="Invert"
              variant="filled"
              onClick={handleFilterInvert}
            />
            <Chip
              icon={<Brightness7Icon />}
              id="brightnessChip"
              className="chip"
              label="Brightness"
              variant="filled"
              onClick={handleFilterBrightness}
            />
            <Chip
              icon={<GradientIcon />}
              id="grayScaleChip"
              className="chip"
              label="Gray Scale"
              variant="filled"
              onClick={handleFilterGrayScale}
            />
            <Chip
              icon={<ColorLensIcon />}
              id="sepiaChip"
              className="chip"
              label="Sepia"
              variant="filled"
              onClick={handleFilterSepia}
            />
            <Chip
              icon={<HighlightIcon />}
              id="saturateChip"
              className="chip"
              label="Saturate"
              variant="filled"
              onClick={handleFilterSaturate}
            />
            <Chip
              icon={<ContrastIcon />}
              id="contrastChip"
              className="chip"
              label="Contrast"
              variant="filled"
              onClick={handleFilterContrast}
            />
          </div>
        </div>

        <button className="downloadBtn">
          Download Image
          {/* <span> */}
          <CloudDownloadIcon />
          {/* </span> */}
        </button>
      </div>
    </ImageBuilderContainer>
  );
};

export default ImageBuilder;
