/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ChevronDoubleLeft1 = ({ color = "#323232", className }) => {
  return (
    <svg
      className={`chevron-double-left-1 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path-31"
        clipRule="evenodd"
        d="M12.5657 12.5657C12.2533 12.8781 11.7467 12.8781 11.4343 12.5657L7.43432 8.56568C7.1219 8.25326 7.1219 7.74673 7.43432 7.43431L11.4343 3.43431C11.7467 3.12189 12.2533 3.12189 12.5657 3.43431C12.8781 3.74673 12.8781 4.25327 12.5657 4.56568L9.13137 8L12.5657 11.4343C12.8781 11.7467 12.8781 12.2533 12.5657 12.5657ZM7.76569 12.5657C7.45327 12.8781 6.94674 12.8781 6.63432 12.5657L2.63432 8.56568C2.3219 8.25326 2.3219 7.74673 2.63432 7.43431L6.63432 3.43431C6.94674 3.12189 7.45327 3.12189 7.76569 3.43431C8.07811 3.74673 8.07811 4.25327 7.76569 4.56568L4.33137 8L7.76569 11.4343C8.07811 11.7467 8.07811 12.2533 7.76569 12.5657Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

ChevronDoubleLeft1.propTypes = {
  color: PropTypes.string,
};
