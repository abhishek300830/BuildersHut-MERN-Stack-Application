import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Button, MobileStepper } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

const Steps = ({ activeStep, setActiveStep }) => {
  const theme = useTheme();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <MobileStepper
      variant="progress"
      steps={5}
      position="static"
      activeStep={activeStep}
      sx={{ flexGrow: 1 }}
      style={{background:"transparent"}}
      nextButton={
        <Button
          size="small"
          variant="contained"
          onClick={handleNext}
          disabled={activeStep === 4}
          style={{width:"10%"}}
        >
          Next
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button
          size="small"
          variant="contained"
          onClick={handleBack}
          style={{width:"10%"}}
          disabled={activeStep === 0}
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>
      }
    />
  );
};

export default Steps;
