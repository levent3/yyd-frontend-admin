import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { IOTdeveloper, UXdesigner, Webdesigner } from "utils/Constant";

type propsType = {
  basicTab: string;
  setBasicTab: (data: string) => void;
};

const JustifyNav = ({ basicTab, setBasicTab }: propsType) => {
  return (
    <Nav tabs className="nav-pills nav-warning border-0 justify-tab-wrapper">
      <NavItem>
        <NavLink
          href="#"
          className={`${basicTab === "1" ? "active" : ""}`}
          onClick={() => setBasicTab("1")}
        >
          {Webdesigner}
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          href="#"
          className={`${basicTab === "2" ? "active" : ""}`}
          onClick={() => setBasicTab("2")}
        >
          {UXdesigner}
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          href="#"
          className={`${basicTab === "3" ? "active" : ""}`}
          onClick={() => setBasicTab("3")}
        >
          {IOTdeveloper}
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default JustifyNav;
