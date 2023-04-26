import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

const BarChart = ({ csvData, numberData, stringData }) => {
  useEffect(() => {
    var Barchart = new ApexCharts(
      document.querySelector("#barChart"),
      optionsBarChart
    );
    Barchart.render();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  // Column charts

  var optionsBarChart = {
    series: [
      {
        name: "Inflation",
        data: seriesDataArr,
        // data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
      },
    ],
    chart: {
      height: 350,
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + "%";
      },
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },

    xaxis: {
      categories: catagoriesDataArr,
      // categories: [
      //   "Jan",
      //   "Feb",
      //   "Mar",
      //   "Apr",
      //   "May",
      //   "Jun",
      //   "Jul",
      //   "Aug",
      //   "Sep",
      //   "Oct",
      //   "Nov",
      //   "Dec",
      // ],
      position: "top",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val + "%";
        },
      },
    },
    title: {
      text: `Chart of ${stringData} and ${numberData}`,
      floating: true,
      offsetY: 330,
      align: "center",
      style: {
        color: "#444",
      },
    },
  };

  return (
    <div
      id="barChart"
      style={{
        width: "100%",
        border: "2px solid black",
        marginTop: "2%",
      }}
    ></div>
  );
};

export default BarChart;
