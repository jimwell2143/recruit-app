/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ChevronRight1 } from "../../icons/ChevronRight1";
import { Home1 } from "../../icons/Home1";
import { Badge } from "../Badge";
import "./style.css";

export const BreadcrumbItem = ({
  type,
  active,
  leadingIcon,
  trailingIcon,
  className,
  icon = <Home1 className="chevron-right" color="#606774" />,
  text = "Home",
  divClassName,
}) => {
  return (
    <div className={`breadcrumb-item ${className}`}>
      {(leadingIcon || type === "icon-only") && <>{icon}</>}

      {type === "default" && <div className={`home active-${active} ${divClassName}`}>{text}</div>}

      {!trailingIcon && !active && <ChevronRight1 className="chevron-right" color="#606774" />}

      {trailingIcon && (
        <Badge
          className="badge-2"
          color
          corner="rounded"
          dismissible={false}
          leadingItem="none"
          text="00"
          type="default"
        />
      )}

      {!active && trailingIcon && <ChevronRight1 className="chevron-right" color="#606774" />}
    </div>
  );
};

BreadcrumbItem.propTypes = {
  type: PropTypes.oneOf(["icon-only", "default"]),
  active: PropTypes.bool,
  leadingIcon: PropTypes.bool,
  trailingIcon: PropTypes.bool,
  text: PropTypes.string,
};
