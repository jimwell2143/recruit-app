/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { ArrowNarrowRight4 } from "../../icons/ArrowNarrowRight4";
import { InformationCircle13 } from "../../icons/InformationCircle13";
import "./style.css";

export const SolidButton = ({
  type,
  size,
  stateProp,
  leadingIcon,
  trailingIcon,
  className,
  icon = <InformationCircle13 className="information-circle" color="#323232" />,
  text = "Button",
  contentClassName,
  override = <InformationCircle13 className="information-circle" color="white" />,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    type: type || "primary",
    size: size || "default",
    state: stateProp || "default",
    leadingIcon: leadingIcon,

    trailingIcon: trailingIcon,
  });

  return (
    <button
      className={`solid-button state-${state.state} type-3-${state.type} size-${state.size} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      {((!state.leadingIcon && !state.trailingIcon) ||
        (state.leadingIcon && !state.trailingIcon && state.type === "primary") ||
        (state.trailingIcon && state.type === "primary")) && (
        <div
          className={`content-2 leading-icon-${state.leadingIcon} type-4-${state.type} state-0-${state.state} trailing-icon-${state.trailingIcon} size-0-${state.size} ${contentClassName}`}
        >
          {!state.trailingIcon && state.leadingIcon && <>{override}</>}

          {((state.leadingIcon && !state.trailingIcon) || (!state.leadingIcon && state.type === "primary")) && (
            <div className="button">{text}</div>
          )}

          {state.trailingIcon && <InformationCircle13 className="information-circle" color="white" />}

          {state.trailingIcon && state.leadingIcon && (
            <>
              <div className="button">{text}</div>
              <ArrowNarrowRight4 className="information-circle" color="white" />
            </>
          )}

          {["danger", "default", "secondary", "success", "warning"].includes(state.type) && <>{text}</>}
        </div>
      )}

      {((state.leadingIcon && !state.trailingIcon && state.type === "danger") ||
        (state.leadingIcon && !state.trailingIcon && state.type === "default") ||
        (state.leadingIcon && !state.trailingIcon && state.type === "secondary") ||
        (state.leadingIcon && !state.trailingIcon && state.type === "success") ||
        (state.leadingIcon && !state.trailingIcon && state.type === "warning")) && <>{icon}</>}

      {((state.leadingIcon && state.trailingIcon && state.type === "danger") ||
        (state.leadingIcon && state.trailingIcon && state.type === "default") ||
        (state.leadingIcon && state.trailingIcon && state.type === "secondary") ||
        (state.leadingIcon && state.trailingIcon && state.type === "success") ||
        (state.leadingIcon && state.trailingIcon && state.type === "warning")) && (
        <InformationCircle13
          className="information-circle"
          color={
            ["danger", "secondary", "success", "warning"].includes(state.type)
              ? "white"
              : state.state === "disabled"
              ? "#949494"
              : "#323232"
          }
        />
      )}

      {((!state.leadingIcon && state.trailingIcon && state.type === "danger") ||
        (!state.leadingIcon && state.trailingIcon && state.type === "success") ||
        (!state.leadingIcon && state.trailingIcon && state.type === "warning") ||
        (state.leadingIcon && !state.trailingIcon && state.type === "default") ||
        (state.leadingIcon && !state.trailingIcon && state.type === "secondary") ||
        (state.leadingIcon && state.type === "danger") ||
        (state.leadingIcon && state.type === "success") ||
        (state.leadingIcon && state.type === "warning") ||
        (state.trailingIcon && state.type === "default") ||
        (state.trailingIcon && state.type === "secondary")) && <div className="button-2">{text}</div>}

      {((state.leadingIcon && state.trailingIcon && state.type === "danger") ||
        (state.leadingIcon && state.trailingIcon && state.type === "default") ||
        (state.leadingIcon && state.trailingIcon && state.type === "secondary") ||
        (state.leadingIcon && state.trailingIcon && state.type === "success") ||
        (state.leadingIcon && state.trailingIcon && state.type === "warning")) && (
        <ArrowNarrowRight4
          className="information-circle"
          color={
            ["danger", "secondary", "success", "warning"].includes(state.type)
              ? "white"
              : state.state === "disabled"
              ? "#949494"
              : "#323232"
          }
        />
      )}

      {((!state.leadingIcon && state.trailingIcon && state.type === "danger") ||
        (!state.leadingIcon && state.trailingIcon && state.type === "default") ||
        (!state.leadingIcon && state.trailingIcon && state.type === "secondary") ||
        (!state.leadingIcon && state.trailingIcon && state.type === "success") ||
        (!state.leadingIcon && state.trailingIcon && state.type === "warning")) && (
        <InformationCircle13
          className="information-circle"
          color={
            ["danger", "secondary", "success", "warning"].includes(state.type)
              ? "white"
              : state.state === "disabled"
              ? "#949494"
              : "#323232"
          }
        />
      )}
    </button>
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

SolidButton.propTypes = {
  type: PropTypes.oneOf(["warning", "danger", "default", "success", "secondary", "primary"]),
  size: PropTypes.oneOf(["large", "small", "extra-small", "default"]),
  stateProp: PropTypes.oneOf(["toggle", "disabled", "hover", "default"]),
  leadingIcon: PropTypes.bool,
  trailingIcon: PropTypes.bool,
  text: PropTypes.string,
};
