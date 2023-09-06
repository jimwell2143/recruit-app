/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const CoreDashboard = ({
  className,
  coreDashboard = "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/-core--dashboard-16@2x.png",
}) => {
  return <img className={`core-dashboard ${className}`} alt="Core dashboard" src={coreDashboard} />;
};

CoreDashboard.propTypes = {
  coreDashboard: PropTypes.string,
};
