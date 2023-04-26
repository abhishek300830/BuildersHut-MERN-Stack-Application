import React, { useEffect, useState } from "react";
import { ChartStyleDiv } from "./chartStyle";
import CSVReader from "react-csv-reader";
import { Divider } from "@mui/material";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import ColumnChart from "./ColumnChart";
import BarChart from "./BarChart";
import chartImg from "../../../images/subBuilders/chart.png";

const ChartBuilder = () => {
  const [csvData, setCsvData] = useState([]);
  const [attributes, setAttributes] = useState([]);
  const [attributeSelected, setAttributeSelected] = useState(false);

  const [showGraphs, setShowGraphs] = useState(false);

  const [selectedAttributes, setselectedAttributes] = useState([]);
  const [numAndString, setnumAndString] = useState([]);
  const [count, setcount] = useState(0);

  useEffect(() => {
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
    }
  }, [csvData, showGraphs]);

  //TODO: building chart handler

  const buildHandler = () => {
    let flag = false;

    selectedAttributes.forEach((val) => {
      if (val.dtype === "Number") flag = true;
    });

    if (flag) {
      setnumAndString([
        selectedAttributes[0].dtype === "Number"
          ? selectedAttributes[0].name
          : selectedAttributes[1].name,
        selectedAttributes[0].dtype === "String"
          ? selectedAttributes[0].name
          : selectedAttributes[1].name,
      ]);
      setShowGraphs(true);
    } else {
      alert("please Select one Number Attribute");
    }
  };

  const resetHandler = () => {
    setcount(0);
    selectedAttributes.forEach((val) => {
      document.getElementById(`set-bg-${val.name}`).style.background =
        "#ffffff";
    });
    setselectedAttributes([]);
    setShowGraphs(false);
  };

  const selectAttributeHandler = (name, dtype) => {
    if (count < 2) {
      document.getElementById(`set-bg-${name}`).style.background = "#c8f5b8";
      setselectedAttributes([
        ...selectedAttributes,
        { name: name, dtype: dtype },
      ]);
      setcount(count + 1);
    }
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

          <img src={chartImg} alt="chartbuilder" className="chart-builder" />
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
                      id={`set-bg-${val.Att}`}
                      onClick={() =>
                        selectAttributeHandler(val.Att, val.dataType)
                      }
                      // style={{backgroundColor:val.selected?"#c8f5b8":"#fff3f3"}}
                    >
                      <div className="tableContent">{val.Att}</div>
                      <div className="tableContent" key={indx}>
                        {val.dataType}
                      </div>
                    </div>
                  ))}
              </div>

              <div className="button-section">
                <button
                  className="build-chart"
                  style={{ background: "#ee2f2fd7" }}
                  onClick={resetHandler}
                >
                  Reset
                </button>
                <button
                  className="build-chart"
                  disabled={count < 2}
                  onClick={buildHandler}
                >
                  Build Chart
                </button>
              </div>
              <div id="show-error"></div>
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
            {/* line chart */}
            <LineChart
              csvData={csvData}
              numberData={numAndString[0]}
              stringData={numAndString[1]}
            />

            {/* pie chart  */}
            <PieChart
              csvData={csvData}
              numberData={numAndString[0]}
              stringData={numAndString[1]}
            />

            {/* <PieChart csvData={csvData} data={selectedAttributes}/> */}

            {/* column chart  */}
            <ColumnChart
              csvData={csvData}
              numberData={numAndString[0]}
              stringData={numAndString[1]}
            />

            {/* Bar chart  */}
            <BarChart
              csvData={csvData}
              numberData={numAndString[0]}
              stringData={numAndString[1]}
            />
          </div>
        </>
      )}
    </ChartStyleDiv>
  );
};

export default ChartBuilder;
