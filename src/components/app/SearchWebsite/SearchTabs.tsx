import { navData } from "Data/SearchTabs";
import { useState } from "react";
import { Nav, NavLink, NavItem } from "reactstrap";
import { All, Images, Maps, Settings, Videos } from "utils/Constant";
import {searchTabsPropsType} from "Types/SearchWebSite"
const SearchTabs = ({ callbackActive,activeTabValue }: searchTabsPropsType) => {
  const [activeTab, setActiveTab] = useState(activeTabValue);
  const handleTab = (id: number | undefined) => {
    if (id !== undefined) {
      setActiveTab(id);
      callbackActive(id);
    }
  };
  return (
    <div className="text-center">
    <Nav tabs className="search-list nav-tabs ">
      {navData.map((data, index) => (
        <NavItem key={index}>
          <NavLink className={activeTab === index + 1 ? "active" : ""} onClick={() => handleTab(data.id)}>
            {data.icon}
            {data.tittle}
          </NavLink>
          <div className="material-border"></div>
        </NavItem>
      ))}
    </Nav>
    </div>
  );
};
export default SearchTabs;
