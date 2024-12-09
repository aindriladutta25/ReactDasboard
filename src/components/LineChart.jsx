import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

// Sample data for the Line Chart
const data = [
  { name: "January", uv: 4000, pv: 2400, amt: 2400 },
  { name: "February", uv: 3000, pv: 1398, amt: 2210 },
  { name: "March", uv: 2000, pv: 9800, amt: 2290 },
  { name: "April", uv: 2780, pv: 3908, amt: 2000 },
  { name: "May", uv: 1890, pv: 4800, amt: 2181 },
  { name: "June", uv: 2390, pv: 3800, amt: 2500 },
];

const LineChartComponent = ({ width = 500, height = 300 }) => (
  <div className="card p-4 bg-white rounded-lg shadow-lg">
    {/* Line Chart Header */}
    <h3 className="text-lg font-semibold mb-4">Monthly Data</h3>

    {/* Line Chart with two lines */}
    <LineChart width={width} height={height} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      
      {/* First Line */}
      <Line type="monotone" dataKey="pv" stroke="#8884d8" />
      
      {/* Second Line */}
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  </div>
);

export default LineChartComponent;
