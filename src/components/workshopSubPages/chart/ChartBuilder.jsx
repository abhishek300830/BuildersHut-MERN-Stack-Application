import React, { useEffect, useState } from "react";
import { ChartStyleDiv } from "./chartStyle";
import chartH from "../../../images/headers/chart.png";
import ApexCharts from "apexcharts";
import CSVReader from "react-csv-reader";
import { Divider } from "@mui/material";

const ChartBuilder = () => {
  const [csvData, setCsvData] = useState([]);

  const [attributes, setAttributes] = useState([]);

  const [attributeSelected, setAttributeSelected] = useState(false);
  const [showGraphs, setShowGraphs] = useState(false);

  useEffect(() => {
    // if(csvData.length > 0){
    //   console.log(Number.isNaN(Number.parseInt(csvData[0].play)))
    // }

    if (csvData.length > 0) {
      // setting attributes
      const tempAttr = Object.keys(csvData[0]);
      setAttributes(
        tempAttr.map((val) => {
          return {
            Att: val,
            dataType: Number.isNaN(Number.parseInt(csvData[0][val]))
              ? "String"
              : "Number",
            selected: false,
          };
        })
      );

      var chart = new ApexCharts(document.querySelector("#chart"), options);
      var pieChart = new ApexCharts(
        document.querySelector("#pieChart"),
        optionsPie
      );
      var columnChart = new ApexCharts(
        document.querySelector("#columnChart"),
        optionsColumn
      );
      var Barchart = new ApexCharts(
        document.querySelector("#barChart"),
        optionsBarChart
      );
      Barchart.render();
      chart.render();
      pieChart.render();
      columnChart.render();
    }
  }, [csvData, showGraphs]);

  let arr = [];
  csvData.forEach((val) => {
    // change this to make generic
    let num = parseInt(val.values);
    if (!isNaN(num)) {
      arr.push(num);
    }
  });

  //  line chart
  var options = {
    chart: {
      type: "line",
    },
    series: [
      {
        name: "value",
        // data: [10, 45, 12, 43, 64, 12, 66, 76],
        data: arr,
        // data: csvData.map(val=> parseInt(val.play))
      },
    ],
    xaxis: {
      // categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      categories: csvData.map((val) => val.temp),
    },
  };

  // Pie Chart

  //TODO:  1st step - creating map and storing attributes as key and counts of attributes
  let mp = new Map();
  csvData.forEach((val) => {
    if (val.windy === undefined || val.windy === "") {
      // missing values treatment
    } else if (mp.has(val.windy) === true) {
      mp.set(val.windy, mp.get(val.windy) + 1);
    } else {
      mp.set(val.windy, 2);
    }
  });

  //TODO: 2nd step - creating array of keys and corresponding counts
  const pieData = [];
  const pieLabels = [];
  mp.forEach((val, key) => {
    pieData.push(val);
    pieLabels.push(key);
  });

  // TODO: 3rd step - series = total count, labels - attrbute name
  var optionsPie = {
    series: pieData,
    labels: pieLabels,
    chart: {
      type: "donut",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  // Column charts
  var optionsColumn = {
    series: [
      {
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
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
      categories: [
        "South Korea",
        "Canada",
        "United Kingdom",
        "Netherlands",
        "Italy",
        "France",
        "Japan",
        "United States",
        "China",
        "Germany",
      ],
    },
  };

  var optionsBarChart = {
    series: [
      {
        name: "Inflation",
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
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
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
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
      text: "Monthly Inflation in Argentina, 2002",
      floating: true,
      offsetY: 330,
      align: "center",
      style: {
        color: "#444",
      },
    },
  };
  // building chart handler
  const buildHandler = () => {
    setShowGraphs(true);
  };

  const selectAttributeHandler = (id) => {
    document.getElementById(`set-bg-${id}`).style.background = "#c8f5b8";
  };

  return (
    <ChartStyleDiv>
      {/* header chart Builder  */}
      {/* <img src={chartH} alt="header" className="header" /> */}
      <div className="textFieldContainer" id="chartMainDiv">
        <div className="selectFile">
          <div className="headers"></div>
          <p>Choose your CSV file to plot different types of Charts.</p>
          <div className="selection">
            {
              <CSVReader
                cssInputClass="select-input"
                parserOptions={{ header: true }}
                onFileLoaded={(data, fileInfo) => {
                  setCsvData(data);
                  setAttributeSelected(true);
                  document.getElementById(
                    "chartMainDiv"
                  ).style.gridTemplateColumns = "50% 50%";
                }}
              />
            }
          </div>
        </div>

        {attributeSelected && (
          <div className="selectAttribute">
            <div className="headers"></div>

            <section>
              <div className="fixed-info">
                <p className="warning">
                  * Atleast one Attribute should be of number type
                </p>
              </div>

              <div className="inputAttribute">
                <div className="heading-part">
                  <div className="tableHead">Attributes</div>
                  <div className="tableHead">Type</div>
                </div>

                {attributes.length > 0 &&
                  attributes.map((val, indx) => (
                    <div
                      className="table-content-part"
                      key={indx}
                      id={`set-bg-${indx}`}
                      onClick={() => selectAttributeHandler(indx)}
                      // style={{backgroundColor:val.selected?"#c8f5b8":"#fff3f3"}}
                    >
                      <div className="tableContent">{val.Att}</div>
                      <div className="tableContent" key={indx}>
                        {val.dataType}
                      </div>
                    </div>
                  ))}
              </div>

              <button className="build-chart" onClick={buildHandler}>
                Build Chart
              </button>
            </section>
          </div>
        )}
      </div>

      {showGraphs && (
        <>
          <br />
          <Divider />
          <h1 className="chartHeading">Charts Generated From Data</h1>
          <div className="chartContainer">
            <div
              id="chart"
              style={{
                width: "100%",
                border: "2px solid black",
                marginTop: "2%",
              }}
            ></div>
            <div
              id="pieChart"
              style={{
                width: "100%",
                border: "2px solid black",
                marginTop: "2%",
              }}
            ></div>
            <div
              id="columnChart"
              style={{
                width: "100%",
                border: "2px solid black",
                marginTop: "2%",
              }}
            ></div>
            <div
              id="barChart"
              style={{
                width: "100%",
                border: "2px solid black",
                marginTop: "2%",
              }}
            ></div>
          </div>
        </>
      )}
    </ChartStyleDiv>
  );
};

export default ChartBuilder;
