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
import resumeH from '../../../images/headers/profile.png'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const ResumeBuilder = () => {
  const {formbg,themebg} = useContext(builderContext)

  const [age, setAge] = React.useState('');

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

  const onPopUpClick =()=>{
    document.getElementById('pp-girl').style.display="none";
    document.getElementById('pp-bg').style.display="none";
  }
  return (
    <ResumeStyleDiv>
      <img src={resumeH} alt="headers" className="header" />
      <img src={popUpMsg} className="pop-up-girl" alt="welcomemsgimage" id="pp-girl"/>
      <div className="blur-bg" style={{background:themebg}} onClick={onPopUpClick} id="pp-bg"></div>
      
      <section className="rMain">
        {/* main div where textfields will b there  */}
        <button id="btn-id" className="flip" onClick={onClickPreview}>
          Preview
        </button>
        <div className="left" id="left-part" >
          <div className="user-input">
            
            <div className="select-temp" 
            // style={{display:"none"}}
            >

                <div className="st1">

                  <FormControl className="alignment">
                    <FormLabel id="demo-row-radio-buttons-group-label"> Select Alignment</FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel value="horizontal" control={<Radio />} label="Horizontal" />
                      <FormControlLabel value="vertical" control={<Radio />} label="Vertical" />
                    </RadioGroup>
                  </FormControl>
                
                    <Box sx={{ minWidth: 120,display:"flex",gap:"10px" }} className="templates">
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Primary color</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Primary color"
                            onChange={handleChange}
                          >
                            <MenuItem value={10}>dark</MenuItem>
                            <MenuItem value={20}>light</MenuItem>
                            <MenuItem value={30}>midnight</MenuItem>
                          </Select>
                        </FormControl>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Secondary color</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Secondary color"
                            onChange={handleChange}
                          >
                            <MenuItem value={10}>dark</MenuItem>
                            <MenuItem value={20}>light</MenuItem>
                            <MenuItem value={30}>midnight</MenuItem>
                          </Select>
                        </FormControl>

                  </Box>
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
              style={{display:"none"}}
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
