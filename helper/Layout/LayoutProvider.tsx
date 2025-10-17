import React, { useState } from "react";
import layoutContext, { searchableMenuType } from "./index";
import { contextChildrenType } from "Types/LayoutDataType";

const LayoutProvider = ({children}:contextChildrenType) => {
  const [searchIcon, setSearchIcon] = useState(false);
  const [bookMarkClass, setBookMarkClass] = useState(false);
  const [pinedMenu, setPinedMenu] = useState<string[]>([""]);
  const [sideBarToggle, setSideBarToggle] = useState(false);
  const [searchableMenu,setSearchableMenu]=useState([])
 const [bookmarkList, setBookmarkList] = useState<searchableMenuType[]>([]);


  return (
    <layoutContext.Provider value={{bookmarkList, setBookmarkList, searchIcon, setSearchIcon,bookMarkClass, setBookMarkClass,pinedMenu, setPinedMenu,sideBarToggle, setSideBarToggle,searchableMenu,setSearchableMenu }}>
      {children}
    </layoutContext.Provider>
  );
};

export default LayoutProvider;
