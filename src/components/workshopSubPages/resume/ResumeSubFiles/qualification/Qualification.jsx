import React, { useContext } from "react";
import builderContext from "../../../../../context/builderContext";
import { CssTextField } from "../../../../orangeTextBox/CssTextField";
import { QualificationContainer } from "./qualificationStyle";

const Qualification = () => {
  const { themebg,qualifData,setQualifData } = useContext(builderContext);

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
            value={qualifData.year1}
            onChange={(ev)=>setQualifData({...qualifData,year1:ev.target.value})}
            inputProps={{ maxLength: 4 }}
          />
          <CssTextField
            id="filled-basic"
            label="Percentage"
            type="number"
            variant="outlined"
            value={qualifData.perc1}
            onChange={(ev)=>setQualifData({...qualifData,perc1:ev.target.value})}
            inputProps={{ maxLength: 3 }}
          />
          <CssTextField
            id="filled-basic"
            label="Institute"
            variant="outlined"
            value={qualifData.inst1}
            onChange={(ev)=>setQualifData({...qualifData,inst1:ev.target.value})}
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
            value={qualifData.year2}
            onChange={(ev)=>setQualifData({...qualifData,year2:ev.target.value})}
            inputProps={{ maxLength: 4 }}
          />
          <CssTextField
            id="filled-basic"
            label="Percentage"
            type="number"
            value={qualifData.perc2}
            onChange={(ev)=>setQualifData({...qualifData,perc2:ev.target.value})}
            variant="outlined"
            inputProps={{ maxLength: 3 }}
          />
          <CssTextField
            id="filled-basic"
            label="Institute"
            variant="outlined"
            value={qualifData.inst2}
            onChange={(ev)=>setQualifData({...qualifData,inst2:ev.target.value})}
            type="text"
          />
        </div>
        <div className="highschool">
          <h3>High School</h3>
          <CssTextField
            id="filled-basic"
            label="Year"
            variant="outlined"
            value={qualifData.year3}
            onChange={(ev)=>setQualifData({...qualifData,year3:ev.target.value})}
            type="number"
            inputProps={{ maxLength: 4 }}
          />
          <CssTextField
            id="filled-basic"
            label="Percentage"
            type="number"
            value={qualifData.perc3}
            onChange={(ev)=>setQualifData({...qualifData,perc3:ev.target.value})}
            variant="outlined"
          />
          <CssTextField
            id="filled-basic"
            label="Institute"
            value={qualifData.inst3}
            onChange={(ev)=>setQualifData({...qualifData,inst3:ev.target.value})}
            variant="outlined"
            type="text"
          />
        </div>
      </div>
    </QualificationContainer>
  );
};

export default Qualification;
