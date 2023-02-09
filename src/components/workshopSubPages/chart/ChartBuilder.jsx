import React from "react";
import { ChartStyleDiv } from "./chartStyle";
import chartH from '../../../images/headers/chart.png'

const ChartBuilder = () => {
  return (
  <ChartStyleDiv>

    {/* header  */}
    <img src={chartH} alt="header" className="header"/>

  </ChartStyleDiv>
  );
};

export default ChartBuilder;
