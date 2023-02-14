import { Button, TextField } from "@mui/material";
import React, { useContext } from "react";
import { useState } from "react";
import builderContext from "../../../../../context/builderContext";
import { CssTextField } from "../../../../orangeTextBox/CssTextField";
import { AcheivStyleDiv } from "./acheiStyle";

const Achievement = () => {
  const { formbg, borderbg, fields, setFields } = useContext(builderContext);
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
        <h1 style={{ background: formbg }}>Achievements</h1>
        <h4 style={{ color: "red" }}>(* add maximum 6 fields)</h4>
        {fields.map((vals, ind) => (
          <CssTextField
            key={ind}
            disabled
            value={vals.name}
            id={`acheiv-field-` + ind}
            variant="filled"
            color="success"
          />
        ))}
        {maxFields > 0 && (
          <CssTextField
            inputProps={{ maxLength: 20 }}
            label="Enter content"
            variant="filled"
            color="success"
            value={val}
            onChange={(ev) => setVal(ev.target.value)}
            onKeyDown={handleKeyDown}
          />
        )}
        <br />

        <Button
          variant="contained"
          size="large"
          onClick={addField}
          disabled={maxFields === 0 || val.length === 0}
          style={{
            backgroundColor: "GrayText",
            width: "20%",
            marginLeft: "30%",
          }}
        >
          Add Fields
        </Button>

        <Button
          variant="contained"
          size="large"
          onClick={() => setFields([])}
          disabled={fields.length === 0}
          style={{ backgroundColor: "#e65f5f", width: "20%" }}
        >
          Reset
        </Button>
      </section>
    </AcheivStyleDiv>
  );
};

export default Achievement;
