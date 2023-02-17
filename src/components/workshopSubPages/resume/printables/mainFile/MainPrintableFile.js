import React from "react";
import { MainPrintStyleDiv } from "./mainPrintStyle";
// import "./style.css";

const MainPrintableFile = () => {
  // const onClickHandler2=()=>{
  //     document.getElementById('show-result').style.display="block";
  // }
  const onClickHandler1 = () => {
    document.getElementById("show-result").style.display = "none";
  };

  return (
    // <div>
    //   <div className="vanish-click" onClick={onClickHandler1}></div>
    //   <HorizontalPrint />
    //   <button id="printBtn" onClick={window.print}>
    //     print me
    //   </button>
    // </div>

    <MainPrintStyleDiv>
      <div className="vanish-click" onClick={onClickHandler1}></div>
      <div id="section-to-print" className="resume-print">
        print your file here -
      </div>
      <button id="printBtn" onClick={window.print}>
        print me
      </button>
    </MainPrintStyleDiv>
  );
};

export default MainPrintableFile;
