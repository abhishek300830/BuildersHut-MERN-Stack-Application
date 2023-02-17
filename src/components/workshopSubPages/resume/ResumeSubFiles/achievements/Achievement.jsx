import { Button } from "@mui/material";
import React, { useContext } from "react";
import { useState } from "react";
import builderContext from "../../../../../context/builderContext";
import { CssTextField } from "../../../../orangeTextBox/CssTextField";
import { AcheivStyleDiv } from "./acheiStyle";

const Achievement = () => {
  const { borderbg, fields, setFields } = useContext(builderContext);
  const [val, setVal] = useState("");

  console.log(fields)
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
        <div className="dyn-data">
          {fields.map((vals, ind) => (
            <CssTextField
              key={ind}
              disabled
              value={vals.name}
              variant="outlined"
              style={{ boxShadow: "2px 2px 2px gray" }}
            />
          ))}
        </div>

        <div className="btn-center" style={{textAlign:"center"}}>

        <button
          // variant="contained"
          // size="large"
          className="all-btns"
          onClick={addField}
          disabled={maxFields === 0 || val.length === 0}
        >
          <lord-icon
            src="https://cdn.lordicon.com/ynwbvguu.json"
            trigger="hover"
            colors="primary:#0c0c0c"
            style={{
              width: "40px",
              height: "40px",
              opacity: val.length === 0 ? "0.6" : "1",
            }}
          ></lord-icon>
        </button>

        <button
          // variant="contained"
          // size="large"
          className="all-btns2"
          onClick={() => setFields([])}
          disabled={fields.length === 0}
        >
          <lord-icon
            src="https://cdn.lordicon.com/akuwjdzh.json"
            trigger="hover"
            colors={`primary:#141414`}
            style={{
              width: "40px",
              height: "40px",
              opacity: fields.length === 0 ? "0.6" : "1",
            }}
          ></lord-icon>
        </button>
        </div>

      </section>
    </AcheivStyleDiv>
  );
};

export default Achievement;
