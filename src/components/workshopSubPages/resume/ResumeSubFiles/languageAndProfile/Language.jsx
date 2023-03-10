import {
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { LanguageContainer } from "./languageStyle";
import { useContext } from "react";
import builderContext from "../../../../../context/builderContext";
import { CssTextField } from "../../../../orangeTextBox/CssTextField";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Hindi",
  "English",
  "Punjabi",
  "Bengali",
  "French",
  "Chinease",
  "Spanish",
  "German",
  "Telugo",
  "Japanease",
  "Italian",
];

function getStyles(name, lang, theme) {
  return {
    fontWeight:
      lang.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Language = () => {
  const theme = useTheme();

  const { borderbg, hobbieData, setHobbieData, profileInfo,setProfileInfo,languages,setLanguages } = useContext(builderContext);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setLanguages(
      typeof value === "string" ? value.split(",") : value
    )
  };

  // interest and hobbies
  const [val, setVal] = useState("");
  let maxFields = 4 - hobbieData.length;

  const addField = () => {
    setHobbieData([...hobbieData, { name: val }]);
    setVal("");
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addField();
    }
  };

  return (
    <LanguageContainer>
      <div className="languages border" style={{ borderColor: borderbg }}>
        <h2
          className="lang-label"
          // style={{ background: formbg }}
        >
          Select Languages
          <FormControl sx={{ m: 1, width: 300, background: "white" }}>
            <InputLabel
              id="demo-multiple-chip-label"
              style={{
                fontFamily: "ubuntu,sans-serif",
              }}
            >
              <span
                style={{
                  backgroundColor: "white",
                  padding: "0px 3px",
                  borderRadius: "5px",
                }}
              >
                Languages
              </span>
            </InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              value={languages}
              onChange={handleChange}
              input={
                <OutlinedInput
                  className="outlined-lang-input"
                  style={{
                    border: "1px solid black",
                    borderTop: "2px solid black",
                  }}
                  id="select-multiple-chip"
                  label="Languages"
                />
              }
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, languages, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </h2>

        <hr />
      </div>

      <div className="profileBio border">
        <h2
          className="profile-label"
          // style={{ background: formbg }}
        >
          Profile Details
        </h2>
        <Box
          sx={{
            "& .MuiTextField-root": {
              m: 1,
              width: "98%",
              bottomBorder: "green 10px solid !important",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <CssTextField
            id="outlined-multiline-static"
            multiline
            rows={4}
            style={{ width: "98%" }}
            variant="outlined"
            value={profileInfo}
            onChange={(ev)=>setProfileInfo(ev.target.value)}
            // defaultValue="Ex. I have core knowledge of Front-End and Back-End Web Development and working on MERN Stack Development and Data Structure and algorithms in java and Python."
            fullWidth
          />
        </Box>
        <hr />
      </div>

      <div
        className="interestAndHobbies border"
        style={{ borderColor: borderbg }}
      >
        <h4>NOTE: max 4 fields are allowed.</h4>
        <h2
          className="interest-label"
          // style={{ background: formbg }}
        >
          <div className="content">Interest And Hobbies: </div>

          <CssTextField
            inputProps={{ maxLength: 20 }}
            placeholder="Enter your hobbie"
            variant="outlined"
            color="success"
            value={val}
            onChange={(ev) => setVal(ev.target.value)}
            onKeyDown={handleKeyDown}
            disabled={maxFields === 0}
          />
        </h2>

        <div className="dyn-data">
          {hobbieData.map((vals, ind) => (
            <CssTextField
              key={ind}
              disabled
              value={vals.name}
              variant="outlined"
            />
          ))}
        </div>

        <br />
        <div className="btns-center" style={{ textAlign: "center" }}>
          <button
            className="all-btns"
            onClick={addField}
            disabled={maxFields === 0 || val.length === 0}
          >
            <lord-icon
              src="https://cdn.lordicon.com/ynwbvguu.json"
              trigger="hover"
              colors="primary:#000000"
              style={{
                width: "40px",
                height: "40px",
                opacity: maxFields === 0 || val.length === 0 ? "0.6" : "1",
              }}
            ></lord-icon>
          </button>

          <button
            className="all-btns2"
            onClick={() => setHobbieData([])}
            disabled={hobbieData.length === 0}
          >
            <lord-icon
              src="https://cdn.lordicon.com/akuwjdzh.json"
              trigger="hover"
              colors={`primary:#090909`}
              style={{
                width: "40px",
                height: "40px",
                opacity: hobbieData.length === 0 ? "0.6" : "1",
              }}
            ></lord-icon>
          </button>
        </div>
      </div>
    </LanguageContainer>
  );
};

export default Language;
