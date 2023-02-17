import { MobileStepper } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { StepsDiv } from "./stepsStyle";

const Steps = ({ activeStep, setActiveStep, status }) => {
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    } else {
      status(false);
      document.getElementById("select-1").style.display = "block";
      document.getElementById("select-2").style.display = "none";
      document.getElementById("subhead-span").style.display = "none";
    }
  };
  return (
    <StepsDiv>
      <MobileStepper
        variant="progress"
        steps={4}
        position="static"
        activeStep={activeStep}
        sx={{ flexGrow: 1, background: "transparent" }}
        className="mobileStepper"
        nextButton={
          activeStep === 3 ? (
            <button className="buildbtns">
              <Link to={"/workshop/profile/printResume"}>
                <div> BUILD </div>
              </Link>
              <span className="buildstepDiv"></span>
            </button>
          ) : (
            <button
              className="nextbtns"
              onClick={handleNext}
              disabled={activeStep === 3}
            >
              <div> NEXT </div>
              <span className="stepDiv"></span>
            </button>
          )
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
