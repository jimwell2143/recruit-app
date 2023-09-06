/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const User145 = ({ color = "#B5B5B7", className }) => {
  return (
    <svg
      className={`user-145 ${className}`}
      fill="none"
      height="92"
      viewBox="0 0 100 92"
      width="100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path-31"
        d="M50 46.8C58.6157 46.8 65.6 39.8156 65.6 31.2C65.6 22.5843 58.6157 15.6 50 15.6C41.3844 15.6 34.4 22.5843 34.4 31.2C34.4 39.8156 41.3844 46.8 50 46.8Z"
        fill={color}
      />
      <path
        className="path-31"
        d="M13.6 93.6C13.6 73.4968 29.8968 57.2 50 57.2C70.1032 57.2 86.4 73.4968 86.4 93.6H13.6Z"
        fill={color}
      />
    </svg>
  );
};

User145.propTypes = {
  color: PropTypes.string,
};
