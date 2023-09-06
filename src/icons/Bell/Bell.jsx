/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Bell = ({ color = "#BEAC6F", className }) => {
  return (
    <svg
      className={`bell ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path-31"
        d="M12.0001 2.40002C8.02368 2.40002 4.80013 5.62357 4.80013 9.60002V13.903L3.9516 14.7515C3.60841 15.0947 3.50574 15.6108 3.69148 16.0592C3.87721 16.5077 4.31478 16.8 4.80013 16.8H19.2001C19.6855 16.8 20.1231 16.5077 20.3088 16.0592C20.4945 15.6108 20.3919 15.0947 20.0487 14.7515L19.2001 13.903V9.60002C19.2001 5.62357 15.9766 2.40002 12.0001 2.40002Z"
        fill={color}
      />
      <path
        className="path-31"
        d="M12.0001 21.6C10.0119 21.6 8.4001 19.9883 8.4001 18H15.6001C15.6001 19.9883 13.9883 21.6 12.0001 21.6Z"
        fill={color}
      />
    </svg>
  );
};

Bell.propTypes = {
  color: PropTypes.string,
};
