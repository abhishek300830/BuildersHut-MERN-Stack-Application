import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

const LineChart = ({ csvData, numberData, stringData }) => {
  useEffect(() => {
    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // for storing data
  var seriesDataArr = [];
  var catagoriesDataArr = [];

  // for data to plot graph
  csvData.forEach((val) => {
    let num = parseInt(val[numberData]);
    if (!isNaN(num)) {
      seriesDataArr.push(num);
    }
  });

  //  for xasix data
  csvData.forEach((val) => {
    let string = val[stringData];
    if (string !== undefined && string.length > 0) {
      catagoriesDataArr.push(string);
    }
  });

  var options = {
    chart: {
      type: "line",
    },
    series: [
      {
        name: "value",
        data: seriesDataArr,
      },
    ],
    xaxis: {
      categories: catagoriesDataArr,
    },
  };

  return (
    <div
      id="chart"
      style={{
        width: "100%",
        border: "2px solid black",
        marginTop: "2%",
      }}
    ></div>
  );
};

export default LineChart;
