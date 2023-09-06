/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Identification1 = ({ color = "white", className }) => {
  return (
    <svg
      className={`identification-1 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path-31"
        d="M8.0001 1.59998C7.55827 1.59998 7.2001 1.95815 7.2001 2.39998V3.19998C7.2001 3.6418 7.55827 3.99998 8.0001 3.99998C8.44193 3.99998 8.8001 3.6418 8.8001 3.19998V2.39998C8.8001 1.95815 8.44193 1.59998 8.0001 1.59998Z"
        fill={color}
      />
      <path
        className="path-31"
        clipRule="evenodd"
        d="M3.2001 3.19998H5.6001C5.6001 4.52546 6.67461 5.59998 8.0001 5.59998C9.32558 5.59998 10.4001 4.52546 10.4001 3.19998H12.8001C13.6838 3.19998 14.4001 3.91632 14.4001 4.79998V12C14.4001 12.8836 13.6838 13.6 12.8001 13.6H3.2001C2.31644 13.6 1.6001 12.8836 1.6001 12V4.79998C1.6001 3.91632 2.31644 3.19998 3.2001 3.19998ZM5.2001 8.79998C5.86284 8.79998 6.4001 8.26272 6.4001 7.59998C6.4001 6.93723 5.86284 6.39998 5.2001 6.39998C4.53736 6.39998 4.0001 6.93723 4.0001 7.59998C4.0001 8.26272 4.53736 8.79998 5.2001 8.79998ZM7.16048 12C7.18672 11.8707 7.20049 11.737 7.20049 11.6C7.20049 10.4954 6.30506 9.59998 5.20049 9.59998C4.09592 9.59998 3.20049 10.4954 3.20049 11.6C3.20049 11.737 3.21426 11.8707 3.2405 12H7.16048ZM9.6001 7.19998C9.15827 7.19998 8.8001 7.55815 8.8001 7.99998C8.8001 8.4418 9.15827 8.79998 9.6001 8.79998H12.0001C12.4419 8.79998 12.8001 8.4418 12.8001 7.99998C12.8001 7.55815 12.4419 7.19998 12.0001 7.19998H9.6001ZM8.8001 10.4C8.8001 9.95815 9.15827 9.59998 9.6001 9.59998H11.2001C11.6419 9.59998 12.0001 9.95815 12.0001 10.4C12.0001 10.8418 11.6419 11.2 11.2001 11.2H9.6001C9.15827 11.2 8.8001 10.8418 8.8001 10.4Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

Identification1.propTypes = {
  color: PropTypes.string,
};