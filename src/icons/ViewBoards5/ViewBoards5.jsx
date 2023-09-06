/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ViewBoards5 = ({ color = "#9FA2A7", className }) => {
  return (
    <svg
      className={`view-boards-5 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path-31"
        d="M1.59998 3.2C1.59998 2.75817 1.95815 2.4 2.39997 2.4H3.99997C4.4418 2.4 4.79997 2.75817 4.79997 3.2V12.8C4.79997 13.2418 4.4418 13.6 3.99997 13.6H2.39997C1.95815 13.6 1.59998 13.2418 1.59998 12.8V3.2Z"
        fill={color}
      />
      <path
        className="path-31"
        d="M6.39996 3.2C6.39996 2.75817 6.75814 2.4 7.19996 2.4H8.79996C9.24179 2.4 9.59996 2.75817 9.59996 3.2V12.8C9.59996 13.2418 9.24179 13.6 8.79996 13.6H7.19996C6.75814 13.6 6.39996 13.2418 6.39996 12.8V3.2Z"
        fill={color}
      />
      <path
        className="path-31"
        d="M12 2.4C11.5581 2.4 11.2 2.75817 11.2 3.2V12.8C11.2 13.2418 11.5581 13.6 12 13.6H13.5999C14.0418 13.6 14.3999 13.2418 14.3999 12.8V3.2C14.3999 2.75817 14.0418 2.4 13.5999 2.4H12Z"
        fill={color}
      />
    </svg>
  );
};

ViewBoards5.propTypes = {
  color: PropTypes.string,
};
