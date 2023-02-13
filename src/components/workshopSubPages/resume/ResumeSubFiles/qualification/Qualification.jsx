import { styled, TextField } from "@mui/material";
import React from "react";
import { QualificationContainer } from "./qualificationStyle";

const Qualification = () => {
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#fcae05",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      // "& fieldset": {
      //   borderColor: "red",
      // },
      "&:hover fieldset": {
        borderColor: "#F0B125",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#F0B125",
      },
    },
  });

  return (
    <QualificationContainer>
      <div className="qualification">
        <h2 className="qualification-label">Qualifications</h2>
        <div className="graduate">
          <h3>Graduate</h3>
          <CssTextField
            id="filled-basic"
            label="Year"
            variant="outlined"
            type="number"
            inputProps={{ maxLength: 4 }}
          />
          <CssTextField
            id="filled-basic"
            label="Percentage"
            type="number"
            variant="outlined"
            inputProps={{ maxLength: 3 }}
          />
          <CssTextField
            id="filled-basic"
            label="Institute"
            variant="outlined"
            type="text"
          />
        </div>
        <div className="intermediate">
          <h3>Intermediate</h3>
          <CssTextField
            id="filled-basic"
            label="Year"
            variant="outlined"
            type="number"
            inputProps={{ maxLength: 4 }}
          />
          <CssTextField
            id="filled-basic"
            label="Percentage"
            type="number"
            variant="outlined"
            inputProps={{ maxLength: 3 }}
          />
          <CssTextField
            id="filled-basic"
            label="Institute"
            variant="outlined"
            type="text"
          />
        </div>
        <div className="highschool">
          <h3>High School</h3>
          <CssTextField
            id="filled-basic"
            label="Year"
            variant="outlined"
            type="number"
            inputProps={{ maxLength: 4 }}
          />
          <CssTextField
            id="filled-basic"
            label="Percentage"
            type="number"
            variant="outlined"
          />
          <CssTextField
            id="filled-basic"
            label="Institute"
            variant="outlined"
            type="text"
          />
        </div>
      </div>
    </QualificationContainer>
  );
};

export default Qualification;
