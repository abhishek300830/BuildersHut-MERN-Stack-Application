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

  useEffect(() => {
    // if(csvData.length > 0){
    //   console.log(Number.isNaN(Number.parseInt(csvData[0].play)))
    // }

    if (csvData.length > 0) {
      setAttributes(Object.keys(csvData[0]));
      // console.log())
      var chart = new ApexCharts(document.querySelector("#chart"), options);
      var pieChart = new ApexCharts(
        document.querySelector("#pieChart"),
        optionsPie
      );
      var columnChart = new ApexCharts(
        document.querySelector("#columnChart"),
        optionsColumn
      );
      chart.render();
      pieChart.render();
      columnChart.render();
    }

    console.log("csvData", csvData);
    console.log("attributes", attributes);
  }, [csvData]);

  //  line chart
  var options = {
    chart: {
      type: "line",
    },
    series: [
      {
        name: "sales",
        // data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
        data: csvData.map((val, idx) => {
          return parseInt(val.values);
        }),
      },
    ],
    xaxis: {
      // categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      categories: csvData.map((val, idx) => {
        return val.outlook;
      }),
    },
  };

  // Pie Chart

  var optionsPie = {
    series: [44, 55, 41, 17, 15],
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
                    <div className="table-content-part" key={indx}>
                      <div className="tableContent">{val}</div>
                      <div className="tableContent" key={indx}>
                        {Number.isNaN(Number.parseInt(csvData[0][val]))
                          ? "String"
                          : "Number"}
                      </div>
                    </div>
                  ))}
              </div>
            </section>
          </div>
        )}
      </div>

      {attributeSelected && (
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
            {/* <div
              id="columnChart"
              style={{
                width: "80%",
                border: "2px solid black",
                marginTop: "2%",
              }}
            ></div> */}
          </div>
        </>
      )}
    </ChartStyleDiv>
  );
};

export default ChartBuilder;
