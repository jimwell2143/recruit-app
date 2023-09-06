/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Mail9 = ({ color = "#9FA2A7", className }) => {
  return (
    <svg
      className={`mail-9 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path-31"
        d="M1.60238 4.7072L7.99997 7.9056L14.3976 4.7072C14.3739 4.29955 14.1952 3.91639 13.8982 3.63618C13.6012 3.35597 13.2083 3.19992 12.8 3.2H3.19998C2.79164 3.19992 2.39873 3.35597 2.10172 3.63618C1.8047 3.91639 1.62606 4.29955 1.60238 4.7072Z"
        fill={color}
      />
      <path
        className="path-31"
        d="M14.4 6.4944L7.99997 9.6944L1.59998 6.4944V11.2C1.59998 11.6243 1.76855 12.0313 2.0686 12.3314C2.36866 12.6314 2.77563 12.8 3.19998 12.8H12.8C13.2243 12.8 13.6313 12.6314 13.9313 12.3314C14.2314 12.0313 14.4 11.6243 14.4 11.2V6.4944Z"
        fill={color}
      />
    </svg>
  );
};

Mail9.propTypes = {
  color: PropTypes.string,
};
