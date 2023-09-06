/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ChevronRight1 = ({ color = "#323232", className }) => {
  return (
    <svg
      className={`chevron-right-1 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path-31"
        clipRule="evenodd"
        d="M5.83431 11.7657C5.52189 11.4533 5.52189 10.9467 5.83431 10.6343L8.46863 8L5.83431 5.36569C5.52189 5.05327 5.52189 4.54673 5.83431 4.23431C6.14673 3.9219 6.65327 3.9219 6.96569 4.23431L10.1657 7.43431C10.4781 7.74673 10.4781 8.25327 10.1657 8.56569L6.96569 11.7657C6.65327 12.0781 6.14673 12.0781 5.83431 11.7657Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

ChevronRight1.propTypes = {
  color: PropTypes.string,
};
