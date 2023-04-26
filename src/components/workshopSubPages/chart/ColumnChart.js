import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

const ColumnChart = ({ csvData, numData, strData }) => {
  var seriesDataArr = [];
  // useEffect(() => {
  //   csvData.forEach((val) => {
  //     let num = parseInt(val[data[0]]);
  //     if (!isNaN(num)) {
  //       seriesDataArr.push(num);
  //     }
  //     // console.log("val", val[data[0]]);
  //   });

  //   var columnChart = new ApexCharts(
  //     document.querySelector("#columnChart"),
  //     optionsColumn
  //   );
  //   columnChart.render();
  // }, []);

  // console.log("data", data);
  // console.log("csvData", csvData);

  var optionsColumn = {
    series: [
      {
        // data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
        data: seriesDataArr,
      },
    ],
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      // categories: [
      //   "South Korea",
      //   "Canada",
      //   "United Kingdom",
      //   "Netherlands",
      //   "Italy",
      //   "France",
      //   "Japan",
      //   "United States",
      //   "China",
      //   "Germany",
      // ],
      catagories: csvData.map((val) => {
        // console.log("data[1]", data[1]);
        // console.log("Valdata[1]", val[data[1]]);
        // return val[data[1]];
      }),
    },
  };

  return (
    <div
      id="columnChart"
      style={{
        width: "100%",
        border: "2px solid black",
        marginTop: "2%",
      }}
    ></div>
  );
};

export default ColumnChart;
