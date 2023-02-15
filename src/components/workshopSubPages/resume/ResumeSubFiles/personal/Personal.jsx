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

  const [value, setValue] = useState(dayjs("2014-08-18T21:11:54"));
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <PersonalSection>
      <div className="personal">
        <h3 className="p-label">Personal Details</h3>
        <CssTextField label="Name" variant="filled" color="success" />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
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
        <CssTextField label="City" variant="filled" color="success" />
        <CssTextField label="State" variant="filled" color="success" />
        <CssTextField label="PinCode" variant="filled" color="success" />
        <CssTextField label="Mobile" variant="filled" color="success" />
        <CssTextField label="Email" variant="filled" color="success" />
        <CssTextField
          label="linkedin, github, etc."
          variant="filled"
          color="success"
        />
      </div>
      <Language />
    </PersonalSection>
  );
};

export default Personal;
