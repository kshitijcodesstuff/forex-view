import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
} from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip);

const LineChart = ({ data, label }) => {
  const chartData = {
    labels: data.map((entry) => entry.date),
    datasets: [
      {
        label: label || "Exchange Rate",
        data: data.map((entry) => entry.close_rate),
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true, position: "top" },
    },
    scales: {
      x: { title: { display: true, text: "Date" } },
      y: { title: { display: true, text: "Exchange Rate" } },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default LineChart;
