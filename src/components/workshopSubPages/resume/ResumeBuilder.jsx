import { TextField } from "@mui/material";
import React, { useState } from "react";
import chartH from "../../../images/headers/chart.png";
import { ResumeStyleDiv } from "./resumeStyle";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";


const ResumeBuilder = () => {
  const [value, setValue] = useState(dayjs("2014-08-18T21:11:54"));
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  var flag=true;
  const onClickPreview=()=>{
    if(flag){
      document.getElementById("left-part").style.display="block";
      document.getElementById("right-part").style.display="none";
      document.getElementById("btn-id").innerText="Preview";
      flag=!flag;
    }else{
      document.getElementById("left-part").style.display="none";
      document.getElementById("right-part").style.display="block";
      document.getElementById("btn-id").innerText="Edit";
      flag=!flag;
    }
  }
  return (
  <ResumeStyleDiv>
    <img src={chartH} alt="header" className="header"/>

    <section className="rMain">
      {/* main div where textfields will b there  */}
        <button id="btn-id" className="flip" onClick={onClickPreview}>Preview</button>
        <div className="left" id="left-part">
         
         
          <div className="user-input">
            <TextField label="Name" variant="filled" />

            {/* <DesktopDatePicker
              label="Date desktop"
              inputFormat="MM/DD/YYYY"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            /> */}
            <br />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDatePicker
                label="Date mobile"
                inputFormat="MM/DD/YYYY"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
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
