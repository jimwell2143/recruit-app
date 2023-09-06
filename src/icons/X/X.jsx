/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const X = ({ color = "#454CB5", className }) => {
  return (
    <svg
      className={`x ${className}`}
      fill="none"
      height="12"
      viewBox="0 0 12 12"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path-31"
        clipRule="evenodd"
        d="M2.57576 2.57576C2.81007 2.34145 3.18997 2.34145 3.42429 2.57576L6.00002 5.1515L8.57576 2.57576C8.81008 2.34145 9.18997 2.34145 9.42429 2.57576C9.6586 2.81007 9.6586 3.18997 9.42429 3.42429L6.84855 6.00002L9.42429 8.57576C9.6586 8.81008 9.6586 9.18997 9.42429 9.42429C9.18997 9.6586 8.81008 9.6586 8.57576 9.42429L6.00002 6.84855L3.42429 9.42429C3.18997 9.6586 2.81007 9.6586 2.57576 9.42429C2.34145 9.18997 2.34145 8.81008 2.57576 8.57576L5.1515 6.00002L2.57576 3.42429C2.34145 3.18997 2.34145 2.81007 2.57576 2.57576Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

X.propTypes = {
  color: PropTypes.string,
};
