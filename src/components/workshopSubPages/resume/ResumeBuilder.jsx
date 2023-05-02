import { Box } from "@mui/material";
import React, { useState } from "react";
import popUpMsg from "../../../images/left out/popupGirl.png";
import board from "../../../images/left out/board1.png";
import Steps from "./progress/Steps";
import { ResumeStyleDiv } from "./resumeStyle";
import Achievement from "./ResumeSubFiles/achievements/Achievement";
import Personal from "./ResumeSubFiles/personal/Personal";
import Qualification from "./ResumeSubFiles/qualification/Qualification";
import Skill from "./ResumeSubFiles/skillAndProject/Skill";
// import v_res from '../../../images/left out/vert_resume.png'
// import h_res from '../../../images/left out/horiz_resume.png'
import builderContext from "../../../context/builderContext";
import { useContext } from "react";
// import resumeH from "../../../images/headers/profile.png";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import InvertColorsIcon from "@mui/icons-material/InvertColors";
import MainPrintableFile from "./printables/mainFile/MainPrintableFile";
import HorizontalPreview from "./printables/horizontalFile/HorizontalPreview";
import VerticalResume from "./printables/VerticalDesign/VerticalResume";

const ResumeBuilder = () => {
  const { headings, setBackTheme } = useContext(builderContext);

  // theme color of resume

  const themePrimaryColors = [
    "#191919",
    "#238F51",
    "#3b3654",
    "#303c47",
    "#323271",
  ];
  const themeSecondaryColors = [
    "#f8f8f8",
    "#d1f9e2f0",
    "#f3f0ff",
    "#f8f8f8",
    "#efefff",
  ];
  var indx;

  const handleChange = (event) => {
    indx = event.target.value;
    setBackTheme({
      primary: themePrimaryColors[event.target.value],
      secondary: themeSecondaryColors[event.target.value],
    });
  };

  var flag = false;
  const onClickPreview = () => {
    if (flag) {
      document.getElementById("left-part").style.display = "block";
      document.getElementById("right-part").style.display = "none";
      document.getElementById("btn-id").innerText = "Preview";
      flag = !flag;
    } else {
      document.getElementById("left-part").style.display = "none";
      document.getElementById("right-part").style.display = "block";
      document.getElementById("btn-id").innerText = "Edit";
      flag = !flag;
    }
  };
  const [activeStep, setActiveStep] = useState(0);
  const pages = [
    <Personal />,
    // <Language />,
    <Qualification />,
    <Skill />,
    <Achievement />,
  ];

  const onPopUpClick = () => {
    document.getElementById("pp-girl").style.display = "none";
    document.getElementById("pp-bg").style.display = "none";
  };

  const [makeVisible, setMakeVisible] = useState(false);
  const goNextHandler = () => {
    setMakeVisible(true);
    document.getElementById("select-1").style.display = "none";
    document.getElementById("select-2").style.display = "block";
    document.getElementById("subhead-span").style.display = "inline";
  };

  // horizontal and vertical alignment state
  const { alignment, setAlignment } = useContext(builderContext);

  const onAlignmentChange = (val) => {
    setAlignment(val.target.value);
  };

  const onClickA4 = () => {
    document.getElementById("show-result").style.display = "block";
  };

  return (
    <ResumeStyleDiv>
      {/* <img src={resumeH} alt="headers" id="header-1" className="header" style={{display:"none"}}/> */}

      <img
        src={popUpMsg}
        className="pop-up-girl"
        alt="welcomemsgimage"
        id="pp-girl"
        onClick={onPopUpClick}
      />
      <div
        className="blur-bg"
        style={{ background: "#0a0a0ad7" }}
        onClick={onPopUpClick}
        id="pp-bg"
      ></div>

      <section className="rMain">
        {/* main div where textfields will b there  */}
        <button id="btn-id" className="flip" onClick={onClickPreview}>
          Preview
        </button>
        <div className="left" id="left-part">
          <div className="subheads">
            Resume Builder /
            <span style={{ display: "none" }} id="subhead-span">
              {headings[activeStep]}
            </span>
          </div>

          <div className="left-temp">
            <div className="user-input">
              <div className="select-temp" id="select-1">
                <h4 className="resume-intro">
                  It helps you to build your resume of your choice and
                  customization without any efforts.
                </h4>

                <div className="st1">
                  <div className="abs-1"></div>

                  <FormControl className="alignment">
                    <FormLabel
                      id="demo-row-radio-buttons-group-label"
                      className="align-label"
                    >
                      Select Alignment
                    </FormLabel>

                    <RadioGroup
                      // row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "50% 40%",
                        justifyContent: "space-between",
                      }}
                      onChange={onAlignmentChange}
                    >
                      <FormControlLabel
                        value="horizontal"
                        control={<Radio />}
                        label="Horizontal"
                      />
                      <FormControlLabel
                        value="vertical"
                        control={<Radio />}
                        label="Vertical"
                      />
                    </RadioGroup>
                  </FormControl>

                  <Box
                    sx={{
                      minWidth: 120,
                      display: "flex",
                      gap: "10px",
                      textAlign: "center",
                    }}
                    className="templates"
                  >
                    <FormControl className="templeteClass">
                      <InputLabel id="demo-simple-select-label">
                        Template
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        className="select-opt"
                        value={indx}
                        label="Template"
                        onChange={handleChange}
                      >
                        <MenuItem value={4}>
                          <InvertColorsIcon
                            style={{
                              background: "white",
                              borderRadius: "20px",
                              color: "#3d3da4",
                              marginRight: "2%",
                            }}
                          />
                          Navy Blue
                        </MenuItem>
                        <MenuItem value={3}>
                          <InvertColorsIcon
                            style={{
                              background: "white",
                              borderRadius: "20px",
                              color: "#515960",
                              marginRight: "2%",
                            }}
                          />
                          Metallic Grey (Recommended)
                        </MenuItem>
                        <MenuItem value={0}>
                          <InvertColorsIcon
                            style={{
                              background: "white",
                              borderRadius: "20px",
                              color: "#191919",
                              marginRight: "2%",
                            }}
                          />
                          dark
                        </MenuItem>
                        <MenuItem value={1}>
                          <InvertColorsIcon
                            style={{
                              color: "#238F51",
                              background: "white",
                              borderRadius: "20px",
                              marginRight: "2%",
                            }}
                          />
                          Classic Green
                        </MenuItem>
                        <MenuItem value={2}>
                          <InvertColorsIcon
                            style={{
                              color: "#3b3654",
                              background: "white",
                              borderRadius: "20px",
                              marginRight: "2%",
                            }}
                          />
                          Midnight
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Box>

                  <button className="begin-btn" onClick={goNextHandler}>
                    <span>Begin</span>
                    <div></div>
                  </button>
                </div>
              </div>

              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": {
                    m: 1,
                    width: "25ch",
                    background: "white",
                    borderRadius: "0.8ch",
                  },
                  "& .MuiButton-root": { m: 1, width: "30ch", height: "6.5ch" },
                }}
                noValidate
                autoComplete="off"
                id="select-2"
                style={{ display: "none" }}
              >
                {/* Personaldetails section  */}
                {pages[activeStep]}
                {/* Personaldetails section  */}
              </Box>
            </div>
          </div>

          {makeVisible && (
            <div className="scroll-x-y">
              <Steps
                activeStep={activeStep}
                setActiveStep={setActiveStep}
                status={setMakeVisible}
              />
            </div>
          )}
        </div>

        {/* a4 size template  */}
        <div className="right" id="right-part">
          <img className="clip" src={board} alt="boardclip" />
          <div className="a4" onClick={onClickA4}>
            {alignment === "horizontal" ? (
              <div className="align-me">
                <HorizontalPreview />
              </div>
            ) : (
              <div className="align-me">
                <VerticalResume />
              </div>
            )}
          </div>
          {/* <button className="print-btn" onClick={window.print}>
            <span>Print</span>
            <div></div>
          </button> */}
        </div>
      </section>

      {/* show result  */}
      <div id="show-result" style={{ display: "none" }}>
        <MainPrintableFile type={alignment} />
      </div>
    </ResumeStyleDiv>
  );
};

export default ResumeBuilder;
