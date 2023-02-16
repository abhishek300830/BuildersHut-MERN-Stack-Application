import { MobileStepper } from "@mui/material";
import React from "react";
import { StepsDiv } from "./stepsStyle";

const Steps = ({ activeStep, setActiveStep }) => {

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if(activeStep === 0){
      document.getElementById('select-1').style.display="block";
      document.getElementById('select-2').style.display="none";
      document.getElementById('subhead-span').style.display="none";
    }else{
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };
  return (
    <StepsDiv>
      <MobileStepper
        variant="progress"
        steps={4}
        position="static"
        activeStep={activeStep}
        sx={{ flexGrow: 1, background: "transparent", color: "red !important" }}
        className="mobileStepper"
        nextButton={
          <button
            className="nextbtns"
            onClick={handleNext}
            disabled={activeStep === 3}
          >
            <div> NEXT </div>
            <span className="stepDiv"></span>
          </button>
        }
        backButton={
          <button
            className="nextbtns"
            onClick={handleBack}
            // disabled={activeStep === 0}
          >
            <div> BACK </div>
            <span className="stepDiv"></span>
          </button>
        }
      />
    </StepsDiv>
  );
};

export default Steps;
