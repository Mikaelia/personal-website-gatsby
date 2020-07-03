import React from "react";

const Wave = () => (
  <div className="wave-container">
    <svg
      className="wave"
      width="100%"
      height="172"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      viewBox="0 0 2000 172"
      style={{ minWidth: "2000px" }}
    >
      <path
        fill="white"
        d="M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z"
      />
    </svg>
  </div>
);

export default Wave;
