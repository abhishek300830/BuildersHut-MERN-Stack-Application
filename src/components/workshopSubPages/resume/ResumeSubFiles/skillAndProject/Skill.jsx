import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import builderContext from "../../../../../context/builderContext";
import { SkillStyleDiv } from "./skillStyle";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";


const Skill = () => {

  const {formbg,borderbg}=useContext(builderContext)

  const [age, setAge] = React.useState('');
  const [value, setValue] = useState(dayjs("2014-08-18T21:11:54"));
  const handleChange2 = (newValue) => {
    setValue(newValue);
  };
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return(
    <SkillStyleDiv>
        
        <section className="skills" style={{borderColor:borderbg}}>
          <h1 style={{background:formbg}}>Skills</h1>
          <TextField label="enter your skill" variant="filled" color="success"/>
          <Button variant="contained" size="large"
          style={{ backgroundColor: "GrayText"}}>
            Add Field
          </Button>

        </section>

        <section className="projects" style={{borderColor:borderbg}}>

          <h1 style={{background:formbg}}>Projects and Interships</h1>
          
          <FormControl fullWidth style={{width:"20%",marginTop:"1%"}}>
            <InputLabel id="demo-simple-select-label">type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="type"
              onChange={handleChange}
            >
              <MenuItem value="project">Projects</MenuItem>
              <MenuItem value="internship">Internships</MenuItem>
              <MenuItem value="other">other</MenuItem>
            </Select>
        </FormControl>
          
          <TextField label="name" variant="filled" color="success"/>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileDatePicker
            label="DATE"
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handleChange2}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
          <br />
          <Button variant="contained" size="large"
          style={{ backgroundColor: "GrayText",width:"30%",marginLeft:"35%"}}>
            Add Field
          </Button>
        </section>

        
    
    </SkillStyleDiv>
  ) 
};

export default Skill;
