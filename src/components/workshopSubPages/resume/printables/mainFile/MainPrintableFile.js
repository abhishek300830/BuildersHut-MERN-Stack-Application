import React, { useEffect } from "react";
import { MainPrintStyleDiv } from "./mainPrintStyle";

const MainPrintableFile = () => {
  // const onClickHandler2=()=>{
  //     document.getElementById('show-result').style.display="block";
  // }
  const onClickHandler1 = () => {
    document.getElementById("show-result").style.display = "none";
  };

  const Print = () => {
    //console.log('print');
    let printContents = document.getElementById("section-to-print").innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };

  // useEffect(() => {});j
  var getQuoteButton = document.getElementById("printBtn");
  getQuoteButton.addEventListener("click", Print);

  return (
    <MainPrintStyleDiv>
      <div className="vanish-click" onClick={onClickHandler1}></div>
      <div id="section-to-print" className="resume-print">
        print your file here -
      </div>
      <button id="printBtn">print me</button>
    </MainPrintStyleDiv>
  );
};

export default MainPrintableFile;
