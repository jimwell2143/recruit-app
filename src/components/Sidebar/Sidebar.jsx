/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { AccountSettings6 } from "../../icons/AccountSettings6";
import { Briefcase6 } from "../../icons/Briefcase6";
import { ChartSquareBar5 } from "../../icons/ChartSquareBar5";
import { ClipboardList6 } from "../../icons/ClipboardList6";
import { CoreBills7 } from "../../icons/CoreBills7";
import { CoreDashboard7 } from "../../icons/CoreDashboard7";
import { CoreServices9 } from "../../icons/CoreServices9";
import { Folder4 } from "../../icons/Folder4";
import { FolderSupervised8 } from "../../icons/FolderSupervised8";
import { Identification1 } from "../../icons/Identification1";
import { InformationCircle13 } from "../../icons/InformationCircle13";
import { Mail9 } from "../../icons/Mail9";
import { Medical8 } from "../../icons/Medical8";
import { OfficeBuilding4 } from "../../icons/OfficeBuilding4";
import { Table9 } from "../../icons/Table9";
import { Template } from "../../icons/Template";
import { Template7 } from "../../icons/Template7";
import { UserGroup17 } from "../../icons/UserGroup17";
import { UserSetting7 } from "../../icons/UserSetting7";
import { Users9 } from "../../icons/Users9";
import { ViewBoards5 } from "../../icons/ViewBoards5";
import { ViewList8 } from "../../icons/ViewList8";
import { CoreDashboard } from "../CoreDashboard";
import { Logo } from "../Logo";
import { NavigationItem } from "../NavigationItem";
import "./style.css";

