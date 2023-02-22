import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { border } from "@mui/system";
import React, { useContext, useState } from "react";
import builderContext from "../../../../../context/builderContext";
import { CssTextField } from "../../../../orangeTextBox/CssTextField";
import { QualificationContainer } from "./qualificationStyle";

const Qualification = () => {
  const { themebg, qualifData, setQualifData } = useContext(builderContext);
  const [graduation, setGraduation] = useState("");

  const handleChange = (ev) => {
    setGraduation(ev.target.value);
    setQualifData({ ...qualifData, grad: ev.target.value });
  };

  return (
    <QualificationContainer themebg={themebg}>
      <div className="qualification">
        {/* <h2 className="qualification-label">Qualifications</h2> */}

        <div className="graduate">
          <h3>Graduate</h3>
          <FormControl
            className="templeteClass"
            sx={{
              width: "50%",
              background: "white",
              borderRadius: "5px",
              border: "1px solid black",
              borderTop: "2px solid black",
              scale: ".8",
            }}
          >
            <InputLabel
              id="demo-simple-select-label"
              sx={{ background: "white !important" }}
            >
              Select Program
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              className="select-opt"
              value={graduation}
              label="Select Program"
              onChange={handleChange}
            >
              <MenuItem value={"B.Tech CSE"}>B.Tech CSE</MenuItem>
              <MenuItem value={"B.Tech Mech"}>B.Tech Mech</MenuItem>
              <MenuItem value={"B.Tech Civil"}>B.Tech Civil</MenuItem>
              <MenuItem value={"B.Tech BioTech"}>B.Tech BioTech</MenuItem>
              <MenuItem value={"B.Tech Elec"}>B.Tech Elec</MenuItem>
              <MenuItem value={"Bsc CS"}>Bsc CS</MenuItem>
              <MenuItem value={"Bsc Maths"}>Bsc Maths</MenuItem>
              <MenuItem value={"Bsc Physis"}>Bsc Physis</MenuItem>
              <MenuItem value={"Bsc Chem"}>Bsc Chem</MenuItem>
              <MenuItem value={"Bsc Hons"}>Bsc Hons</MenuItem>
              <MenuItem value={"B.Arch"}>B.Arch</MenuItem>
              <MenuItem value={"BCA"}>BCA</MenuItem>
              <MenuItem value={"BPharma"}>BPharma</MenuItem>
              <MenuItem value={"BDS"}>BDS</MenuItem>
              <MenuItem value={"Other"}>Other</MenuItem>
            </Select>
          </FormControl>
          <br />
          <CssTextField
            inputProps={{ maxLength: 4 }}
            id="filled-basic"
            variant="outlined"
            placeholder="Year"
            value={qualifData.year1}
            onChange={(ev) =>
              setQualifData({ ...qualifData, year1: ev.target.value })
            }
          />
          <CssTextField
            id="filled-basic"
            placeholder="Percentage"
            variant="outlined"
            value={qualifData.perc1}
            onChange={(ev) =>
              setQualifData({ ...qualifData, perc1: ev.target.value })
            }
            inputProps={{ maxLength: 2 }}
          />
          <CssTextField
            inputProps={{ maxLength: 40 }}
            id="filled-basic"
            placeholder="Institute"
            variant="outlined"
            value={qualifData.inst1}
            onChange={(ev) =>
              setQualifData({ ...qualifData, inst1: ev.target.value })
            }
          />
        </div>
        <hr />

        <div className="intermediate">
          <h3>Intermediate</h3>
          <CssTextField
            id="filled-basic"
            placeholder="Year"
            variant="outlined"
            value={qualifData.year2}
            onChange={(ev) =>
              setQualifData({ ...qualifData, year2: ev.target.value })
            }
            inputProps={{ maxLength: 4 }}
          />
          <CssTextField
            id="filled-basic"
            placeholder="Percentage"
            value={qualifData.perc2}
            onChange={(ev) =>
              setQualifData({ ...qualifData, perc2: ev.target.value })
            }
            variant="outlined"
            inputProps={{ maxLength: 2 }}
          />
          <CssTextField
            inputProps={{ maxLength: 40 }}
            id="filled-basic"
            placeholder="Institute"
            variant="outlined"
            value={qualifData.inst2}
            onChange={(ev) =>
              setQualifData({ ...qualifData, inst2: ev.target.value })
            }
          />
        </div>
        <hr />

        <div className="highschool">
          <h3>High School</h3>
          <CssTextField
            id="filled-basic"
            placeholder="Year"
            variant="outlined"
            value={qualifData.year3}
            onChange={(ev) =>
              setQualifData({ ...qualifData, year3: ev.target.value })
            }
            inputProps={{ maxLength: 4 }}
          />
          <CssTextField
            id="filled-basic"
            inputProps={{ maxLength: 2 }}
            placeholder="Percentage"
            value={qualifData.perc3}
            onChange={(ev) =>
              setQualifData({ ...qualifData, perc3: ev.target.value })
            }
            variant="outlined"
          />
          <CssTextField
            inputProps={{ maxLength: 40 }}
            id="filled-basic"
            placeholder="Institute"
            value={qualifData.inst3}
            onChange={(ev) =>
              setQualifData({ ...qualifData, inst3: ev.target.value })
            }
            variant="outlined"
          />
        </div>
      </div>
    </QualificationContainer>
  );
};

export default Qualification;
