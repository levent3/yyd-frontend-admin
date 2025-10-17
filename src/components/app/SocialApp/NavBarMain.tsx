import { Nav, NavLink, NavItem } from "reactstrap";
import { propsType } from "./UserProfile";
import { useState, Fragment } from "react";
import {   Href } from "utils/Constant";
import { navBarData } from "Data/SocialApp";

const NavBarMain = ({ callback }: propsType) => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <Nav tabs className="border-tab tabs-scoial">
      {navBarData.map((data, index) => (
        <Fragment key={index}>
          {data.userProfile ? (
          <NavItem>
            <div className="user-designation" />
            <div className="title">
              <a href={Href}>ElANA</a>
            </div>
            <div className="desc mt-2">general manager</div>
          </NavItem>
          ) : (
          <NavItem className="nav">
            <NavLink
              className={activeTab === data.id ? "active" : ""}
              onClick={() => {
                setActiveTab(data.id);
                callback(data.id);
              }}
            >
              {data.tittle}
            </NavLink>
          </NavItem>
          )}
        </Fragment>
      ))}
    </Nav>
  );
};

export default NavBarMain;
