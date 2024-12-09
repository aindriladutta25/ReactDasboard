import React from "react";
import { Chart } from "react-google-charts";
import { styled } from '@mui/material/styles';

const data = [
  ["", ""],
  ["Jan", 21000000],
  ["Mar", 25000000],
  ["Apr", 23000000],
  ["May", 29000000],
  ["Jun", 27000000],
];


// Material chart options
const options = {
  chart: {
    title: "Projections vs Actuals",
  },
  colors: ["#A8C5DA"],
};

function BarChartComponent() {
  return (
   
    <Chart
      chartType="Bar"
      width="500px"
      height="400px"
      data={data}
      options={options}
    />
  
  );
}

export default BarChartComponent;