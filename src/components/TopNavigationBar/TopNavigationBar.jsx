/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ChevronDown49 } from "../../icons/ChevronDown49";
import { Home1 } from "../../icons/Home1";
import { Avatar } from "../Avatar";
import { BreadcrumbItem } from "../BreadcrumbItem";
import { Indicator } from "../Indicator";
import "./style.css";

export const TopNavigationBar = ({
  className,
  breadcrumbItemIcon = <Home1 className="home-1" color="#606774" />,
  breadcrumbItemText = "Master Page",
  breadcrumbItemText1 = "Current Page",
  breadcrumbItemActive,
  breadcrumbItemDivClassName,
  visible = true,
  visible1 = true,
  notificationBellClassName,
}) => {
  return (
    <div className={`top-navigation-bar ${className}`}>
      <div className="breadcrumb">
        <BreadcrumbItem
          active={false}
          className="breadcrumb-item-instance"
          icon={breadcrumbItemIcon}
          leadingIcon
          text={breadcrumbItemText}
          trailingIcon={false}
          type="default"
        />
        <BreadcrumbItem
          active={breadcrumbItemActive}
          className="breadcrumb-item-instance"
          divClassName={breadcrumbItemDivClassName}
          leadingIcon={false}
          text={breadcrumbItemText1}
          trailingIcon={false}
          type="default"
        />
        {visible && (
          <BreadcrumbItem
            active={false}
            className="breadcrumb-item-instance"
            leadingIcon={false}
            text="Current Page"
            trailingIcon={false}
            type="default"
          />
        )}

        {visible1 && (
          <BreadcrumbItem
            active={false}
            className="breadcrumb-item-instance"
            leadingIcon={false}
            text="Current Page"
            trailingIcon={false}
            type="default"
          />
        )}
      </div>
      <div className="user-and-bell">
        <div className={`notification-bell ${notificationBellClassName}`}>
          <Indicator className="indicator-instance" size="small" status="danger" />
        </div>
        <div className="account">
          <Avatar
            className="design-component-instance-node"
            corner="circular"
            overlapGroupClassName="avatar-2"
            size="thirty-two-px"
            type="image"
            withIndicator={false}
          />
          <div className="text-wrapper-12">Hi! Jane Doe</div>
          <ChevronDown49 className="chevron-down" color="#BEAC6F" />
        </div>
      </div>
    </div>
  );
};

TopNavigationBar.propTypes = {
  breadcrumbItemText: PropTypes.string,
  breadcrumbItemText1: PropTypes.string,
  breadcrumbItemActive: PropTypes.bool,
  visible: PropTypes.bool,
  visible1: PropTypes.bool,
};
