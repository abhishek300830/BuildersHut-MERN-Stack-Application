import React from "react";
import { ChartStyleDiv } from "./chartStyle";
import chartH from '../../../images/headers/chart.png'
import ApexCharts from "apexcharts";
import { useEffect } from "react";

// csv 
// import fs from 'fs'
// import { parse } from "csv-parse";
const fs = require('fs')
const {parse} = require("csv-parse")
var data=[]


fs.createReadStream("../../../csvFiles/PlayTennis.csv")
  .pipe(parse({delimiter:",",columns:true,ltrim:true})
    ).on("data", (row)=>{
      data.push(row)
    })
    .on("error", (error)=>{
      console.log(error.message)
    })
    .on("end", ()=>{
        console.log("parsed csv Data")
        console.log(data)
    })
    

const ChartBuilder = () => {

  // const res = d3.csvParse("Name,Age\nHarry,32\nChris,37");
  // console.log(res);

  // csv functionality
  
  

  var options = {
    chart: {
      type: 'bar'
    },
    series: [
      {
        name: 'sales',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
      }
    ],
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
  }
  
  var chart = new ApexCharts(document.querySelector('#chart'), options)
  
  useEffect(() => {
    chart.render()
  }, )
  

  return (
  <ChartStyleDiv>

    {/* header  */}
    <img src={chartH} alt="header" className="header"/>
    <div id="chart"></div>

  </ChartStyleDiv>
  );
};

export default ChartBuilder;
