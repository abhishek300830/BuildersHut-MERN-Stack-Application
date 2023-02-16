import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TextField } from "@mui/material";
import dayjs from "dayjs";

import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { PersonalSection } from "./personalStyle";
import Language from "../languageAndProfile/Language";
import { useContext } from "react";
import builderContext from "../../../../../context/builderContext";
import { CssTextField } from "../../../../orangeTextBox/CssTextField";

const Personal = () => {
  const { formbg, borderbg } = useContext(builderContext);

  // const [value, setValue] = useState(dayjs("2014-08-18T21:11:54"));
  const [value, setValue] = useState();
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <PersonalSection>
      <div className="personal" style={{marginLeft:"2%"}}>
        {/* <h3 className="p-label">Personal Details</h3> */}
        <CssTextField placeholder="Name" variant="outlined" color="success" />
        <LocalizationProvider dateAdapter={AdapterDayjs} >
          <MobileDatePicker
            label="DOB"
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </div>
      <div className="address" style={{ borderColor: borderbg }}>
        <h3 className="label" style={{ background: formbg }}>
          Address
        </h3>
        <CssTextField placeholder="City" variant="outlined" />
        <CssTextField placeholder="State" variant="outlined" color="success" />
        <CssTextField placeholder="PinCode" variant="outlined" color="success" />
        <CssTextField placeholder="Mobile" variant="outlined" color="success" />
        <CssTextField placeholder="Email" variant="outlined" color="success" />
        <CssTextField
          placeholder="linkedin, github, etc."
          variant="outlined"
          color="success"
        />
      </div>
      <Language />
    </PersonalSection>
  );
};

export default Personal;
