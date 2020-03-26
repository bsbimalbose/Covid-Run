import React, { useContext } from "react";
import OverviewTile from "../components/OverviewTile";
import { AppContext } from "../App";

export default function Country() {
  const { state } = useContext(AppContext);
  const totalData = (state || {}).indiaTotal || {};
  return (
    <div className="flex-down">
      <OverviewTile label="Total Cases" count={totalData.totalCases || 0} />
      <OverviewTile label="New Cases" count={totalData.newCases || 0} />
      <OverviewTile
        label="Patients Recovered"
        count={totalData.totalRecovered || 0}
      />
      <OverviewTile label="Total Deaths" count={totalData.totalDeath || 0} />
    </div>
  );
}
