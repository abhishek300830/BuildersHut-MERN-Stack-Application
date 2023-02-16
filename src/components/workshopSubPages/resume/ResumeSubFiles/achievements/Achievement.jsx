import { Button } from "@mui/material";
import React, { useContext } from "react";
import { useState } from "react";
import builderContext from "../../../../../context/builderContext";
import { CssTextField } from "../../../../orangeTextBox/CssTextField";
import { AcheivStyleDiv } from "./acheiStyle";

const Achievement = () => {
  const {  borderbg, fields, setFields } = useContext(builderContext);
  const [val, setVal] = useState("");

  let maxFields = 6 - fields.length; // assign max fields accordingly

  const addField = () => {
    setFields([...fields, { name: val }]);
    setVal("");
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addField();
    }
  };

  return (
    <AcheivStyleDiv>
      <section className="acheiv" style={{ borderColor: borderbg }}>

        <h4> NOTE: max 6 fields are allowed.</h4>

        <div className="fields">
          <CssTextField
            inputProps={{ maxLength: 20 }}
            placeholder="Enter content"
            variant="outlined"
            disabled={maxFields === 0}
            value={val}
            onChange={(ev) => setVal(ev.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <br />

        <Button
          variant="contained"
          size="large"
          className="all-btns"
          onClick={addField}
          disabled={maxFields === 0 || val.length === 0}
          style={{
            backgroundColor: "GrayText",
            width: "20%",
            marginLeft: "30%",
          }}
        >
          <lord-icon
              src="https://cdn.lordicon.com/ynwbvguu.json"
              trigger="hover"
              colors="primary:#ffffff"
              style={{width:"90%",height:"90%",opacity:val.length===0?"0.6":"1"}}>              
          </lord-icon>
        </Button>

        <Button
          variant="contained"
          size="large"
          className="all-btns"
          onClick={() => setFields([])}
          disabled={fields.length === 0}
          style={{ backgroundColor: "#e65f5f", width: "20%" }}
        >
          <lord-icon
              src="https://cdn.lordicon.com/akuwjdzh.json"
              trigger="hover"
              colors={`primary:#ffffff`}
              style={{width:"90%",height:"90%",opacity:fields.length===0?"0.6":"1"}}>              
          </lord-icon>
        </Button>

          <div className="dyn-data">
            {fields.map((vals, ind) => (
              <CssTextField
                key={ind}
                disabled
                value={vals.name}
                variant="outlined"
                style={{boxShadow:"2px 2px 2px gray"}}
              />
            ))}
        </div>
      </section>
    </AcheivStyleDiv>
  );
};

export default Achievement;
