import React from "react";
import HorizontalPreview from "../horizontalFile/HorizontalPreview";
import VerticalResume from "../VerticalDesign/VerticalResume";
import { MainPrintStyleDiv } from "./mainPrintStyle";

const MainPrintableFile = ({type}) => {
  const onClickHandler1 = () => {
    document.getElementById("show-result").style.display = "none";
  };

  return (
    <MainPrintStyleDiv>
      <div className="vanish-click" onClick={onClickHandler1}></div>
      <div id="section-to-print" className="resume-print">
        {type === "horizontal" ? (
                <HorizontalPreview />
            ) : (
                <VerticalResume />
        )}
      </div>
      {/* <button id="printBtn" onClick={window.print}> */}
        {/* print me */}
      {/* </button> */}
    </MainPrintStyleDiv>
  );
};

export default MainPrintableFile;
