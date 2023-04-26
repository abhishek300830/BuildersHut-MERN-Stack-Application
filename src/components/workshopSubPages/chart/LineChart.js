import React, { useEffect } from 'react'
import ApexCharts from "apexcharts";

const LineChart = ({csvData,numData, strData}) => {

    useEffect(()=>{
        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();
    },[])

    let arr = [];
    csvData.forEach((val) => {
      // change this to make generic
      let num = parseInt(val.values);
      if (!isNaN(num)) {
        arr.push(num);
      }
    });

    var options = {
        chart: {
        type: "line",
        },
        series: [
        {
            name: "value",
            data: arr,
        },
        ],
        xaxis: {
        // categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        categories: csvData.map((val) => val.temp),
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
  )
}

export default LineChart