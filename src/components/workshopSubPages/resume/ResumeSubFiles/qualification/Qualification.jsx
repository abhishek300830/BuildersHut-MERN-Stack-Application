import React, { useContext } from "react";
import builderContext from "../../../../../context/builderContext";
import { CssTextField } from "../../../../orangeTextBox/CssTextField";
import { QualificationContainer } from "./qualificationStyle";

const Qualification = () => {
  const { themebg } = useContext(builderContext);
  return (
    <QualificationContainer themebg={themebg}>
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
