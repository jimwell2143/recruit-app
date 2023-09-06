/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { InformationCircle13 } from "../../icons/InformationCircle13";
import { X } from "../../icons/X";
import { Avatar } from "../Avatar";
import { Indicator } from "../Indicator";
import "./style.css";

export const Badge = ({
  color,
  type,
  leadingItem,
  dismissible,
  corner,
  className,
  icon = <InformationCircle13 className="instance-node" color="#454CB5" />,
  divClassName,
  text = "Badge",
  divClassNameOverride,
}) => {
  return (
    <div className={`badge corner-0-${corner} ${type} color-${color} ${className}`}>
      {((!color && corner === "circular" && !dismissible && leadingItem === "icon" && type === "default") ||
        (!color && corner === "circular" && !dismissible && leadingItem === "icon" && type === "ghost") ||
        (!color && corner === "circular" && !dismissible && leadingItem === "indicator" && type === "default") ||
        (color && corner === "circular" && leadingItem === "indicator" && type === "default") ||
        (corner === "rounded" && !dismissible && leadingItem === "icon" && type === "default") ||
        (corner === "rounded" && !dismissible && leadingItem === "icon" && type === "ghost") ||
        (corner === "rounded" && !dismissible && leadingItem === "indicator" && type === "default") ||
        (!dismissible && leadingItem === "avatar") ||
        (!dismissible && leadingItem === "icon" && type === "outline") ||
        (!dismissible && leadingItem === "indicator" && type === "ghost") ||
        (!dismissible && leadingItem === "indicator" && type === "outline")) && <>{icon}</>}

      {((!color && corner === "rounded" && !dismissible && leadingItem === "indicator" && type === "outline") ||
        (!color && corner === "rounded" && !dismissible && leadingItem === "none" && type === "outline") ||
        (!color && !dismissible && leadingItem === "avatar" && type === "outline") ||
        (!color && !dismissible && leadingItem === "icon" && type === "outline") ||
        (!color && !dismissible && type === "default") ||
        (!color && !dismissible && type === "ghost") ||
        (color && corner === "circular" && !dismissible && leadingItem === "avatar") ||
        (color && corner === "circular" && !dismissible && leadingItem === "icon" && type === "outline") ||
        (color && corner === "circular" && !dismissible && leadingItem === "indicator" && type === "ghost") ||
        (color && corner === "circular" && !dismissible && leadingItem === "none" && type === "default") ||
        (color && corner === "circular" && !dismissible && leadingItem === "none" && type === "ghost") ||
        (color && corner === "circular" && leadingItem === "indicator" && type === "default") ||
        (color && corner === "rounded" && !dismissible) ||
        (corner === "circular" && !dismissible && leadingItem === "indicator" && type === "outline") ||
        (corner === "circular" && !dismissible && leadingItem === "none" && type === "outline")) && (
        <div
          className={`text-wrapper-4 ${
            ["avatar", "icon", "indicator"].includes(leadingItem)
              ? divClassName
              : leadingItem === "none"
              ? divClassNameOverride
              : undefined
          }`}
        >
          {text}
        </div>
      )}

      {((color && corner === "circular" && !dismissible && leadingItem === "icon" && type === "default") ||
        (color && corner === "circular" && !dismissible && leadingItem === "icon" && type === "ghost") ||
        (dismissible && leadingItem === "icon")) && (
        <InformationCircle13
          className="instance-node"
          color={!color ? "#323232" : type === "default" && color ? "white" : "#454CB5"}
        />
      )}

      {((color && corner === "circular" && !dismissible && leadingItem === "icon" && type === "default") ||
        (color && corner === "circular" && !dismissible && leadingItem === "icon" && type === "ghost") ||
        (dismissible && leadingItem === "icon") ||
        (dismissible && leadingItem === "none")) && <div className="text-wrapper-5">{text}</div>}

      {dismissible && ["icon", "none"].includes(leadingItem) && (
        <X className="instance-node" color={!color ? "#323232" : type === "default" && color ? "white" : "#454CB5"} />
      )}

      {((!color && corner === "circular" && dismissible && leadingItem === "indicator" && type === "default") ||
        (corner === "circular" && dismissible && leadingItem === "indicator" && type === "ghost") ||
        (corner === "circular" && dismissible && leadingItem === "indicator" && type === "outline") ||
        (corner === "rounded" && dismissible && leadingItem === "indicator")) && (
        <>
          <Indicator className="instance-node-2" size="medium" status="success" />
          <div className="text-wrapper-6">{text}</div>
          <X className="instance-node" color={!color ? "#323232" : type === "default" && color ? "white" : "#454CB5"} />
        </>
      )}

      {leadingItem === "avatar" && dismissible && (
        <>
          <Avatar className="instance-node-2" corner="circular" size="sixteen-px" type="image" withIndicator={false} />
          <div className="text-wrapper-7">{text}</div>
          <X className="instance-node" color={!color ? "#323232" : type === "default" && color ? "white" : "#454CB5"} />
        </>
      )}
    </div>
  );
};

Badge.propTypes = {
  color: PropTypes.bool,
  type: PropTypes.oneOf(["ghost", "outline", "default"]),
  leadingItem: PropTypes.oneOf(["avatar", "none", "indicator", "icon"]),
  dismissible: PropTypes.bool,
  corner: PropTypes.oneOf(["rounded", "circular"]),
  text: PropTypes.string,
};
