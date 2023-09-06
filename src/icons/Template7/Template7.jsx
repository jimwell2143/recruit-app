/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Template7 = ({ color = "#9FA2A7", className }) => {
  return (
    <svg
      className={`template-7 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path-31"
        d="M2.3999 3.2C2.3999 2.75817 2.75807 2.4 3.1999 2.4H12.7999C13.2417 2.4 13.5999 2.75817 13.5999 3.2V4.8C13.5999 5.24183 13.2417 5.6 12.7999 5.6H3.1999C2.75807 5.6 2.3999 5.24183 2.3999 4.8V3.2Z"
        fill={color}
      />
      <path
        className="path-31"
        d="M2.3999 8C2.3999 7.55817 2.75807 7.2 3.1999 7.2H7.9999C8.44173 7.2 8.7999 7.55817 8.7999 8V12.8C8.7999 13.2418 8.44173 13.6 7.9999 13.6H3.1999C2.75807 13.6 2.3999 13.2418 2.3999 12.8V8Z"
        fill={color}
      />
      <path
        className="path-31"
        d="M11.1999 7.2C10.7581 7.2 10.3999 7.55817 10.3999 8V12.8C10.3999 13.2418 10.7581 13.6 11.1999 13.6H12.7999C13.2417 13.6 13.5999 13.2418 13.5999 12.8V8C13.5999 7.55817 13.2417 7.2 12.7999 7.2H11.1999Z"
        fill={color}
      />
    </svg>
  );
};

Template7.propTypes = {
  color: PropTypes.string,
};
