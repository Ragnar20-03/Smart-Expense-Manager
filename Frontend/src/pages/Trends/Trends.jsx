import React from 'react'
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';
import "./trend.css"
import sampleData from "./sampleData.json"

function Trends() {
  return (
    <>
      <div className="divs">
        <div className="div">
          <Bar
            data={{
              labels: ["A", "B", "C"],
              datasets: [
                {
                  label: "Revenue",
                  data: [100, 300, 300],
                  backgroundColor: "rgba(75, 192, 192, 0.6)",
                },
                {
                  label: "Loss",
                  data: [200, 300, 300],
                  backgroundColor: "rgba(255, 99, 132, 0.6)",
                },
              ],
            }} />
        </div>
        <div className="div">
          <Doughnut
            data={{
              labels: sampleData.map((data) => data.label),
              datasets: [
                {
                  label: "Price",
                  data: sampleData.map((data) => data.value),
                }
              ],
            }} />
        </div>
        <div className="div">
          <Line
            data={{
              labels: ["A", "B", "C"],
              datasets: [
                {
                  label: "Revenue",
                  data: [200, 300, 300],
                },
                {
                  label: "Loss",
                  data: [100, 345, 90],
                },

              ],
            }} />
        </div>
      </div>
    </>
  )
}

export default Trends