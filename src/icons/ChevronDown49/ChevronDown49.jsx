/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ChevronDown49 = ({ color = "#9FA2A7", className }) => {
  return (
    <svg
      className={`chevron-down-49 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path-31"
        clipRule="evenodd"
        d="M4.23431 5.83429C4.54673 5.52187 5.05326 5.52187 5.36568 5.83429L7.99999 8.4686L10.6343 5.83429C10.9467 5.52187 11.4533 5.52187 11.7657 5.83429C12.0781 6.14671 12.0781 6.65324 11.7657 6.96566L8.56568 10.1657C8.25326 10.4781 7.74673 10.4781 7.43431 10.1657L4.23431 6.96566C3.9219 6.65324 3.9219 6.14671 4.23431 5.83429Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

ChevronDown49.propTypes = {
  color: PropTypes.string,
};
