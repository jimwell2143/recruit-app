/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { ChevronDown49 } from "../../icons/ChevronDown49";
import { ChevronUp2 } from "../../icons/ChevronUp2";
import { CoreDashboard7 } from "../../icons/CoreDashboard7";
import "./style.css";

export const NavigationItem = ({
  level,
  stateProp,
  className,
  icon = <CoreDashboard7 className="core-dashboard-7" color="#9FA2A7" />,
  text = "Navigation Item",
  text1 = "HEADING",
  contentClassName,
  override = <CoreDashboard7 className="core-dashboard-7" color="#9FA2A7" />,
  text2 = "Sub Item",
  onClick,
  activeLineClassName,
  contentClassNameOverride,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    level: level || "level-2",
    state: stateProp || "default",
  });

  return (
    <div
      className={`navigation-item state-20-${state.state} ${state.level} ${className}`}
      onClick={onClick}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <div className="bg-muted">
        {["level-1-dropdown", "level-1", "level-2"].includes(state.level) && (
          <div className="bg-white">
            <div className="content-padding">
              <div
                className={`content-6 ${
                  state.level === "level-1-dropdown" ||
                  state.level === "level-1" ||
                  (state.level === "level-2" && state.state === "disabled")
                    ? contentClassName
                    : state.level === "level-2" && ["active", "default", "hover"].includes(state.state)
                    ? contentClassNameOverride
                    : undefined
                }`}
              >
                {state.level === "level-1" && <>{icon}</>}

                {["level-1", "level-2"].includes(state.level) && (
                  <div className="div-3">
                    {state.level === "level-1" && <>{text}</>}

                    {state.level === "level-2" && <>{text2}</>}
                  </div>
                )}

                {state.level === "level-1-dropdown" && (
                  <>
                    {override}
                    <div className="text-wrapper-13">{text}</div>
                  </>
                )}

                {state.level === "level-1-dropdown" && ["default", "disabled", "hover"].includes(state.state) && (
                  <ChevronDown49
                    className="core-dashboard-7"
                    color={state.state === "disabled" ? "#949494" : state.state === "hover" ? "white" : "#9FA2A7"}
                  />
                )}

                {state.state === "active" && state.level === "level-1-dropdown" && (
                  <ChevronUp2 className="core-dashboard-7" color="white" />
                )}
              </div>
            </div>
            {state.level === "level-2" && ["active", "default", "hover"].includes(state.state) && (
              <div className={`active-line ${activeLineClassName}`} />
            )}
          </div>
        )}

        {state.level === "heading" && <>{text1}</>}
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "default",
      };
  }

  return state;
}

NavigationItem.propTypes = {
  level: PropTypes.oneOf(["level-2", "level-1-dropdown", "level-1", "heading"]),
  stateProp: PropTypes.oneOf(["disabled", "hover", "active", "default"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
};
