import React from "react";
import { ChartStyleDiv } from "./chartStyle";
import chartH from '../../../images/headers/chart.png'
import ApexCharts from "apexcharts";
import { useEffect } from "react";
import CSVReader from "react-csv-reader";
import { useState } from "react";

const ChartBuilder = () => {    
  
  const [csvData, setCsvData] = useState()
  useEffect(()=>{
    console.log(csvData)
    chart.render()
  },)

  var options = {
    chart: {
      type: 'line'
    },
    series: [{
      name: 'sales',
      data: [30,40,35,50,49,60,70,91,125]
    }],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    }
  }
  var chart = new ApexCharts(document.querySelector("#chart"), options);  



  return (
  <ChartStyleDiv>

    {/* header  */}

    <img src={chartH} alt="header" className="header"/>
    <div>
      {
        <CSVReader
        parserOptions={{ header: true }}
        onFileLoaded={(data, fileInfo) => setCsvData(data)}
      />
    }
    </div>
    <div id="chart" style={{width:"50%", border:'2px solid black',marginTop:'2%'}}></div>


  </ChartStyleDiv>
  );
};

export default ChartBuilder;
