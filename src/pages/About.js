import React from "react";

export default function About() {
  return (
    <div className="mt-5 about-wrap">
      <div>
        <p>
          We display only officially confirmed cases and do not track any
          unofficial sources. Daily updates are sometimes delayed due to delay
          in the official confirmation from the central or state governments.
        </p>
        <br />
        <p>
          Sources: <br />
          https://www.mohfw.gov.in/ <br />
          http://dhs.kerala.gov.in/
          <br />
          https://karunadu.karnataka.gov.in/
        </p>
      </div>
    </div>
  );
}
