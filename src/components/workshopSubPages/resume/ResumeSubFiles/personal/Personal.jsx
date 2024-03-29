import React, { useContext, useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TextField } from "@mui/material";
// import dayjs from "dayjs";

import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { PersonalSection } from "./personalStyle";
import Language from "../languageAndProfile/Language";
import { CssTextField } from "../../../../orangeTextBox/CssTextField";
import builderContext from "../../../../../context/builderContext";

const Personal = () => {
  const { personalData, setPersonalData, addrData, setAddrData, setImage } =
    useContext(builderContext);

  const [value, setValue] = useState("Aug 5, 2022");
  const month = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const handleChange = (newValue) => {
    var tempDate =
      month[newValue.$d.getMonth()] +
      " " +
      newValue.$d.getDate() +
      ", " +
      newValue.$d.getFullYear();
    setValue(newValue);
    setPersonalData({ ...personalData, dob: tempDate });
  };

  // handle Image Change Here

  const handleImageChange = (e) => {
    // console.log(e.target.files);
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <PersonalSection>
      <div className="personal" style={{ marginLeft: "2%" }}>
        {/* <h3 className="p-label">Personal Details</h3> */}
        <label>Name:</label>
        <CssTextField
          placeholder="enter your name"
          variant="outlined"
          value={personalData.name}
          onChange={(ev) =>
            setPersonalData({ ...personalData, name: ev.target.value })
          }
          color="success"
        />
        <label>DOB: </label>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileDatePicker
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>

        <label className="imageLabel" htmlFor="image">
          Photo:{" "}
        </label>
        {/* <input type="image" src="" alt="" /> */}
        <input
          type="file"
          id="image"
          src=""
          alt="image"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>

      <section className="merge-2">
        <div className="address">
          <h2 className="label">Address</h2>
          <CssTextField
            placeholder="City"
            variant="outlined"
            value={addrData.city}
            onChange={(ev) =>
              setAddrData({ ...addrData, city: ev.target.value })
            }
          />
          <CssTextField
            placeholder="State"
            variant="outlined"
            value={addrData.state}
            onChange={(ev) =>
              setAddrData({ ...addrData, state: ev.target.value })
            }
          />
          <CssTextField
            placeholder="PinCode"
            variant="outlined"
            value={addrData.pincode}
            onChange={(ev) =>
              setAddrData({ ...addrData, pincode: ev.target.value })
            }
          />
          <CssTextField
            placeholder="Mobile"
            variant="outlined"
            value={addrData.mobile}
            onChange={(ev) =>
              setAddrData({ ...addrData, mobile: ev.target.value })
            }
          />
          <CssTextField
            placeholder="Email"
            variant="outlined"
            value={addrData.email}
            onChange={(ev) =>
              setAddrData({ ...addrData, email: ev.target.value })
            }
          />
          <CssTextField
            placeholder="linkedin, github, etc."
            variant="outlined"
            value={addrData.other}
            onChange={(ev) =>
              setAddrData({ ...addrData, other: ev.target.value })
            }
          />
          <hr />
        </div>
        <Language />
      </section>
    </PersonalSection>
  );
};

export default Personal;
