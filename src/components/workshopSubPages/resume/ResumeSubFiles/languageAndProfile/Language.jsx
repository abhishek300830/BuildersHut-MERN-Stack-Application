import {
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { LanguageContainer } from "./languageStyle";
import { useContext } from "react";
import builderContext from "../../../../../context/builderContext";

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

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Language = () => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const {themebg,formbg,borderbg} = useContext(builderContext)

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <LanguageContainer>
      <div className="languages border" style={{borderColor:borderbg}}>
        <h2 className="lang-label" style={{background:formbg}}>Select Languages</h2>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-chip-label">Languages</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
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
                style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="profileBio border" style={{borderColor:borderbg}}>
        <h2 className="profile-label" style={{background:formbg}}>Profile Details</h2>
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "98%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-multiline-static"
            label="Bio Details"
            multiline
            rows={4}
            style={{width:"98%"}}
            variant="filled"
            defaultValue="Ex. I have core knowledge of Front-End and Back-End Web Development and working on MERN Stack Development and Data Structure and algorithms in java and Python."
            fullWidth
          />
        </Box>
      </div>
      <div className="interestAndHobbies border" style={{borderColor:borderbg}}>
        <h2 className="interest-label" style={{background:formbg}}>Interest And Hobbies</h2>
        <TextField variant="filled" label="hello"></TextField>
      </div>
    </LanguageContainer>
  );
};

export default Language;
