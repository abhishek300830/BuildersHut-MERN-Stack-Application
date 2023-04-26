import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

const ColumnChart = ({ csvData, numberData, stringData }) => {
  var seriesDataArr = [];
  var catagoriesDataArr = [];

  useEffect(() => {
    // rendering charts
    var columnChart = new ApexCharts(
      document.querySelector("#columnChart"),
      optionsColumn
    );
    columnChart.render();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    // console.log("string", string.length);
    if (string !== undefined && string.length > 0) {
      catagoriesDataArr.push(string);
    }
  });

  // larrge data solution
  if (catagoriesDataArr.length > 20) {
    catagoriesDataArr = null;
    catagoriesDataArr = [];
  }

  var optionsColumn = {
    series: [
      {
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
      categories: catagoriesDataArr,
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
