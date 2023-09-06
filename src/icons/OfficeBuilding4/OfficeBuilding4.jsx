/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const OfficeBuilding4 = ({ color = "#9FA2A7", className }) => {
  return (
    <svg
      className={`office-building-4 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path-31"
        clipRule="evenodd"
        d="M3.1999 3.20001C3.1999 2.31635 3.91625 1.60001 4.7999 1.60001H11.1999C12.0836 1.60001 12.7999 2.31635 12.7999 3.20001V12.8C13.2417 12.8 13.5999 13.1582 13.5999 13.6C13.5999 14.0418 13.2417 14.4 12.7999 14.4H10.5999C10.0476 14.4 9.5999 13.9523 9.5999 13.4V12C9.5999 11.5582 9.24173 11.2 8.7999 11.2H7.1999C6.75807 11.2 6.3999 11.5582 6.3999 12V13.4C6.3999 13.9523 5.95219 14.4 5.3999 14.4H3.1999C2.75807 14.4 2.3999 14.0418 2.3999 13.6C2.3999 13.1582 2.75807 12.8 3.1999 12.8V3.20001ZM5.5999 4.00001H7.1999V5.60001H5.5999V4.00001ZM7.1999 7.20001H5.5999V8.80001H7.1999V7.20001ZM8.7999 4.00001H10.3999V5.60001H8.7999V4.00001ZM10.3999 7.20001H8.7999V8.80001H10.3999V7.20001Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

OfficeBuilding4.propTypes = {
  color: PropTypes.string,
};
