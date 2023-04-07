import React ,{ useEffect,useState }from "react";
import { ChartStyleDiv } from "./chartStyle";
import chartH from '../../../images/headers/chart.png'
import ApexCharts from "apexcharts";
import CSVReader from "react-csv-reader";

const ChartBuilder = () => {    
  
  const [csvData, setCsvData] = useState([])

  const [attributes, setAttributes] = useState([])

  useEffect(()=>{
    // if(csvData.length > 0){
    //   console.log(Number.isNaN(Number.parseInt(csvData[0].play)))
    // }

    if(csvData.length>0){
      setAttributes(Object.keys(csvData[0]))
      // console.log())
    }

    
    // chart.render()
  },[csvData])

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

    {attributes.length>0 && 
    attributes.map((val,indx)=>(
      <div key={indx}>
          {indx+1}. {val} - {(Number.isNaN(Number.parseInt(csvData[0][val])))?'String':'Number'}
      </div>
    ))}
    {/* <div id="chart" style={{width:"50%", border:'2px solid black',marginTop:'2%'}}></div> */}


  </ChartStyleDiv>
  );
};

export default ChartBuilder;
