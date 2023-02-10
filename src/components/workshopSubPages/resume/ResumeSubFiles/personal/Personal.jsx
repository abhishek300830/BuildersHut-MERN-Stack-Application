import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Button, TextField } from "@mui/material";
import dayjs from "dayjs";

import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";

const Personal = () => {
  const [value, setValue] = useState(dayjs("2014-08-18T21:11:54"));
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <section className="bioData">
      <div>
        <h2>Personal Details</h2>
        <TextField label="Name" variant="filled" color="success" />
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
      <div className="address">
        <h3 className="label">Address</h3>
        <TextField label="City" variant="filled" color="success" />
        <TextField label="State" variant="filled" color="success" />
        <TextField label="PinCode" variant="filled" color="success" />
        <TextField label="Mobile" variant="filled" color="success" />
        <TextField label="Email" variant="filled" color="success" />
        <Button
          variant="contained"
          size="large"
          style={{ backgroundColor: "GrayText" }}
        >
          Add Fields
        </Button>
      </div>
      <div className="languages"></div>
    </section>
  );
};

export default Personal;
