/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Indicator = ({ size, status, className }) => {
  return <div className={`indicator size-1-${size} ${status} ${className}`} />;
};

Indicator.propTypes = {
  size: PropTypes.oneOf(["large", "small", "medium", "default"]),
  status: PropTypes.oneOf(["warning", "success", "danger", "disabled"]),
};