export const Sidebar = ({
  type,
  className,
  override = (
    <CoreDashboard
      className="core-dashboard-instance"
      coreDashboard="https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/-core--dashboard-17@2x.png"
    />
  ),
  override1 = <Folder4 className="instance-node-5" color="#9FA2A7" />,
  override2 = <ViewBoards5 className="instance-node-5" color="#9FA2A7" />,
  override3 = <OfficeBuilding4 className="instance-node-5" color="#9FA2A7" />,
  override4 = <Mail9 className="instance-node-5" color="#9FA2A7" />,
  override5 = <CoreServices9 className="instance-node-5" />,
  override6 = <UserGroup17 className="instance-node-5" color="#9FA2A7" />,
  navigationItemIcon = <Medical8 className="instance-node-5" color="#9FA2A7" />,
  navigationItemIcon1 = <FolderSupervised8 className="instance-node-5" color="#9FA2A7" />,
  navigationItemIcon2 = <UserGroup17 className="instance-node-5" color="#9FA2A7" />,
  navigationItemIcon3 = <Briefcase6 className="instance-node-5" color="#9FA2A7" />,
  navigationItemIcon4 = <Identification1 className="instance-node-5" color="white" />,
  navigationItemStateProp = "default",
  navigationItemLevelLevelStateClassName,
  navigationItemIcon5 = <Users9 className="instance-node-5" color="#9FA2A7" />,
  navigationItemIcon6 = <CoreBills7 className="instance-node-5" />,
  override7 = <ClipboardList6 className="instance-node-5" color="#9FA2A7" />,
  override8 = <ChartSquareBar5 className="instance-node-5" color="#9FA2A7" />,
  override9 = <Table9 className="instance-node-5" color="#9FA2A7" />,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    type: type || "default",
  });

  return (
    <div className={`sidebar ${className}`}>
      <Logo color="colored" project="e-GMP-colored" projectBoronganClassName="logo-instance" type="seal" />
      <div className={`enable-v-scroll-if type-67-${state.type}`}>
        <div className="content-7">
          {["CMS", "VISA-module", "datasets", "default", "documents", "endorsed-candidates"].includes(state.type) && (
            <>
              <div className="group">
                <NavigationItem
                  className="navigation-item-sidebar-dark"
                  icon={
                    ["CMS", "datasets", "default"].includes(state.type) ? (
                      <CoreDashboard7 className="instance-node-5" color="#9FA2A7" />
                    ) : state.type === "endorsed-candidates" ? (
                      <CoreDashboard
                        className="core-dashboard-instance"
                        coreDashboard="https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/-core--dashboard-17@2x.png"
                      />
                    ) : undefined
                  }
                  level="level-1"
                  stateProp="default"
                  text={state.type === "datasets" ? "Dashboards" : "Dashboard"}
                />
              </div>
              <div className="group">
                <NavigationItem
                  className={`${state.type === "CMS" ? "navigation-item-instance" : "navigation-item-sidebar-dark"}`}
                  level="level-1-dropdown"
                  onClick={() => {
                    dispatch("click_610");
                  }}
                  override={
                    ["CMS", "datasets", "documents"].includes(state.type) ? (
                      <Template7
                        className="instance-node-5"
                        color={
                          state.type === "CMS"
                            ? "white"
                            : ["datasets", "documents"].includes(state.type)
                            ? "#9FA2A7"
                            : undefined
                        }
                      />
                    ) : state.type === "default" ? (
                      <Template className="instance-node-5" />
                    ) : undefined
                  }
                  stateProp={state.type === "CMS" ? "active" : "default"}
                  text="CMS"
                />
                {state.type === "CMS" && (
                  <>
                    <div className="bg-muted-wrapper">
                      <div className="bg-white-wrapper">
                        <div className="content-padding-wrapper">
                          <div className="content-wrapper">
                            <div className="content-8">
                              <InformationCircle13 className="instance-node-5" color="#3B82F6" />
                              <div className="navigation-item-2">Design Note (hover here)</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <NavigationItem
                      className="navigation-item-sidebar-dark"
                      level="level-2"
                      stateProp="default"
                      text2="Logos"
                    />
                    <NavigationItem
                      className="navigation-item-sidebar-dark"
                      level="level-2"
                      stateProp="default"
                      text2="Banners &amp; Videos"
                    />
                    <NavigationItem
                      className="navigation-item-sidebar-dark"
                      level="level-2"
                      stateProp="default"
                      text2="Content"
                    />
                    <NavigationItem
                      className="navigation-item-sidebar-dark"
                      level="level-2"
                      stateProp="default"
                      text2="Icons"
                    />
                  </>
                )}
              </div>
              <div className="group">
                <NavigationItem
                  className="navigation-item-instance"
                  level="heading"
                  stateProp="default"
                  text1="CONTROL PANEL"
                />
                <NavigationItem
                  className="navigation-item-sidebar-dark"
                  contentClassName="navigation-item-sidebar-dark-instance"
                  icon={
                    ["CMS", "datasets", "default", "documents"].includes(state.type) ? (
                      <UserSetting7 className="instance-node-5" />
                    ) : undefined
                  }
                  level="level-1"
                  stateProp="default"
                  text="User Management"
                />
                <NavigationItem
                  className="navigation-item-sidebar-dark"
                  contentClassName="navigation-item-sidebar-dark-instance"
                  icon={
                    ["CMS", "datasets", "default", "documents"].includes(state.type) ? (
                      <AccountSettings6 className="instance-node-5" />
                    ) : undefined
                  }
                  level="level-1"
                  stateProp="default"
                  text="Role Management"
                />
                <NavigationItem
                  className={`${
                    state.type === "datasets" ? "navigation-item-instance" : "navigation-item-sidebar-dark"
                  }`}
                  level="level-1-dropdown"
                  onClick={() => {
                    dispatch("click_1250");
                  }}
                  override={
                    ["CMS", "datasets", "default", "documents", "endorsed-candidates"].includes(state.type) ? (
                      <ViewList8
                        className="instance-node-5"
                        color={
                          ["CMS", "default", "documents", "endorsed-candidates"].includes(state.type)
                            ? "#9FA2A7"
                            : state.type === "datasets"
                            ? "white"
                            : undefined
                        }
                      />
                    ) : undefined
                  }
                  stateProp={state.type === "datasets" ? "active" : "default"}
                  text="Datasets"
                />
                {["CMS", "VISA-module", "default", "endorsed-candidates"].includes(state.type) && (
                  <>
                    <NavigationItem
                      className="navigation-item-sidebar-dark"
                      contentClassName="navigation-item-sidebar-dark-instance"
                      level="level-1-dropdown"
                      onClick={() => {
                        dispatch("click_643");
                      }}
                      override={
                        ["CMS", "default", "endorsed-candidates"].includes(state.type) ? (
                          <Folder4 className="instance-node-5" color="#9FA2A7" />
                        ) : undefined
                      }
                      stateProp="default"
                      text="Documents Setup"
                    />
                    <NavigationItem
                      className="navigation-item-sidebar-dark"
                      contentClassName="navigation-item-sidebar-dark-instance"
                      icon={
                        ["CMS", "default", "endorsed-candidates"].includes(state.type) ? (
                          <ViewBoards5 className="instance-node-5" color="#9FA2A7" />
                        ) : undefined
                      }
                      level="level-1"
                      stateProp="default"
                      text="System Audit"
                    />
                    <NavigationItem
                      className="navigation-item-sidebar-dark"
                      contentClassName="navigation-item-sidebar-dark-instance"
                      icon={
                        ["CMS", "default", "endorsed-candidates"].includes(state.type) ? (
                          <OfficeBuilding4 className="instance-node-5" color="#9FA2A7" />
                        ) : undefined
                      }
                      level="level-1"
                      stateProp="default"
                      text="System Setup"
                    />
                    <NavigationItem
                      className="navigation-item-sidebar-dark"
                      contentClassName="navigation-item-sidebar-dark-instance"
                      icon={
                        ["CMS", "default", "endorsed-candidates"].includes(state.type) ? (
                          <Mail9 className="instance-node-5" color="#9FA2A7" />
                        ) : undefined
                      }
                      level="level-1"
                      stateProp="default"
                      text="Website Inbox"
                    />
                  </>
                )}

                {state.type === "documents" && (
                  <NavigationItem
                    className="navigation-item-instance"
                    contentClassName="navigation-item-sidebar-dark-instance"
                    level="level-1-dropdown"
                    onClick={() => {
                      dispatch("click_1947");
                    }}
                    override={<Folder4 className="instance-node-5" color="white" />}
                    stateProp="active"
                    text="Documents Setup"
                  />
                )}

                {["datasets", "documents"].includes(state.type) && (
                  <>
                    <NavigationItem
                      activeLineClassName="navigation-item-3"
                      className="navigation-item-4"
                      level="level-2"
                      stateProp="default"
                      text2={state.type === "datasets" ? "Location" : "Recruitment"}
                    />
                    <NavigationItem
                      activeLineClassName="navigation-item-3"
                      className="navigation-item-4"
                      level="level-2"
                      stateProp="default"
                      text2={state.type === "datasets" ? "Country" : "Mobilization"}
                    />
                  </>
                )}

                {state.type === "documents" && (
                  <>
                    <NavigationItem
                      className="navigation-item-sidebar-dark"
                      contentClassName="navigation-item-sidebar-dark-instance"
                      icon={<ViewBoards5 className="instance-node-5" color="#9FA2A7" />}
                      level="level-1"
                      stateProp="default"
                      text="System Audit"
                    />
                    <NavigationItem
                      className="navigation-item-sidebar-dark"
                      contentClassName="navigation-item-sidebar-dark-instance"
                      icon={<OfficeBuilding4 className="instance-node-5" color="#9FA2A7" />}
                      level="level-1"
                      stateProp="default"
                      text="System Setup"
                    />
                    <NavigationItem
                      className="navigation-item-sidebar-dark"
                      contentClassName="navigation-item-sidebar-dark-instance"
                      icon={<Mail9 className="instance-node-5" color="#9FA2A7" />}
                      level="level-1"
                      stateProp="default"
                      text="Website Inbox"
                    />
                  </>
                )}

                {state.type === "datasets" && (
                  <>
                    <NavigationItem
                      activeLineClassName="navigation-item-3"
                      className="navigation-item-4"
                      level="level-2"
                      stateProp="default"
                      text2="Branch"
                    />
                    <NavigationItem
                      activeLineClassName="navigation-item-3"
                      className="navigation-item-4"
                      level="level-2"
                      stateProp="default"
                      text2="Principal &amp; Employer"
                    />
                    <NavigationItem
                      activeLineClassName="navigation-item-3"
                      className="navigation-item-4"
                      level="level-2"
                      stateProp="default"
                      text2="Position"
                    />
                    <NavigationItem
                      activeLineClassName="navigation-item-3"
                      className="navigation-item-4"
                      level="level-2"
                      stateProp="default"
                      text2="Clinic"
                    />
                    <NavigationItem
                      activeLineClassName="navigation-item-3"
                      className="navigation-item-4"
                      level="level-2"
                      stateProp="default"
                      text2="Source of Application"
                    />
                    <NavigationItem
                      activeLineClassName="navigation-item-3"
                      className="navigation-item-4"
                      level="level-2"
                      stateProp="default"
                      text2="Agent"
                    />
                    <NavigationItem
                      activeLineClassName="navigation-item-3"
                      className="navigation-item-4"
                      level="level-2"
                      stateProp="default"
                      text2="Particular"
                    />
                    <NavigationItem
                      activeLineClassName="navigation-item-3"
                      className="navigation-item-4"
                      level="level-2"
                      stateProp="default"
                      text2="Travel Agent"
                    />
                    <NavigationItem
                      activeLineClassName="navigation-item-3"
                      className="navigation-item-4"
                      level="level-2"
                      stateProp="default"
                      text2="Airline"
                    />
                    <NavigationItem
                      activeLineClassName="navigation-item-3"
                      className="navigation-item-4"
                      level="level-2"
                      stateProp="default"
                      text2="Payment Method"
                    />
                    <NavigationItem
                      activeLineClassName="navigation-item-3"
                      className="navigation-item-4"
                      level="level-2"
                      stateProp="default"
                      text2="Insurance Provider"
                    />
                    <NavigationItem
                      activeLineClassName="navigation-item-3"
                      className="navigation-item-4"
                      level="level-2"
                      stateProp="default"
                      text2="Lending Provider"
                    />
                    <NavigationItem
                      activeLineClassName="navigation-item-3"
                      className="navigation-item-4"
                      level="level-2"
                      stateProp="default"
                      text2="Teams"
                    />
                    <NavigationItem
                      className="navigation-item-sidebar-dark"
                      contentClassName="navigation-item-sidebar-dark-instance"
                      level="level-1-dropdown"
                      onClick={() => {
                        dispatch("click_1363");
                      }}
                      override={<Folder4 className="instance-node-5" color="#9FA2A7" />}
                      stateProp="default"
                      text="Documents Setup"
                    />
                    <NavigationItem
                      className="navigation-item-sidebar-dark"
                      contentClassName="navigation-item-sidebar-dark-instance"
                      icon={<ViewBoards5 className="instance-node-5" color="#9FA2A7" />}
                      level="level-1"
                      stateProp="default"
                      text="System Audit"
                    />
                    <NavigationItem
                      className="navigation-item-sidebar-dark"
                      contentClassName="navigation-item-sidebar-dark-instance"
                      icon={<OfficeBuilding4 className="instance-node-5" color="#9FA2A7" />}
                      level="level-1"
                      stateProp="default"
                      text="System Setup"
                    />
                    <NavigationItem
                      className="navigation-item-sidebar-dark"
                      contentClassName="navigation-item-sidebar-dark-instance"
                      level="level-1"
                      stateProp="default"
                      text="Website Inbox"
                    />
                  </>
                )}
              </div>
              <div className="group">
                <NavigationItem
                  className="navigation-item-instance"
                  level="heading"
                  stateProp="default"
                  text1="RECRUITMENT SYSTEMS"
                />
                {["CMS", "VISA-module", "datasets", "default", "documents"].includes(state.type) && (
                  <>
                    <NavigationItem
                      className="navigation-item-sidebar-dark"
                      icon={
                        ["CMS", "default"].includes(state.type) ? (
                          <CoreServices9 className="instance-node-5" />
                        ) : undefined
                      }
                      level="level-1"
                      stateProp="default"
                      text="Manpower Request - MRs"
                    />
                    <NavigationItem
                      className="navigation-item-sidebar-dark"
                      contentClassName="navigation-item-sidebar-dark-instance"
                      level="level-1-dropdown"
                      onClick={() => {
                        dispatch("click_682");
                      }}
                      override={
                        ["CMS", "default"].includes(state.type) ? (
                          <UserGroup17 className="instance-node-5" color="#9FA2A7" />
                        ) : undefined
                      }
                      stateProp="default"
                      text="Applicants / Jobseekers"
                    />
                  </>
                )}

                {state.type === "endorsed-candidates" && (
                  <>
                    <NavigationItem
                      className="navigation-item-sidebar-dark"
                      icon={<CoreServices9 className="instance-node-5" />}
                      level="level-1"
                      stateProp="default"
                      text="Manpower Request - MRs"
                    />
                    <NavigationItem
                      className="navigation-item-sidebar-dark"
                      contentClassName="navigation-item-sidebar-dark-instance"
                      level="level-1-dropdown"
                      onClick={() => {
                        dispatch("click_887");
                      }}
                      override={<UserGroup17 className="instance-node-5" color="#9FA2A7" />}
                      stateProp="default"
                      text="Applicants / Jobseekers"
                    />
                    <NavigationItem
                      className="navigation-item-sidebar-dark"
                      contentClassName="navigation-item-sidebar-dark-instance"
                      icon={<Medical8 className="instance-node-5" color="#9FA2A7" />}
                      level="level-1"
                      stateProp="default"
                      text="Medical"
                    />
                    <NavigationItem
                      className="navigation-item-sidebar-dark"
                      contentClassName="navigation-item-sidebar-dark-instance"
                      icon={<FolderSupervised8 className="instance-node-5" color="#9FA2A7" />}
                      level="level-1"
                      stateProp="default"
                      text="Documents"
                    />
                  </>
                )}
              </div>
              <div className="group">
                {["CMS", "datasets", "default", "documents"].includes(state.type) && (
                  <>
                    <NavigationItem
                      className="navigation-item-sidebar-dark"
                      contentClassName="navigation-item-sidebar-dark-instance"
                      icon={
                        ["CMS", "default", "documents"].includes(state.type) ? (
                          <Medical8 className="instance-node-5" color="#9FA2A7" />
                        ) : undefined
                      }
                      level="level-1"
                      stateProp="default"
                      text="Medical"
                    />
                    <NavigationItem
                      className="navigation-item-sidebar-dark"
                      contentClassName="navigation-item-sidebar-dark-instance"
                      icon={
                        ["CMS", "default", "documents"].includes(state.type) ? (
                          <FolderSupervised8 className="instance-node-5" color="#9FA2A7" />
                        ) : undefined
                      }
                      level="level-1"
                      stateProp="default"
                      text="Documents"
                    />
                  </>
                )}

                {state.type === "VISA-module" && (
                  <>
                    <NavigationItem
                      className="navigation-item-sidebar-dark"
                      contentClassName="navigation-item-sidebar-dark-instance"
                      icon={navigationItemIcon}
                      level="level-1"
                      stateProp="default"
                      text="Medical"
                    />
                    <NavigationItem
                      className="navigation-item-sidebar-dark"
                      contentClassName="navigation-item-sidebar-dark-instance"
                      icon={navigationItemIcon1}
                      level="level-1"
                      stateProp="default"
                      text="Documents"
                    />
                  </>
                )}

                <NavigationItem
                  className="navigation-item-instance"
                  level="heading"
                  stateProp="default"
                  text1="MOBILIZATION"
                />
                {state.type === "VISA-module" && (
                  <>
                    <NavigationItem
                      className="navigation-item-sidebar-dark"
                      level="level-1-dropdown"
                      onClick={() => {
                        dispatch("click_707");
                      }}
                      override={navigationItemIcon2}
                      stateProp="default"
                      text="Endorsed Candidates"
                    />
                    <NavigationItem
                      className="navigation-item-sidebar-dark"
                      icon={navigationItemIcon3}
                      level="level-1"
                      stateProp="default"
                      text="Job Order Module"
                    />
                    <NavigationItem
                      className="navigation-item-instance"
                      level="level-1-dropdown"
                      onClick={() => {
                        dispatch("click_722");
                      }}
                      override={navigationItemIcon4}
                      stateProp="active"
                      text="VISA Module"
                    />
                    <NavigationItem
                      className={navigationItemLevelLevelStateClassName}
                      level="level-2"
                      stateProp={navigationItemStateProp}
                      text2="VISA Monitoring"
                    />
                    <NavigationItem
                      className="navigation-item-sidebar-dark"
                      level="level-2"
                      stateProp="default"
                      text2="VISA Assignment"
                    />
                    <NavigationItem
                      className="navigation-item-sidebar-dark"
                      level="level-2"
                      stateProp="default"
                      text2="Transmittal"
                    />
                    <NavigationItem
                      className="navigation-item-sidebar-dark"
                      level="level-2"
                      stateProp="default"
                      text2="Summary"
                    />
                  </>
                )}

                {["CMS", "datasets", "default", "documents", "endorsed-candidates"].includes(state.type) && (
                  <NavigationItem
                    className={`${
                      state.type === "endorsed-candidates" ? "navigation-item-instance" : "navigation-item-sidebar-dark"
                    }`}
                    level="level-1-dropdown"
                    onClick={() => {
                      dispatch("click_2025");
                    }}
                    override={
                      ["CMS", "default", "documents", "endorsed-candidates"].includes(state.type) ? (
                        <UserGroup17
                          className="instance-node-5"
                          color={
                            state.type === "endorsed-candidates"
                              ? "white"
                              : ["CMS", "default", "documents"].includes(state.type)
                              ? "#9FA2A7"
                              : undefined
                          }
                        />
                      ) : undefined
                    }
                    stateProp={state.type === "endorsed-candidates" ? "active" : "default"}
                    text="Endorsed Candidates"
                  />
                )}

                {state.type === "endorsed-candidates" && (
                  <>
                    <NavigationItem
                      className="navigation-item-instance"
                      level="level-2"
                      stateProp="default"
                      text2="Candidate Library"
                    />
                    <NavigationItem
                      className="navigation-item-instance"
                      level="level-2"
                      stateProp="default"
                      text2="For Mobilization"
                    />
                    <NavigationItem
                      className="navigation-item-instance"
                      level="level-2"
                      stateProp="default"
                      text2="Deployment"
                    />
                  </>
                )}

                {["CMS", "datasets", "default", "documents", "endorsed-candidates"].includes(state.type) && (
                  <>
                    <NavigationItem
                      className="navigation-item-sidebar-dark"
                      icon={
                        ["CMS", "default", "documents", "endorsed-candidates"].includes(state.type) ? (
                          <Briefcase6 className="instance-node-5" color="#9FA2A7" />
                        ) : undefined
                      }
                      level="level-1"
                      stateProp="default"
                      text="Job Order Module"
                    />
                    <NavigationItem
                      className="navigation-item-sidebar-dark"
                      level="level-1-dropdown"
                      onClick={() => {
                        dispatch("click_2040");
                      }}
                      override={
                        ["CMS", "default", "documents", "endorsed-candidates"].includes(state.type) ? (
                          <Identification1 className="instance-node-5" color="#9FA2A7" />
                        ) : undefined
                      }
                      stateProp="default"
                      text="VISA Module"
                    />
                  </>
                )}
              </div>
              <div className="group">
                <NavigationItem
                  className="navigation-item-instance"
                  level="heading"
                  stateProp="default"
                  text1="ACCOUNTS"
                />
                {["CMS", "datasets", "default", "endorsed-candidates"].includes(state.type) && (
                  <>
                    <NavigationItem
                      className="navigation-item-sidebar-dark"
                      icon={
                        ["default", "endorsed-candidates"].includes(state.type) ? (
                          <Users9 className="instance-node-5" color="#9FA2A7" />
                        ) : undefined
                      }
                      level="level-1"
                      stateProp="default"
                      text="Applicants T-Account"
                    />
                    <NavigationItem
                      className="navigation-item-sidebar-dark"
                      icon={
                        ["default", "endorsed-candidates"].includes(state.type) ? (
                          <CoreBills7 className="instance-node-5" />
                        ) : undefined
                      }
                      level="level-1"
                      stateProp="default"
                      text="Fee Details"
                    />
                  </>
                )}

                {["VISA-module", "documents"].includes(state.type) && (
                  <NavigationItem
                    className="navigation-item-sidebar-dark"
                    icon={navigationItemIcon5}
                    level="level-1"
                    stateProp="default"
                    text="Applicants T-Account"
                  />
                )}
              </div>
            </>
          )}

          {["VISA-module", "documents"].includes(state.type) && (
            <NavigationItem
              className="navigation-item-sidebar-dark"
              icon={navigationItemIcon6}
              level="level-1"
              stateProp="default"
              text="Fee Details"
            />
          )}

          {["CMS", "VISA-module", "datasets", "default", "documents", "endorsed-candidates"].includes(state.type) && (
            <div className="group">
              <NavigationItem
                className="navigation-item-instance"
                level="heading"
                stateProp="default"
                text1="REPORTS"
              />
              <NavigationItem
                className="navigation-item-sidebar-dark"
                icon={
                  ["default", "endorsed-candidates"].includes(state.type) ? (
                    <ClipboardList6 className="instance-node-5" color="#9FA2A7" />
                  ) : undefined
                }
                level="level-1"
                stateProp="default"
                text="Project Requirements"
              />
              <NavigationItem
                className="navigation-item-sidebar-dark"
                contentClassName="navigation-item-sidebar-dark-instance"
                level="level-1-dropdown"
                onClick={() => {
                  dispatch("click_785");
                }}
                override={
                  state.type === "endorsed-candidates" ? (
                    <ChartSquareBar5 className="instance-node-5" color="#9FA2A7" />
                  ) : undefined
                }
                stateProp="default"
                text="Deployment Projections"
              />
              <NavigationItem
                className="navigation-item-sidebar-dark"
                icon={
                  state.type === "endorsed-candidates" ? (
                    <Table9 className="instance-node-5" color="#9FA2A7" />
                  ) : undefined
                }
                level="level-1"
                stateProp="default"
                text="Reports"
              />
            </div>
          )}

          {["applicants-jobseekers", "deployment-projections"].includes(state.type) && (
            <>
              <div className="content-9">
                <div className="group">
                  <NavigationItem
                    className="navigation-item-sidebar-dark"
                    icon={
                      <CoreDashboard
                        className="core-dashboard-instance"
                        coreDashboard="https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/-core--dashboard-17@2x.png"
                      />
                    }
                    level="level-1"
                    stateProp="default"
                    text="Dashboards"
                  />
                </div>
                <div className="group">
                  <NavigationItem
                    className="navigation-item-sidebar-dark"
                    level="level-1-dropdown"
                    onClick={() => {
                      dispatch("click_1507");
                    }}
                    stateProp="default"
                    text="CMS"
                  />
                </div>
                <div className="group">
                  <NavigationItem
                    className="navigation-item-instance"
                    level="heading"
                    stateProp="default"
                    text1="CONTROL PANEL"
                  />
                  <NavigationItem
                    className="navigation-item-sidebar-dark"
                    contentClassName="navigation-item-sidebar-dark-instance"
                    level="level-1"
                    stateProp="default"
                    text="User Management"
                  />
                  <NavigationItem
                    className="navigation-item-sidebar-dark"
                    contentClassName="navigation-item-sidebar-dark-instance"
                    icon={
                      state.type === "deployment-projections" ? (
                        <AccountSettings6 className="instance-node-5" />
                      ) : undefined
                    }
                    level="level-1"
                    stateProp="default"
                    text="Role Management"
                  />
                  <NavigationItem
                    className="navigation-item-sidebar-dark"
                    level="level-1-dropdown"
                    onClick={() => {
                      dispatch("click_1532");
                    }}
                    override={
                      state.type === "deployment-projections" ? (
                        <ViewList8 className="instance-node-5" color="#9FA2A7" />
                      ) : undefined
                    }
                    stateProp="default"
                    text="Datasets"
                  />
                  <NavigationItem
                    className="navigation-item-sidebar-dark"
                    contentClassName="navigation-item-sidebar-dark-instance"
                    level="level-1-dropdown"
                    onClick={() => {
                      dispatch("click_1540");
                    }}
                    override={
                      state.type === "deployment-projections" ? (
                        <Folder4 className="instance-node-5" color="#9FA2A7" />
                      ) : undefined
                    }
                    stateProp="default"
                    text="Documents Setup"
                  />
                  <NavigationItem
                    className="navigation-item-sidebar-dark"
                    contentClassName="navigation-item-sidebar-dark-instance"
                    icon={<ViewBoards5 className="instance-node-5" color="#9FA2A7" />}
                    level="level-1"
                    stateProp="default"
                    text="System Audit"
                  />
                  <NavigationItem
                    className="navigation-item-sidebar-dark"
                    contentClassName="navigation-item-sidebar-dark-instance"
                    icon={<OfficeBuilding4 className="instance-node-5" color="#9FA2A7" />}
                    level="level-1"
                    stateProp="default"
                    text="System Setup"
                  />
                  <NavigationItem
                    className="navigation-item-sidebar-dark"
                    contentClassName="navigation-item-sidebar-dark-instance"
                    icon={<Mail9 className="instance-node-5" color="#9FA2A7" />}
                    level="level-1"
                    stateProp="default"
                    text="Website Inbox"
                  />
                </div>
                <div className="group">
                  <NavigationItem
                    className="navigation-item-instance"
                    level="heading"
                    stateProp="default"
                    text1="RECRUITMENT SYSTEMS"
                  />
                  <NavigationItem
                    className="navigation-item-sidebar-dark"
                    icon={<CoreServices9 className="instance-node-5" />}
                    level="level-1"
                    stateProp="default"
                    text="Manpower Request - MRs"
                  />
                  <NavigationItem
                    className={`${
                      state.type === "deployment-projections"
                        ? "navigation-item-sidebar-dark"
                        : "navigation-item-instance"
                    }`}
                    contentClassName="navigation-item-sidebar-dark-instance"
                    level="level-1-dropdown"
                    onClick={() => {
                      dispatch("click_1793");
                    }}
                    override={
                      <UserGroup17
                        className="instance-node-5"
                        color={
                          state.type === "applicants-jobseekers"
                            ? "white"
                            : state.type === "deployment-projections"
                            ? "#9FA2A7"
                            : undefined
                        }
                      />
                    }
                    stateProp={state.type === "deployment-projections" ? "default" : "active"}
                    text="Applicants / Jobseekers"
                  />
                  {state.type === "applicants-jobseekers" && (
                    <>
                      <NavigationItem
                        activeLineClassName="navigation-item-5"
                        className="navigation-item-sidebar-dark"
                        level="level-2"
                        stateProp="default"
                        text2="Applicant Library"
                      />
                      <NavigationItem
                        activeLineClassName="navigation-item-5"
                        className="navigation-item-sidebar-dark"
                        level="level-2"
                        stateProp="default"
                        text2="Screening"
                      />
                      <NavigationItem
                        activeLineClassName="navigation-item-5"
                        className="navigation-item-sidebar-dark"
                        level="level-2"
                        stateProp="default"
                        text2="Line Up"
                      />
                      <NavigationItem
                        activeLineClassName="navigation-item-5"
                        className="navigation-item-sidebar-dark"
                        level="level-2"
                        stateProp="default"
                        text2="Selection"
                      />
                      <NavigationItem
                        activeLineClassName="navigation-item-5"
                        className="navigation-item-sidebar-dark"
                        level="level-2"
                        stateProp="default"
                        text2="Acceptance"
                      />
                    </>
                  )}

                  <NavigationItem
                    className="navigation-item-sidebar-dark"
                    contentClassName="navigation-item-sidebar-dark-instance"
                    icon={
                      state.type === "deployment-projections" ? (
                        <Medical8 className="instance-node-5" color="#9FA2A7" />
                      ) : (
                        <FolderSupervised8 className="instance-node-5" color="#9FA2A7" />
                      )
                    }
                    level="level-1"
                    stateProp="default"
                    text={state.type === "deployment-projections" ? "Medical" : "Documents"}
                  />
                  <NavigationItem
                    className="navigation-item-sidebar-dark"
                    contentClassName="navigation-item-sidebar-dark-instance"
                    icon={
                      state.type === "deployment-projections" ? (
                        <FolderSupervised8 className="instance-node-5" color="#9FA2A7" />
                      ) : (
                        <Medical8 className="instance-node-5" color="#9FA2A7" />
                      )
                    }
                    level="level-1"
                    stateProp="default"
                    text={state.type === "deployment-projections" ? "Documents" : "Medical"}
                  />
                </div>
                <div className="group">
                  <NavigationItem
                    className="navigation-item-instance"
                    level="heading"
                    stateProp="default"
                    text1="MOBILIZATION"
                  />
                  <NavigationItem
                    className="navigation-item-sidebar-dark"
                    level="level-1-dropdown"
                    onClick={() => {
                      dispatch("click_1639");
                    }}
                    override={<UserGroup17 className="instance-node-5" color="#9FA2A7" />}
                    stateProp="default"
                    text="Endorsed Candidates"
                  />
                  <NavigationItem
                    className="navigation-item-sidebar-dark"
                    icon={<Briefcase6 className="instance-node-5" color="#9FA2A7" />}
                    level="level-1"
                    stateProp="default"
                    text="Job Order Module"
                  />
                  <NavigationItem
                    className="navigation-item-sidebar-dark"
                    level="level-1-dropdown"
                    onClick={() => {
                      dispatch("click_1654");
                    }}
                    override={<Identification1 className="instance-node-5" color="#9FA2A7" />}
                    stateProp="default"
                    text="VISA Module"
                  />
                </div>
                <div className="group">
                  <NavigationItem
                    className="navigation-item-instance"
                    level="heading"
                    stateProp="default"
                    text1="ACCOUNTS"
                  />
                  <NavigationItem
                    className={`${
                      state.type === "deployment-projections" ? "navigation-item-4" : "navigation-item-sidebar-dark"
                    }`}
                    icon={<Users9 className="instance-node-5" color="#9FA2A7" />}
                    level="level-1"
                    stateProp="default"
                    text="Applicants T-Account"
                  />
                  <NavigationItem
                    className="navigation-item-sidebar-dark"
                    icon={<CoreBills7 className="instance-node-5" />}
                    level="level-1"
                    stateProp="default"
                    text="Fee Details"
                  />
                </div>
                <div className="group">
                  <NavigationItem
                    className="navigation-item-instance"
                    level="heading"
                    stateProp="default"
                    text1="REPORTS"
                  />
                  <NavigationItem
                    className="navigation-item-sidebar-dark"
                    icon={<ClipboardList6 className="instance-node-5" color="#9FA2A7" />}
                    level="level-1"
                    stateProp="default"
                    text="Project Requirements"
                  />
                  <NavigationItem
                    className={`${
                      state.type === "deployment-projections"
                        ? "navigation-item-instance"
                        : "navigation-item-sidebar-dark"
                    }`}
                    contentClassName="navigation-item-sidebar-dark-instance"
                    level="level-1-dropdown"
                    onClick={() => {
                      dispatch("click_1868");
                    }}
                    override={
                      <ChartSquareBar5
                        className="instance-node-5"
                        color={
                          state.type === "applicants-jobseekers"
                            ? "#9FA2A7"
                            : state.type === "deployment-projections"
                            ? "white"
                            : undefined
                        }
                      />
                    }
                    stateProp={state.type === "deployment-projections" ? "active" : "default"}
                    text="Deployment Projections"
                  />
                  {state.type === "deployment-projections" && (
                    <>
                      <NavigationItem
                        activeLineClassName="navigation-item-5"
                        className="navigation-item-sidebar-dark"
                        contentClassNameOverride="navigation-item-sidebar-dark-instance"
                        level="level-2"
                        stateProp="default"
                        text2="Per Month"
                      />
                      <NavigationItem
                        activeLineClassName="navigation-item-5"
                        className="navigation-item-sidebar-dark"
                        contentClassNameOverride="navigation-item-sidebar-dark-instance"
                        level="level-2"
                        stateProp="default"
                        text2="Per Month w/ Breakdown"
                      />
                    </>
                  )}

                  <NavigationItem
                    className="navigation-item-sidebar-dark"
                    icon={<Table9 className="instance-node-5" color="#9FA2A7" />}
                    level="level-1"
                    stateProp="default"
                    text="Reports"
                  />
                </div>
              </div>
              <div className="scroll-bar" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.type === "default") {
    switch (action) {
      case "click":
        return {
          type: "CMS",
        };

      case "click_458":
        return {
          type: "datasets",
        };

      case "click_466":
        return {
          type: "documents",
        };

      case "click_505":
        return {
          type: "applicants-jobseekers",
        };

      case "click_530":
        return {
          type: "endorsed-candidates",
        };

      case "click_545":
        return {
          type: "VISA-module",
        };

      case "click_580":
        return {
          type: "deployment-projections",
        };
    }
  }

  if (state.type === "VISA-module") {
    switch (action) {
      case "click_610":
        return {
          type: "CMS",
        };

      case "click_635":
        return {
          type: "datasets",
        };

      case "click_643":
        return {
          type: "documents",
        };

      case "click_682":
        return {
          type: "applicants-jobseekers",
        };

      case "click_707":
        return {
          type: "endorsed-candidates",
        };

      case "click_722":
        return {
          type: "default",
        };

      case "click_785":
        return {
          type: "deployment-projections",
        };
    }
  }

  if (state.type === "endorsed-candidates") {
    switch (action) {
      case "click":
        return {
          type: "CMS",
        };

      case "click_458":
        return {
          type: "datasets",
        };

      case "click_466":
        return {
          type: "documents",
        };

      case "click_887":
        return {
          type: "applicants-jobseekers",
        };

      case "click_912":
        return {
          type: "default",
        };

      case "click_948":
        return {
          type: "VISA-module",
        };

      case "click_580":
        return {
          type: "deployment-projections",
        };
    }
  }

  if (state.type === "CMS") {
    switch (action) {
      case "click_1013":
        return {
          type: "default",
        };

      case "click_458":
        return {
          type: "datasets",
        };

      case "click_466":
        return {
          type: "documents",
        };

      case "click_505":
        return {
          type: "applicants-jobseekers",
        };

      case "click_530":
        return {
          type: "endorsed-candidates",
        };

      case "click_545":
        return {
          type: "VISA-module",
        };

      case "click_580":
        return {
          type: "deployment-projections",
        };
    }
  }

  if (state.type === "datasets") {
    switch (action) {
      case "click":
        return {
          type: "CMS",
        };

      case "click_1250":
        return {
          type: "default",
        };

      case "click_1363":
        return {
          type: "documents",
        };

      case "click_505":
        return {
          type: "applicants-jobseekers",
        };

      case "click_530":
        return {
          type: "endorsed-candidates",
        };

      case "click_545":
        return {
          type: "VISA-module",
        };

      case "click_580":
        return {
          type: "deployment-projections",
        };
    }
  }

  if (state.type === "applicants-jobseekers") {
    switch (action) {
      case "click_1507":
        return {
          type: "CMS",
        };

      case "click_1532":
        return {
          type: "datasets",
        };

      case "click_1540":
        return {
          type: "documents",
        };

      case "click_1579":
        return {
          type: "default",
        };

      case "click_1639":
        return {
          type: "endorsed-candidates",
        };

      case "click_1654":
        return {
          type: "VISA-module",
        };

      case "click_1689":
        return {
          type: "deployment-projections",
        };
    }
  }

  if (state.type === "deployment-projections") {
    switch (action) {
      case "click_1507":
        return {
          type: "CMS",
        };

      case "click_1532":
        return {
          type: "datasets",
        };

      case "click_1540":
        return {
          type: "documents",
        };

      case "click_1793":
        return {
          type: "applicants-jobseekers",
        };

      case "click_1639":
        return {
          type: "endorsed-candidates",
        };

      case "click_1654":
        return {
          type: "VISA-module",
        };

      case "click_1868":
        return {
          type: "default",
        };
    }
  }

  if (state.type === "documents") {
    switch (action) {
      case "click_610":
        return {
          type: "CMS",
        };

      case "click_1939":
        return {
          type: "datasets",
        };

      case "click_1947":
        return {
          type: "default",
        };

      case "click_682":
        return {
          type: "applicants-jobseekers",
        };

      case "click_2025":
        return {
          type: "endorsed-candidates",
        };

      case "click_2040":
        return {
          type: "VISA-module",
        };

      case "click_785":
        return {
          type: "deployment-projections",
        };
    }
  }

  return state;
}

Sidebar.propTypes = {
  type: PropTypes.oneOf([
    "endorsed-candidates",
    "deployment-projections",
    "default",
    "VISA-module",
    "documents",
    "CMS",
    "applicants-jobseekers",
    "datasets",
  ]),
  navigationItemStateProp: PropTypes.string,
};
