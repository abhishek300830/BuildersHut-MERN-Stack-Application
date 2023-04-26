import React, { useEffect } from 'react'
import ApexCharts from 'apexcharts';

const PieChart = ({csvData,numberData, stringData}) => {

    useEffect(()=>{
        var pieChart = new ApexCharts(
            document.querySelector("#pieChart"),
            optionsPie
          );
        pieChart.render();
    },[])

    // Pie Chart
    console.log("numberData",numberData)

  //TODO:  1st step - creating map and storing attributes as key and counts of attributes
  let mp = new Map();
  csvData.forEach((val) => {
    if (val[numberData] === undefined || val[numberData] === "") {
      // missing values treatment
    } else if (mp.has(val[numberData]) === true) {
      mp.set(val[numberData], mp.get(val[numberData]) + 1);
    } else {
      mp.set(val[numberData], 2);
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

  return (
    <>
        <div
            id="pieChart"
            style={{
            width: "100%",
            border: "2px solid black",
            marginTop: "2%",
            }}
        ></div>
    </>
  )
}

export default PieChart