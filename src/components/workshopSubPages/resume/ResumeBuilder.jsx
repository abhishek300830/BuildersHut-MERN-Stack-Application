import { Box } from "@mui/material";
import React, { useState } from "react";
import chartH from "../../../images/headers/chart.png";
import Steps from "./progress/Steps";
import { ResumeStyleDiv } from "./resumeStyle";
import Language from "./ResumeSubFiles/languageAndProfile/Language";
import Personal from "./ResumeSubFiles/personal/Personal";
import Qualification from "./ResumeSubFiles/qualification/Qualification";

const ResumeBuilder = () => {
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
  const pages = [<Personal />, <Language />, <Qualification />];
  return (
    <ResumeStyleDiv>
      <img src={chartH} alt="header" className="header" />

      <section className="rMain">
        {/* main div where textfields will b there  */}
        <button id="btn-id" className="flip" onClick={onClickPreview}>
          Preview
        </button>
        <div className="left" id="left-part">
          <div className="user-input">
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
                "& .MuiButton-root": { m: 1, width: "30ch", height: "6.5ch" },
              }}
              noValidate
              autoComplete="off"
            >
              {/* Personaldetails section  */}
              {pages[activeStep]}
              {/* Personaldetails section  */}
              <Steps activeStep={activeStep} setActiveStep={setActiveStep} />
            </Box>
          </div>
        </div>

        {/* a4 size template  */}
        <div className="right" id="right-part">
          <div className="a4"></div>
        </div>
      </section>
    </ResumeStyleDiv>
  );
};

export default ResumeBuilder;
