import { Box } from "@mui/material";
import React, { useState } from "react";
import resumeH from "../../../images/headers/profile.png";
import Steps from "./progress/Steps";
import { ResumeStyleDiv } from "./resumeStyle";
import Achievement from "./ResumeSubFiles/achievements/Achievement";
import Language from "./ResumeSubFiles/languageAndProfile/Language";
import Personal from "./ResumeSubFiles/personal/Personal";
import Qualification from "./ResumeSubFiles/qualification/Qualification";
import Skill from "./ResumeSubFiles/skillAndProject/Skill";
import v_res from '../../../images/left out/vert_resume.png'
import h_res from '../../../images/left out/horiz_resume.png'
import builderContext from "../../../context/builderContext";
import { useContext } from "react";

const ResumeBuilder = () => {
  const {formbg} = useContext(builderContext)

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
  return (
    <ResumeStyleDiv>
      <img src={resumeH} alt="header" className="header" />
      {/* <h2 className="header">PROFILE BUILDER</h2> */}

      <section className="rMain">
        {/* main div where textfields will b there  */}
        <button id="btn-id" className="flip" onClick={onClickPreview}>
          Preview
        </button>
        <div className="left" id="left-part" >
          <div className="user-input">
            
            <div className="select-temp" style={{display:"none"}}>

                <div className="st1">
                  <h2>Choose <br /> alignment</h2>
                    <div>
                      <img src={h_res} alt="temp" /> <br />
                      <b>Horizontal</b>
                      </div>
                    <div>
                      <img src={v_res} alt="temp" /> <br />
                      <b>Vertical</b>
                    </div>
                
                </div>

                 
            </div>

            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch", background:formbg , borderRadius:"0.8ch"},
                "& .MuiButton-root": { m: 1, width: "30ch", height: "6.5ch" },
              }}
              noValidate
              autoComplete="off"
              // style={{display:"none"}}
            >
              {/* Personaldetails section  */}
              {pages[activeStep]}
              {/* Personaldetails section  */}

              <div className="scroll-x-y">
                <Steps activeStep={activeStep} setActiveStep={setActiveStep} />
              </div>
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
