import React from "react";
import { Avatar } from "../../components/Avatar";
import { Badge } from "../../components/Badge";
import { CoreDashboard } from "../../components/CoreDashboard";
import { Footer } from "../../components/Footer";
import { InputTextWithIcon } from "../../components/InputTextWithIcon";
import { ListItemLguList } from "../../components/ListItemLguList";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { SolidButton } from "../../components/SolidButton";
import { TabItemsLineTab } from "../../components/TabItemsLineTab";
import { TopNavigationBar } from "../../components/TopNavigationBar";
import { Briefcase6 } from "../../icons/Briefcase6";
import { ChartSquareBar5 } from "../../icons/ChartSquareBar5";
import { ClipboardList6 } from "../../icons/ClipboardList6";
import { CoreBills7 } from "../../icons/CoreBills7";
import { CoreServices9 } from "../../icons/CoreServices9";
import { Folder4 } from "../../icons/Folder4";
import { FolderSupervised8 } from "../../icons/FolderSupervised8";
import { Identification1 } from "../../icons/Identification1";
import { Mail9 } from "../../icons/Mail9";
import { Medical8 } from "../../icons/Medical8";
import { OfficeBuilding4 } from "../../icons/OfficeBuilding4";
import { PencilAlt } from "../../icons/PencilAlt";
import { Plus1 } from "../../icons/Plus1";
import { Search } from "../../icons/Search";
import { Table9 } from "../../icons/Table9";
import { UserGroup17 } from "../../icons/UserGroup17";
import { Users9 } from "../../icons/Users9";
import { ViewBoards5 } from "../../icons/ViewBoards5";
import "./style.css";

