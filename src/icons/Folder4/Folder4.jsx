/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Folder4 = ({ color = "#9FA2A7", className }) => {
  return (
    <svg
      className={`folder-4 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path-31"
        d="M1.59998 4.8C1.59998 3.91635 2.31632 3.2 3.19998 3.2H7.19998L8.79998 4.8H12.8C13.6836 4.8 14.4 5.51635 14.4 6.4V11.2C14.4 12.0837 13.6836 12.8 12.8 12.8H3.19998C2.31632 12.8 1.59998 12.0837 1.59998 11.2V4.8Z"
        fill={color}
      />
    </svg>
  );
};

Folder4.propTypes = {
  color: PropTypes.string,
};
