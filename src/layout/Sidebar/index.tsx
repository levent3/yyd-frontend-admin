'use client'
import React, { useContext } from "react";
import SidebarLogo from "./SidebarLogo";
import SidebarMenu from "./SidebarMenu";
import ConfigDB from "config/ThemeConfig";
import CustomizerContext from "helper/Customizer";
import layoutContext from "helper/Layout";

const Sidebar = () => {
  const { sidebarIconType } = useContext(CustomizerContext);
  const { sideBarToggle } = useContext(layoutContext);

  const IconType = sidebarIconType || ConfigDB.data.settings.sidebar.iconType;
  return (
    <div
      className={`sidebar-wrapper ${sideBarToggle ? "close_icon" : ""}`}
      sidebar-layout={IconType}
    >
      <div>
        <SidebarLogo />
        <SidebarMenu />
      </div>
    </div>
  );
};

export default Sidebar;
