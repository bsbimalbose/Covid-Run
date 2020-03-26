import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  ResponsiveContainer
} from "recharts";
import { eachDayActive } from "../sampledata/chart";

export default function DailyConfirmedChart() {
  return (
    <>
      <div className="chart-name">Daily Confirmed Cases (Under Construction)</div>
      <div style={{ height: "80%", marginLeft: "-40px" }}>
        <ResponsiveContainer>
          <BarChart
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
            <Bar dataKey="activeCases" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
