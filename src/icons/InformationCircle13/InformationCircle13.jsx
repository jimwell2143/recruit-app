/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const InformationCircle13 = ({ color = "#323232", className }) => {
  return (
    <svg
      className={`information-circle-13 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path-31"
        clipRule="evenodd"
        d="M14.4 8.0001C14.4 11.5347 11.5346 14.4001 8 14.4001C4.46538 14.4001 1.6 11.5347 1.6 8.0001C1.6 4.46548 4.46538 1.6001 8 1.6001C11.5346 1.6001 14.4 4.46548 14.4 8.0001ZM8.8 4.8001C8.8 5.24193 8.44183 5.6001 8 5.6001C7.55817 5.6001 7.2 5.24193 7.2 4.8001C7.2 4.35827 7.55817 4.0001 8 4.0001C8.44183 4.0001 8.8 4.35827 8.8 4.8001ZM7.2 7.2001C6.75817 7.2001 6.4 7.55827 6.4 8.0001C6.4 8.44193 6.75817 8.8001 7.2 8.8001V11.2001C7.2 11.6419 7.55817 12.0001 8 12.0001H8.8C9.24183 12.0001 9.6 11.6419 9.6 11.2001C9.6 10.7583 9.24183 10.4001 8.8 10.4001V8.0001C8.8 7.55827 8.44183 7.2001 8 7.2001H7.2Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

InformationCircle13.propTypes = {
  color: PropTypes.string,
};
