/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ViewList8 = ({ color = "#323232", className }) => {
  return (
    <svg
      className={`view-list-8 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path-31"
        clipRule="evenodd"
        d="M2.40002 3.2C2.40002 2.75817 2.7582 2.4 3.20002 2.4H12.8C13.2418 2.4 13.6 2.75817 13.6 3.2C13.6 3.64183 13.2418 4 12.8 4H3.20002C2.7582 4 2.40002 3.64183 2.40002 3.2ZM2.40002 6.4C2.40002 5.95817 2.7582 5.6 3.20002 5.6H12.8C13.2418 5.6 13.6 5.95817 13.6 6.4C13.6 6.84183 13.2418 7.2 12.8 7.2H3.20002C2.7582 7.2 2.40002 6.84183 2.40002 6.4ZM2.40002 9.6C2.40002 9.15817 2.7582 8.8 3.20002 8.8H12.8C13.2418 8.8 13.6 9.15817 13.6 9.6C13.6 10.0418 13.2418 10.4 12.8 10.4H3.20002C2.7582 10.4 2.40002 10.0418 2.40002 9.6ZM2.40002 12.8C2.40002 12.3582 2.7582 12 3.20002 12H12.8C13.2418 12 13.6 12.3582 13.6 12.8C13.6 13.2418 13.2418 13.6 12.8 13.6H3.20002C2.7582 13.6 2.40002 13.2418 2.40002 12.8Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

ViewList8.propTypes = {
  color: PropTypes.string,
};
