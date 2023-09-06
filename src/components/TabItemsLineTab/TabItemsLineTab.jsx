/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { InformationCircle13 } from "../../icons/InformationCircle13";
import { X } from "../../icons/X";
import { Badge } from "../Badge";
import "./style.css";

export const TabItemsLineTab = ({
  stateProp,
  leadingIcon,
  trailingIcon,
  badge,
  className,
  text = "Tab",
  lineClassName,
  divClassName,
  badgeText = "01",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
    leadingIcon: leadingIcon,

    trailingIcon: trailingIcon,

    badge: badge,
  });

  return (
    <div
      className={`tab-items-line-tab ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className={`content-3 badge-${state.badge}`}>
        {!state.trailingIcon && !state.leadingIcon && !state.badge && (
          <div className={`tab state-2-${state.state} ${divClassName}`}>{text}</div>
        )}

        {state.leadingIcon && (
          <InformationCircle13
            className="instance-node-3"
            color={
              state.state === "disabled"
                ? "#949494"
                : state.state === "hover"
                ? "#454545"
                : state.state === "active"
                ? "#454CB5"
                : "#606774"
            }
          />
        )}

        {((state.leadingIcon && !state.badge) || (state.trailingIcon && !state.leadingIcon)) && (
          <div className={`tab-2 state-3-${state.state}`}>{text}</div>
        )}

        {state.badge && (
          <>
            <div className={`tab-3 state-4-${state.state}`}>{text}</div>
            <Badge
              className="badge-instance"
              color
              corner="rounded"
              dismissible={false}
              leadingItem="none"
              text={state.leadingIcon ? "01" : badgeText}
              type="default"
            />
          </>
        )}

        {state.trailingIcon && (
          <X
            className="instance-node-3"
            color={
              state.state === "disabled"
                ? "#949494"
                : state.state === "hover"
                ? "#454545"
                : state.state === "active"
                ? "#454CB5"
                : "#606774"
            }
          />
        )}
      </div>
      <div className={`line state-5-${state.state} ${lineClassName}`} />
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

TabItemsLineTab.propTypes = {
  stateProp: PropTypes.oneOf(["disabled", "hover", "active", "default"]),
  leadingIcon: PropTypes.bool,
  trailingIcon: PropTypes.bool,
  badge: PropTypes.bool,
  text: PropTypes.string,
  badgeText: PropTypes.string,
};
