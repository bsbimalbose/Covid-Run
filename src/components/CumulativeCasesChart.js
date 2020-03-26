import React from "react";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Line,
  LineChart
} from "recharts";
import { eachDayActive } from "../sampledata/chart";

export default function CumulativeCasesChart() {
  return (
    <>
      <div className="chart-name">Cumulative Cases (Under Construction)</div>
      <div style={{ height: "80%", marginLeft: "-40px" }}>
        <ResponsiveContainer>
          <LineChart
            width={500}
            height={300}
            data={eachDayActive}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="activeCases"
              stroke="#82ca9d"
            />
            {/* <Line type="monotone" dataKey="activeCases" stroke="#82ca9d" /> */}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
