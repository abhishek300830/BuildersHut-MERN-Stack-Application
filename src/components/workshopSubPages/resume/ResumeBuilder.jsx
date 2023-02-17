import { Box } from "@mui/material";
import React, { useState } from "react";
import popUpMsg from "../../../images/left out/popupGirl.png";
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
import HorizontalTemplete from "./resumeAlignment/Horizonal/HorizontalTemplete";
import VerticalTemplete from "./resumeAlignment/Vertical/VerticalTemplete";
import MainPrintableFile from "./printables/mainFile/MainPrintableFile";

const ResumeBuilder = () => {
  const { headings } = useContext(builderContext);

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
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

  const [alignment, setAlignment] = useState("horizontal");

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
                      {" "}
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
                        value={age}
                        label="Template"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>dark</MenuItem>
                        <MenuItem value={20}>light</MenuItem>
                        <MenuItem value={30}>midnight</MenuItem>
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
          <div className="a4" onClick={onClickA4}>
            {alignment === "horizontal" ? (
              <HorizontalTemplete />
            ) : (
              <VerticalTemplete />
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
        <MainPrintableFile />
      </div>
    </ResumeStyleDiv>
  );
};

export default ResumeBuilder;
