/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Table9 = ({ color = "#9FA2A7", className }) => {
  return (
    <svg
      className={`table-9 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path-31"
        clipRule="evenodd"
        d="M5 4C3.34315 4 2 5.34315 2 7V13C2 14.6569 3.34315 16 5 16H15C16.6569 16 18 14.6569 18 13V7C18 5.34315 16.6569 4 15 4H5ZM4 13V12H9V14H5C4.44772 14 4 13.5523 4 13ZM11 14H15C15.5523 14 16 13.5523 16 13V12H11V14ZM11 10H16V8H11V10ZM9 8H4V10H9V8Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

Table9.propTypes = {
  color: PropTypes.string,
};
