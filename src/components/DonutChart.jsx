import React from "react";
import { Pie, PieChart, Cell, Tooltip } from "recharts";

const chartData = [
  { name: "Product A", value: 100 },
  { name: "Product B", value: 200 },
  { name: "Product C", value: 300 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"]; // Define the colors for the segments

const DonutChart = () => (
  <div className="card p-4 bg-white rounded-lg shadow-lg">
    {/* Chart Header */}
    <h3 className="text-lg font-semibold mb-4">Product Sales</h3>

    {/* Donut Chart */}
    <PieChart width={300} height={300}>
      <Pie
        data={chartData}
        dataKey="value"
        nameKey="name"
        innerRadius={60} // Makes it a donut chart
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
      >
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>

    {/* Labels Section */}
    <div className="mt-4">
      {chartData.map((item, index) => (
        <div key={index} className="flex justify-between text-sm text-gray-700">
          <span>{item.name}</span>
          <span>{item.value}</span>
        </div>
      ))}
    </div>
  </div>
);

export default DonutChart;
