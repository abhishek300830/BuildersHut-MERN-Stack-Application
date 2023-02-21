import { TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import builderContext from "../../../../../context/builderContext";
import { SkillStyleDiv } from "./skillStyle";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { CssTextField } from "../../../../orangeTextBox/CssTextField";

const Skill = () => {
  const {
    borderbg,
    skillData,
    setSkillData,
    projectData,
    othersData,
    setOthersData,
    setProjectData,
    intershipData,
    setIntershipData,
  } = useContext(builderContext);
  const [val, setVal] = useState("");
  var maxFields = 8 - skillData.length;

  const addField = () => {
    setSkillData([...skillData, { name: val }]);
    setVal("");
  };

  const [type, setType] = useState("");
  const [txValue, setTxValue] = useState("");
  const month = ["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];


  const [dateVal, setDateValue] = useState(dayjs("2014-08-18"));
  const handleChange2 = (newValue) => {
    setDateValue(newValue);
  };


  var maxField2 =
    4 - (projectData.length + intershipData.length + othersData.length);

  const addField2 = () => {
    var tempDate=month[dateVal.$d.getMonth()]+" "+dateVal.$d.getDate()+", "+dateVal.$d.getFullYear();

    if (type === "Project") {
      setProjectData([...projectData, { type, name: txValue, date: tempDate }]);
    } else if (type === "Internship") {
      setIntershipData([
        ...intershipData,
        { type, name: txValue, date: tempDate },
      ]);
    } else {
      setOthersData([...othersData, { type, name: txValue, date: tempDate }]);
    }
    setType("");
    setTxValue("");
    setDateValue(dayjs("2014-08-18"));
  };

  const resetAll = () => {
    setIntershipData([]);
    setProjectData([]);
    setOthersData([]);
  };

  return (
    <SkillStyleDiv>
      <section className="skills" style={{ borderColor: borderbg }}>
        <h4>NOTE: max 8 fields are allowed.</h4>
        <h3>
          Skills:
          <CssTextField
            inputProps={{ maxLength: 20 }}
            placeholder="Enter your skill"
            variant="outlined"
            color="success"
            disabled={maxFields === 0}
            value={val}
            onChange={(ev) => setVal(ev.target.value)}
          />
        </h3>

        <div className="dyn-data">
          {skillData.map((vals, ind) => (
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
            onClick={() => setSkillData([])}
            disabled={skillData.length === 0}
          >
            <lord-icon
              src="https://cdn.lordicon.com/akuwjdzh.json"
              trigger="hover"
              colors={`primary:#000000`}
              style={{
                width: "40px",
                height: "40px",
                opacity: skillData.length === 0 ? "0.6" : "1",
              }}
            ></lord-icon>
          </button>
        </div>

        <hr />
      </section>

      <section className="projects" style={{ borderColor: borderbg }}>
        <h3>Projects and Interships </h3>
        <h4>NOTE: max 4 fields are allowed.</h4>

        <div className="project-select">
          <FormControl
            className="select-2"
            style={{
              width: "20%",
              marginTop: "1%",
              border: "1px solid black",
              borderTop: "2px solid black",
              borderRadius: "5px",
            }}
          >
            <InputLabel id="demo-simple-select-label">type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              label="type"
              style={{
                paddingBottom: "3px",
                color: "black",
                backgroundColor: "white",
              }}
              onChange={(ev) => setType(ev.target.value)}
            >
              <MenuItem value="Project">Projects</MenuItem>
              <MenuItem value="Internship">Internships</MenuItem>
              <MenuItem value="Other">other</MenuItem>
            </Select>
          </FormControl>

          <CssTextField
            placeholder="name"
            variant="outlined"
            value={txValue}
            inputProps={{ maxLength: 60 }}
            onChange={(ev) => setTxValue(ev.target.value)}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDatePicker
              label="DATE"
              inputFormat="DD/MM/YYYY"
              value={dateVal}
              onChange={handleChange2}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>

        <br />

        <div className="btns-center" style={{ textAlign: "center" }}>
          <button
            className="all-btns"
            onClick={addField2}
            disabled={
              maxField2 === 0 || type.length === 0 || txValue.length === 0
            }
          >
            <lord-icon
              src="https://cdn.lordicon.com/ynwbvguu.json"
              trigger="hover"
              colors="primary:#000000"
              style={{
                width: "40px",
                height: "40px",
                opacity:
                  maxField2 === 0 || type.length === 0 || txValue.length === 0
                    ? "0.6"
                    : "1",
              }}
            ></lord-icon>
          </button>

          <button
            className="all-btns2"
            onClick={resetAll}
            disabled={
              intershipData.length + projectData.length + othersData.length ===
              0
            }
          >
            <lord-icon
              src="https://cdn.lordicon.com/akuwjdzh.json"
              trigger="hover"
              colors={`primary:#000000`}
              style={{
                width: "40px",
                height: "40px",
                opacity:
                  intershipData.length +
                    projectData.length +
                    othersData.length ===
                  0
                    ? "0.6"
                    : "1",
              }}
            ></lord-icon>
          </button>
        </div>

        <div className="dyn-data">
          {projectData.map((vals, ind) => (
            <div key={ind}>
              <hr />
              <CssTextField variant="outlined" disabled value={vals.type} />
              <CssTextField variant="outlined" disabled value={vals.name} />
              <CssTextField
                variant="outlined"
                disabled
                type="text"
                value={vals.date}
              />
              <br />
            </div>
          ))}

          {intershipData.map((vals, ind) => (
            <div key={ind}>
              <hr />
              <CssTextField variant="outlined" disabled value={vals.type} />
              <CssTextField disabled variant="outlined" value={vals.name} />
              <CssTextField
                disabled
                variant="outlined"
                value={vals.date }
              />
              <br />
            </div>
          ))}

          {othersData.map((vals, ind) => (
            <div key={ind}>
              <hr />
              <CssTextField variant="outlined" disabled value={vals.type} />
              <CssTextField variant="outlined" disabled value={vals.name} />
              <CssTextField
                variant="outlined"
                disabled
                value={vals.date}
              />
              <br />
            </div>
          ))}
        </div>
      </section>
    </SkillStyleDiv>
  );
};

export default Skill;
