/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Footer = ({ className }) => {
  return (
    <div className={`footer ${className}`}>
      <p className="text-wrapper">Copyright © E-GMP International Corporation Admin System. All Rights Reserved.</p>
      <div className="div">Version 1.1.0</div>
    </div>
  );
};