export const VisaMonitoringJob = () => {
  return (
    <div className="VISA-monitoring-job">
      <Footer className="footer-instance" />
      <div className="container-filled">
        <header className="header">
          <div className="description">
            <Avatar
              className="avatar-3"
              corner="circular"
              overlapGroupClassName="avatar-4"
              size="one-hundred-px"
              type="image"
              withIndicator={false}
            />
            <div className="title">
              <div className="text-wrapper-14">1302036531</div>
              <div className="subinfo">
                <Badge
                  className="badge-3"
                  color
                  corner="rounded"
                  dismissible={false}
                  divClassName="design-component-instance-node-2"
                  icon={<Briefcase6 className="icon-instance-node-2" color="#BEAC6F" />}
                  leadingItem="icon"
                  text="Cook"
                  type="ghost"
                />
                <div className="text-wrapper-15">Baratie Restaurant</div>
              </div>
            </div>
          </div>
          <div className="buttons">
            <SolidButton
              className="design-component-instance-node-3"
              icon={<PencilAlt className="icon-instance-node-2" />}
              leadingIcon
              size="default"
              stateProp="default"
              text="Edit VISA Details"
              trailingIcon={false}
              type="default"
            />
          </div>
        </header>
        <div className="tab-menu-line-tab">
          <TabItemsLineTab
            badge={false}
            className="design-component-instance-node-3"
            leadingIcon={false}
            lineClassName="tab-items-line-tab-multiverse"
            stateProp="default"
            text="Details"
            trailingIcon={false}
          />
          <TabItemsLineTab
            badge={false}
            className="design-component-instance-node-3"
            divClassName="design-component-instance-node-2"
            leadingIcon={false}
            lineClassName="tab-items-line-tab-multiverse"
            stateProp="active"
            text="Job Opening"
            trailingIcon={false}
          />
          <TabItemsLineTab
            badge
            badgeText="04"
            className="design-component-instance-node-3"
            leadingIcon={false}
            stateProp="default"
            text="Manpower"
            trailingIcon={false}
          />
          <TabItemsLineTab
            badge={false}
            className="design-component-instance-node-3"
            leadingIcon={false}
            lineClassName="tab-items-line-tab-multiverse"
            stateProp="default"
            text="Activity Log"
            trailingIcon={false}
          />
        </div>
        <div className="scroll">
          <div className="contents">
            <div className="table">
              <div className="row">
                <div className="text-wrapper-16">Position</div>
                <div className="text-wrapper-17">Cook</div>
              </div>
              <div className="row-2">
                <div className="text-wrapper-18">Status</div>
                <Badge
                  className="badge-4"
                  color
                  corner="rounded"
                  dismissible={false}
                  leadingItem="none"
                  text="ACTIVE"
                  type="default"
                />
              </div>
              <div className="row">
                <div className="text-wrapper-16">Expiry Date</div>
                <div className="text-wrapper-19">10/24/2023</div>
              </div>
              <div className="row-2">
                <div className="text-wrapper-16">Required</div>
                <div className="text-wrapper-17">10</div>
              </div>
              <div className="row">
                <div className="text-wrapper-16">Target</div>
                <div className="text-wrapper-17">10</div>
              </div>
              <div className="row-2">
                <div className="text-wrapper-16">Currency</div>
                <div className="text-wrapper-17">SR</div>
              </div>
              <div className="row">
                <div className="text-wrapper-16">Salary</div>
                <div className="text-wrapper-17">25000.00</div>
              </div>
              <div className="row-2">
                <div className="text-wrapper-16">Food</div>
                <div className="text-wrapper-17">FF</div>
              </div>
              <div className="row">
                <div className="text-wrapper-16">Food Allowance</div>
                <div className="text-wrapper-17">5000.00</div>
              </div>
              <div className="row-2">
                <div className="text-wrapper-16">Gender</div>
                <div className="text-wrapper-17">Any</div>
              </div>
              <div className="row">
                <div className="text-wrapper-16">Religion</div>
                <div className="text-wrapper-17">Any</div>
              </div>
              <div className="row-2">
                <div className="text-wrapper-16">Location</div>
                <p className="text-wrapper-17">123 Faraway Street, Al Olaya, Riyadh, Saudi Arabia</p>
              </div>
            </div>
            <div className="content-10">
              <div className="text-wrapper-20">Job Description</div>
              <div className="content-container">
                <div className="asdasd-wrapper">
                  <p className="asdasd">
                    We are seeking a skilled and passionate Cook to join our vibrant Baratie Restaurant team. As a Cook
                    at Baratie Restaurant, you will play a crucial role in delivering exceptional dining experiences to
                    our valued guests.
                  </p>
                </div>
                <div className="scrollbar-wrapper">
                  <div className="scrollbar" />
                </div>
              </div>
            </div>
            <div className="content-10">
              <div className="text-wrapper-20">Job Requirements</div>
              <div className="content-container">
                <div className="asdasd-wrapper">
                  <p className="asdasd-2">
                    Proven experience as a Cook in a reputable restaurant or culinary establishment.
                    <br />
                    Proficient knowledge of various cooking techniques and a diverse range of cuisines.
                    <br />
                    Strong attention to detail, ensuring the presentation and taste of dishes consistently meet our high
                    standards.
                    <br />
                    Ability to thrive in a fast-paced environment, managing multiple tasks while maintaining composure
                    under pressure.
                    <br />
                    Excellent communication skills and the ability to work collaboratively with the kitchen team.
                    <br />A passion for culinary arts and a desire to create memorable dining experiences for our
                    guests.
                    <br />
                    Food handling and safety certifications (e.g., ServSafe) preferred but not required.
                    <br />
                    Flexibility to work evenings, weekends, and holidays as needed.
                  </p>
                </div>
                <div className="scrollbar-wrapper">
                  <div className="scrollbar" />
                </div>
              </div>
            </div>
          </div>
          <div className="scrollbar-wrapper">
            <div className="scrollbar-2" />
          </div>
        </div>
      </div>
      <div className="container-filled-2">
        <div className="text-wrapper-14">VISA Monitoring</div>
        <div className="field">
          <InputTextWithIcon
            className="input-text-with-icon-instance"
            helpText={false}
            icon={<Search className="icon-instance-node-3" color="#B5B5B7" />}
            label={false}
            leadingIcon
            optional={false}
            required={false}
            state="default"
            text="Search..."
            trailingIcon={false}
          />
        </div>
        <SolidButton
          className="solid-button-2"
          contentClassName="solid-button-instance"
          leadingIcon
          override={<Plus1 className="icon-instance-node-2" color="white" />}
          size="default"
          stateProp="default"
          text="Add VISA"
          trailingIcon={false}
          type="primary"
        />
        <div className="text-wrapper-21">List (10 entries)</div>
        <div className="list-menu-LGU-list">
          <ListItemLguList
            badge
            badgeColorNoTypeClassName="list-item-LGU-list-2"
            badgeText="VALID"
            className="list-item-LGU-list-instance"
            divClassName="design-component-instance-node-2"
            stateProp="active"
            text="1302036531"
            text1="Baratie Restaurant - Cook"
            type="EGMP"
          />
          <ListItemLguList
            badge
            badgeColorNoTypeClassName="list-item-LGU-list-2"
            badgeText="VALID"
            className="list-item-LGU-list-instance"
            stateProp="default"
            text="1302036938"
            text1="Bink’s Restaurant - Cook"
            type="EGMP"
          />
          <ListItemLguList
            badge
            badgeColorNoTypeClassName="list-item-LGU-list-3"
            badgeText="EXPIRED"
            className="list-item-LGU-list-instance"
            stateProp="default"
            text="1302036616"
            text1="Bean Machine - Barista"
            type="EGMP"
          />
          <ListItemLguList
            badge
            badgeColorNoTypeClassName="list-item-LGU-list-2"
            badgeText="VALID"
            className="list-item-LGU-list-instance"
            stateProp="default"
            text="1302036448"
            text1="Devin Innovations - Accountant"
            type="EGMP"
          />
          <ListItemLguList
            badge
            badgeColorNoTypeClassName="list-item-LGU-list-3"
            badgeText="EXPIRED"
            className="list-item-LGU-list-instance"
            stateProp="default"
            text="1302036418"
            text1="Merryweather Security - IT Support"
            type="EGMP"
          />
          <ListItemLguList
            badge
            badgeColorNoTypeClassName="list-item-LGU-list-2"
            badgeText="VALID"
            className="list-item-LGU-list-instance"
            stateProp="default"
            text="1302036978"
            text1="J.J. Engineering Inc. - Electrician"
            type="EGMP"
          />
          <ListItemLguList
            badge
            badgeColorNoTypeClassName="list-item-LGU-list-2"
            badgeText="VALID"
            className="list-item-LGU-list-instance"
            stateProp="default"
            text="1302036509"
            text1="Rainbow Bay Cleaning Services - Cleaner"
            type="EGMP"
          />
          <ListItemLguList
            badge
            badgeColorNoTypeClassName="list-item-LGU-list-3"
            badgeText="EXPIRED"
            className="list-item-LGU-list-instance"
            stateProp="default"
            text="1302036709"
            text1="Pleasantview Resources - Teller"
            type="EGMP"
          />
          <ListItemLguList
            badge
            badgeColorNoTypeClassName="list-item-LGU-list-2"
            badgeText="VALID"
            className="list-item-LGU-list-instance"
            stateProp="default"
            text="1302036969"
            text1="New Crest Carpentry Co. - Carpenter"
            type="EGMP"
          />
          <ListItemLguList
            badge
            badgeColorNoTypeClassName="list-item-LGU-list-2"
            badgeText="VALID"
            className="list-item-LGU-list-instance"
            stateProp="default"
            text="1302036657"
            text1="Burger Shot - Cook"
            type="EGMP"
          />
        </div>
        <Pagination
          chevronDoubleLeft1Color="#BEAC6F"
          chevronDoubleRightColor="#BEAC6F"
          className="design-component-instance-node-3"
          divClassName="design-component-instance-node-2"
          divClassName1="design-component-instance-node-2"
          divClassNameOverride="design-component-instance-node-2"
        />
      </div>
      <TopNavigationBar
        breadcrumbItemActive
        breadcrumbItemDivClassName="design-component-instance-node-2"
        breadcrumbItemIcon={<Identification1 className="icon-instance-node-3" color="#606774" />}
        breadcrumbItemText="VISA Module"
        breadcrumbItemText1="VISA Monitoring"
        className="design-component-instance-node-4"
        notificationBellClassName="top-navigation-bar-instance"
        visible={false}
        visible1={false}
      />
      <Sidebar
        className="design-component-instance-node-4"
        navigationItemIcon={<Medical8 className="icon-instance-node-3" color="#9FA2A7" />}
        navigationItemIcon1={<FolderSupervised8 className="icon-instance-node-3" color="#9FA2A7" />}
        navigationItemIcon2={<UserGroup17 className="icon-instance-node-3" color="#9FA2A7" />}
        navigationItemIcon3={<Briefcase6 className="icon-instance-node-3" color="#9FA2A7" />}
        navigationItemIcon4={<Identification1 className="icon-instance-node-3" color="white" />}
        navigationItemIcon5={<Users9 className="icon-instance-node-3" color="#9FA2A7" />}
        navigationItemIcon6={<CoreBills7 className="icon-instance-node-3" />}
        navigationItemLevelLevelStateClassName="design-component-instance-node-3"
        navigationItemStateProp="active"
        override={
          <CoreDashboard
            className="core-dashboard-2"
            coreDashboard="https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/-core--dashboard-17@2x.png"
          />
        }
        override1={<Folder4 className="icon-instance-node-3" color="#9FA2A7" />}
        override2={<ViewBoards5 className="icon-instance-node-3" color="#9FA2A7" />}
        override3={<OfficeBuilding4 className="icon-instance-node-3" color="#9FA2A7" />}
        override4={<Mail9 className="icon-instance-node-3" color="#9FA2A7" />}
        override5={<CoreServices9 className="icon-instance-node-3" />}
        override6={<UserGroup17 className="icon-instance-node-3" color="#9FA2A7" />}
        override7={<ClipboardList6 className="icon-instance-node-3" color="#9FA2A7" />}
        override8={<ChartSquareBar5 className="icon-instance-node-3" color="#9FA2A7" />}
        override9={<Table9 className="icon-instance-node-3" color="#9FA2A7" />}
        type="VISA-module"
      />
    </div>
  );
};
