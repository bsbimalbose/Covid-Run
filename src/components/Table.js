import React from "react";
import { Badge } from "antd-mobile";

export default function Table({ cols, data, className }) {
  return (
    <table className={`${className ? className : ""}`}>
      <tr>
        {cols.map(col => (
          <th className="thead-wrapper">{col.name}</th>
        ))}
      </tr>
      {data.map(row => (
        <tr>
          {cols.map((col, index) => (
            <td className={`${index ? "td not-first" : "td"}`}>
              <div className="row-wrap">
              {Boolean(row[col.newKey]) && (
                <Badge
                  text={`+${row[col.newKey]}`}
                  style={{ marginRight: "5px", fontSize: "9px" }}
                  className={`badge-${col.newKey}`}
                />
              )}
              {row[col.id]}
              </div>
            </td>
          ))}
        </tr>
      ))}
    </table>
  );
}
