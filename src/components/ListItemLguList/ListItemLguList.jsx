/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Avatar } from "../Avatar";
import { Badge } from "../Badge";
import "./style.css";

export const ListItemLguList = ({
  stateProp,
  type,
  badge,
  className,
  divClassName,
  text = "Juan Dela Cruz",
  text1 = "Nurse",
  badgeColorNoTypeClassName,
  badgeText = "MOBILIZED",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
    type: type || "subtitle",
    badge: badge,
  });

  return (
    <div
      className={`list-item-LGU-list state-13-${state.state} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className={`content-4 state-14-${state.state} type-6-${state.type} badge-0-${state.badge}`}>
        {["avatar-with-subtitle", "avatar"].includes(state.type) && (
          <Avatar className="avatar-instance" corner="circular" size="forty-px" type="image" withIndicator={false} />
        )}

        <div className="content-5">
          {!state.badge && <div className="juan-dela-cruz">{text}</div>}

          {state.badge && ["avatar-with-subtitle", "subtitle"].includes(state.type) && (
            <Badge
              color
              corner="rounded"
              dismissible={false}
              divClassNameOverride={`${
                state.state === "default" && state.type === "avatar-with-subtitle" && "class-21"
              }`}
              leadingItem="none"
              text="New Entry"
              type="ghost"
            />
          )}

          {["avatar-with-subtitle", "subtitle"].includes(state.type) && (
            <div className="j-delacruz-gmail-com">
              {!state.badge && <>j.delacruz@gmail.com</>}

              {state.badge && <>{text}</>}
            </div>
          )}

          {state.badge && ["avatar-with-subtitle", "subtitle"].includes(state.type) && (
            <div className="text-wrapper-10">j.delacruz@gmail.com</div>
          )}

          {state.badge && ["avatar", "default"].includes(state.type) && (
            <>
              <Badge color corner="rounded" dismissible={false} leadingItem="none" text="New Entry" type="ghost" />
              <div className="juan-dela-cruz-2">{text}</div>
            </>
          )}

          {state.type === "EGMP" && (
            <>
              <div className={`juan-dela-cruz-3 ${divClassName}`}>{text}</div>
              <div className="nurse">{text1}</div>
              <Badge
                className={badgeColorNoTypeClassName}
                color
                corner="rounded"
                dismissible={false}
                leadingItem="none"
                text={badgeText}
                type="default"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.badge === false && state.state === "hover" && state.type === "subtitle") {
    switch (action) {
      case "mouse_leave":
        return {
          badge: false,
          state: "disabled",
          type: "subtitle",
        };
    }
  }

  if (state.badge === true && state.state === "hover" && state.type === "subtitle") {
    switch (action) {
      case "mouse_leave":
        return {
          badge: true,
          state: "disabled",
          type: "subtitle",
        };
    }
  }

  if (state.badge === false && state.state === "hover" && state.type === "default") {
    switch (action) {
      case "mouse_leave":
        return {
          badge: false,
          state: "disabled",
          type: "default",
        };
    }
  }

  if (state.badge === true && state.state === "hover" && state.type === "default") {
    switch (action) {
      case "mouse_leave":
        return {
          badge: true,
          state: "disabled",
          type: "default",
        };
    }
  }

  if (state.badge === false && state.state === "hover" && state.type === "avatar-with-subtitle") {
    switch (action) {
      case "mouse_leave":
        return {
          badge: false,
          state: "disabled",
          type: "avatar-with-subtitle",
        };
    }
  }

  if (state.badge === false && state.state === "hover" && state.type === "avatar") {
    switch (action) {
      case "mouse_leave":
        return {
          badge: false,
          state: "disabled",
          type: "avatar",
        };
    }
  }

  if (state.badge === true && state.state === "hover" && state.type === "avatar-with-subtitle") {
    switch (action) {
      case "mouse_leave":
        return {
          badge: true,
          state: "disabled",
          type: "avatar-with-subtitle",
        };
    }
  }

  if (state.badge === true && state.state === "hover" && state.type === "avatar") {
    switch (action) {
      case "mouse_leave":
        return {
          badge: true,
          state: "disabled",
          type: "avatar",
        };
    }
  }

  if (state.badge === true && state.state === "hover" && state.type === "EGMP") {
    switch (action) {
      case "mouse_leave":
        return {
          badge: true,
          state: "disabled",
          type: "EGMP",
        };
    }
  }

  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hover",
      };
  }

  return state;
}

ListItemLguList.propTypes = {
  stateProp: PropTypes.oneOf(["disabled", "hover", "active", "default"]),
  type: PropTypes.oneOf(["avatar-with-subtitle", "default", "avatar", "EGMP", "subtitle"]),
  badge: PropTypes.bool,
  text: PropTypes.string,
  text1: PropTypes.string,
  badgeText: PropTypes.string,
};
