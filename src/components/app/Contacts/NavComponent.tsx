import { Nav, NavItem } from "reactstrap";
import { Href, Personal, Views } from "utils/Constant";
import CreateContact from "./CreateContact";
import { useState } from "react";
import CategoryCreate from "./CategoryCreate";
import { sideBarData } from "Data/Contact";
import { contactNavPropsType } from "Types/ContactType";

const NavComponent = ({ callbackActive }: contactNavPropsType) => {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <Nav className="main-menu contact-options" role="tablist">
      <NavItem>
        <CreateContact />
      </NavItem>
      <NavItem>
        <span className="main-title"> {Views}</span>
      </NavItem>
      <NavItem>
        <a href={Href} className={activeTab === "1" ? "active" : ""} onClick={() => { setActiveTab("1"); callbackActive("1");}}>
          <span className="title"> {Personal}</span>
        </a>
      </NavItem>
      <NavItem>
        <CategoryCreate />
      </NavItem>
      {sideBarData.map((data, index) => (
        <NavItem key={index}>
          <a
            href={Href}
            className={activeTab === data.value ? "active" : ""}
            onClick={() => {
              setActiveTab(data.value);
              callbackActive(data.value);
            }}
          >
            <span className="title">{data.tittle}</span>
          </a>
        </NavItem>
      ))}
    </Nav>
  );
};

export default NavComponent;
