/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ChevronDoubleLeft1 } from "../../icons/ChevronDoubleLeft1";
import { ChevronDoubleRight } from "../../icons/ChevronDoubleRight";
import "./style.css";

export const Pagination = ({
  className,
  chevronDoubleLeft1Color = "#454CB5",
  divClassName,
  divClassNameOverride,
  divClassName1,
  chevronDoubleRightColor = "#454CB5",
}) => {
  return (
    <div className={`pagination ${className}`}>
      <div className="prev">
        <ChevronDoubleLeft1 className="icon-instance-node" color={chevronDoubleLeft1Color} />
        <div className={`text-wrapper-11 ${divClassName}`}>Prev</div>
      </div>
      <div className="page">
        <div className={`text-wrapper-11 ${divClassNameOverride}`}>Page 1 of 24</div>
      </div>
      <div className="next">
        <div className={`text-wrapper-11 ${divClassName1}`}>Next</div>
        <ChevronDoubleRight className="icon-instance-node" color={chevronDoubleRightColor} />
      </div>
    </div>
  );
};

Pagination.propTypes = {
  chevronDoubleLeft1Color: PropTypes.string,
  chevronDoubleRightColor: PropTypes.string,
};
