import { Button, TextField } from "@mui/material";
import React, {useContext } from "react";
import { useState } from "react";
import builderContext from "../../../../../context/builderContext";
import { AcheivStyleDiv } from "./acheiStyle";




const Achievement = () => {

  const {formbg, borderbg,fields,setFields}=useContext(builderContext)
  const [val,setVal]=useState('')

  let maxFields=6-fields.length;  // assign max fields accordingly

  const addField=()=>{
    setVal('')
    setFields([...fields, {name:val}])
  }
  console.log(fields)

  
  
  return(
    <AcheivStyleDiv>

      <section className="acheiv" style={{borderColor:borderbg}}>

          <h1 style={{background:formbg}}>Achievements</h1>
          {fields.map( (vals,ind)=>(<TextField key={ind} disabled value={vals.name} id={`acheiv-field-`+ind} variant="filled" color="success"/>))}
          
          <TextField 
            inputProps={{ maxLength: 20 }}
            label="Enter content" 
            variant="filled" 
            color="success" 
            value={val} 
            onChange={(ev)=>(setVal(ev.target.value))}
          />
          
          <Button
            variant="contained" 
            size="large" 
            onClick={addField} 
            disabled={maxFields === 0 || val.length === 0}
            style={{ backgroundColor: "GrayText",width:"20%"}}>
            Add Fields
          </Button>
          
          <Button 
            variant="contained" 
            size="large" 
            onClick={()=>(setFields([]) )} 
            disabled={fields.length === 0}
            style={{ backgroundColor: "#e65f5f",width:"20%"}}>
            Reset
          </Button>

      </section>
    </AcheivStyleDiv>
  );
};

export default Achievement;
