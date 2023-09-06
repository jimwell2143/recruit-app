/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Plus1 = ({ color = "#323232", className }) => {
  return (
    <svg
      className={`plus-1 ${className}`}
      fill="none"
      height="12"
      viewBox="0 0 13 12"
      width="13"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path-31"
        clipRule="evenodd"
        d="M6.49687 1.8C6.82824 1.8 7.09687 2.06863 7.09687 2.4V5.4H10.0969C10.4282 5.4 10.6969 5.66863 10.6969 6C10.6969 6.33137 10.4282 6.6 10.0969 6.6H7.09687V9.6C7.09687 9.93137 6.82824 10.2 6.49687 10.2C6.1655 10.2 5.89687 9.93137 5.89687 9.6V6.6H2.89687C2.5655 6.6 2.29688 6.33137 2.29688 6C2.29688 5.66863 2.5655 5.4 2.89687 5.4L5.89687 5.4V2.4C5.89687 2.06863 6.1655 1.8 6.49687 1.8Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

Plus1.propTypes = {
  color: PropTypes.string,
};
