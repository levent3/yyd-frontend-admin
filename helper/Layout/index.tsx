import { Dispatch, ReactNode, SetStateAction, createContext } from "react";

interface layoutProvider {
  searchIcon: boolean;
  bookMarkClass: boolean;
  setBookMarkClass: Dispatch<SetStateAction<boolean>>;
  setSearchIcon: Dispatch<SetStateAction<boolean>>;
  setPinedMenu: Dispatch<SetStateAction<string[]>>;
  pinedMenu: string[];
  sideBarToggle:boolean  
  setSideBarToggle: Dispatch<SetStateAction<boolean>>;
  searchableMenu:searchableMenuType[],
  setSearchableMenu:Function,
  bookmarkList:searchableMenuType[],
  setBookmarkList:Function
}
export interface searchableMenuType {
  icon: ReactNode;
  path: string;
  id: number;
  bookmarked?: boolean;
  title: string;
}
const layoutContext = createContext<layoutProvider>({
  searchableMenu:[],setSearchableMenu:() => {},
  bookmarkList:[], setBookmarkList:() => {},
  searchIcon: false,
  sideBarToggle:false,
  setSideBarToggle:() => {},
  pinedMenu: [],
  setPinedMenu: () => {},
  setSearchIcon: () => {},
  bookMarkClass: false,
  setBookMarkClass: () => {},
});

export default layoutContext;
