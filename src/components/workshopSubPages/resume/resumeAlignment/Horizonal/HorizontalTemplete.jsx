import React from "react";
import { HorizontalConatiner } from "./HorizontalStyle";

const HorizontalTemplete = () => {
  const Print = () => {
    console.log("print");
    let printContents = document.getElementById("printDiv").innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };
  return (
    <HorizontalConatiner>
      <div id="printable">
        <h3>App ki Naukri paki mubarak ho !</h3>
      </div>
      <button type="button" onClick={Print}>
        Print div
      </button>
    </HorizontalConatiner>
  );
};

export default HorizontalTemplete;
