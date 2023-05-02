import React from "react";
// import styled from "styled-components";
import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";

const ScrollBar = ({
  borderRadius,
  setBorderRadius,
  zoom,
  isZoom,
  setZoom,
}) => {
  return (
    <div>
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={borderRadius}
        onChange={(event) => {
          if (!isZoom) {
            setBorderRadius(event.target.value * 3);
          }
          if (isZoom) {
            setZoom(event.target.value / 10 + 0.1);
          }
        }}
      />
    </div>
  );
};

export default ScrollBar;

const PrettoSlider = styled(Slider)({
  color: "#52af77",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#52af77",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});
