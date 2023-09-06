/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ChartSquareBar5 = ({ color = "#9FA2A7", className }) => {
  return (
    <svg
      className={`chart-square-bar-5 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path-31"
        clipRule="evenodd"
        d="M4.00002 2.40002C3.11637 2.40002 2.40002 3.11637 2.40002 4.00002V12C2.40002 12.8837 3.11637 13.6 4.00002 13.6H12C12.8837 13.6 13.6 12.8837 13.6 12V4.00002C13.6 3.11637 12.8837 2.40002 12 2.40002H4.00002ZM11.2 5.60002C11.2 5.1582 10.8419 4.80002 10.4 4.80002C9.9582 4.80002 9.60003 5.1582 9.60003 5.60002V10.4C9.60003 10.8419 9.9582 11.2 10.4 11.2C10.8419 11.2 11.2 10.8419 11.2 10.4V5.60002ZM8.80002 7.20002C8.80002 6.7582 8.44185 6.40002 8.00002 6.40002C7.5582 6.40002 7.20002 6.7582 7.20002 7.20002V10.4C7.20002 10.8419 7.5582 11.2 8.00002 11.2C8.44185 11.2 8.80002 10.8419 8.80002 10.4V7.20002ZM6.40002 9.60003C6.40002 9.1582 6.04185 8.80002 5.60002 8.80002C5.1582 8.80002 4.80002 9.1582 4.80002 9.60003V10.4C4.80002 10.8419 5.1582 11.2 5.60002 11.2C6.04185 11.2 6.40002 10.8419 6.40002 10.4V9.60003Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

ChartSquareBar5.propTypes = {
  color: PropTypes.string,
};
