import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import Table from "../components/Table";
import { cols } from "../constants";
import { Button } from "antd-mobile";

export default function StateView() {
  const { state } = useContext(AppContext);
  const [clickedButton, setClickedButton] = useState("today");
  const selectedDay =
    clickedButton === "today" ? state.todaysData : state.yesterdaysData;
  return (
    <div className="w100">
      <div className="button-tab-wrap w100 mb-0">
        <Button
          type={clickedButton === "today" ? "primary" : undefined}
          inline
          size="small"
          style={{ marginRight: "4px" }}
          onClick={() => setClickedButton("today")}
        >
          today
        </Button>
        <Button
          type={clickedButton === "yesterday" ? "primary" : undefined}
          inline
          size="small"
          style={{ marginRight: "4px" }}
          onClick={() => setClickedButton("yesterday")}
        >
          yesterday
        </Button>
      </div>
      <Table
        cols={cols}
        data={selectedDay || []}
        className="state-view-table w100"
      />
    </div>
  );
}
