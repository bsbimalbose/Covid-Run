import React from "react";
import DailyConfirmedChart from "../components/DailyConfirmedChart";
import CumulativeCasesChart from "../components/CumulativeCasesChart";

export default function Charts() {
  return (
    <div
    className="chart-wrap"
    >
      <div
       className="each-chart-wrap"
      >
        <CumulativeCasesChart />
      </div>
      <div
        className="each-chart-wrap"
      >
        <DailyConfirmedChart />
      </div>
      {/* <DailyConfirmedChart />
      <DailyConfirmedChart /> */}
    </div>
  );
}
