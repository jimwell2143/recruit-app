/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ArrowNarrowRight4 = ({ color = "white", className }) => {
  return (
    <svg
      className={`arrow-narrow-right-4 ${className}`}
      fill="none"
      height="12"
      viewBox="0 0 12 12"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path-31"
        clipRule="evenodd"
        d="M7.37571 3.17574C7.61002 2.94142 7.98992 2.94142 8.22424 3.17574L10.6242 5.57574C10.8585 5.81005 10.8585 6.18995 10.6242 6.42426L8.22424 8.82426C7.98992 9.05858 7.61002 9.05858 7.37571 8.82426C7.14139 8.58995 7.14139 8.21005 7.37571 7.97574L8.75144 6.6H1.79998C1.46861 6.6 1.19998 6.33137 1.19998 6C1.19998 5.66863 1.46861 5.4 1.79998 5.4H8.75144L7.37571 4.02426C7.14139 3.78995 7.14139 3.41005 7.37571 3.17574Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

ArrowNarrowRight4.propTypes = {
  color: PropTypes.string,
};
