/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { User145 } from "../../icons/User145";
import { Indicator } from "../Indicator";
import "./style.css";

export const Avatar = ({ size, type, corner, withIndicator, className, overlapGroupClassName }) => {
  return (
    <div className={`avatar ${size} ${className}`}>
      <div
        className={`overlap-group-4 ${type} with-indicator-${withIndicator} size-${size} ${corner} ${overlapGroupClassName}`}
      >
        {withIndicator && (
          <>
            <div className="content">
              {type === "initials" && <div className="text-wrapper-2">JD</div>}

              {type === "icon" && (
                <User145
                  className={`${
                    size === "eighty-px"
                      ? "class"
                      : size === "one-hundred-px"
                      ? "class-2"
                      : size === "forty-eight-px"
                      ? "class-3"
                      : size === "forty-px"
                      ? "class-4"
                      : size === "thirty-two-px"
                      ? "class-5"
                      : size === "twenty-eight-px"
                      ? "class-6"
                      : size === "twenty-four-px"
                      ? "class-7"
                      : size === "twenty-px"
                      ? "class-8"
                      : size === "sixteen-px"
                      ? "class-9"
                      : "class-10"
                  }`}
                  color="#B5B5B7"
                />
              )}
            </div>
            <Indicator
              className={`${
                size === "eighty-px"
                  ? "class-11"
                  : size === "one-hundred-px"
                  ? "class-12"
                  : size === "forty-eight-px"
                  ? "class-13"
                  : size === "forty-px"
                  ? "class-14"
                  : size === "thirty-two-px"
                  ? "class-15"
                  : size === "twenty-eight-px"
                  ? "class-16"
                  : size === "twenty-four-px"
                  ? "class-17"
                  : size === "twenty-px"
                  ? "class-18"
                  : size === "sixteen-px"
                  ? "class-19"
                  : "class-20"
              }`}
              size={
                ["forty-eight-px", "forty-px"].includes(size)
                  ? "medium"
                  : ["thirty-two-px", "twenty-eight-px"].includes(size)
                  ? "default"
                  : ["sixteen-px", "twenty-four-px", "twenty-px"].includes(size)
                  ? "small"
                  : "large"
              }
              status="success"
            />
          </>
        )}

        {!withIndicator && type === "initials" && <div className="text-wrapper-3">JD</div>}

        {!withIndicator && type === "icon" && (
          <User145
            className={`${
              size === "eighty-px"
                ? "class"
                : size === "one-hundred-px"
                ? "class-2"
                : size === "forty-eight-px"
                ? "class-3"
                : size === "forty-px"
                ? "class-4"
                : size === "thirty-two-px"
                ? "class-5"
                : size === "twenty-eight-px"
                ? "class-6"
                : size === "twenty-four-px"
                ? "class-7"
                : size === "twenty-px"
                ? "class-8"
                : size === "sixteen-px"
                ? "class-9"
                : "class-10"
            }`}
            color="#B5B5B7"
          />
        )}
      </div>
    </div>
  );
};

Avatar.propTypes = {
  size: PropTypes.oneOf([
    "one-hundred-px",
    "twenty-four-px",
    "twenty-eight-px",
    "forty-eight-px",
    "forty-px",
    "sixteen-px",
    "sixty-four-px",
    "eighty-px",
    "thirty-two-px",
    "twenty-px",
  ]),
  type: PropTypes.oneOf(["initials", "image", "icon"]),
  corner: PropTypes.oneOf(["rounded", "circular"]),
  withIndicator: PropTypes.bool,
};
