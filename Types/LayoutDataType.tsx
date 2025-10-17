import { searchableMenuType } from 'helper/Layout';
import { ChangeEvent, ReactNode } from 'react';
import * as Icon from 'react-feather';

type sidebarChildrenType = {
    path?: string;
    title: string;
    type: string;
    children?: subChildrenType[]
    bookmark?:boolean
    pathSlice?:string
    moduleKey?: string;
}


export type sidebarItemType = {
    id?:number
    title?: string | undefined;
    icon?: string;
    type: string;
    badge?: string;
    badge2?: boolean;
    badgetxt?: string;
    pathSlice?:string
    active?: boolean;
    path?: string;
    bookmark?: boolean;
    children?: sidebarChildrenType[]
    moduleKey?: string;
}
export type sidebarItemTypes = {
  item:sidebarItemType
}

export type subChildrenType = {
    title: string;
    type: string;
    path: string;
    bookmark?:boolean
    moduleKey?: string;
}

export interface sidebarMenuType {
    title?: string;
    menucontent?: string;
    Items: sidebarItemType[]
}

export interface languageDatatype {
    name: string;
    shortName: string;
    iconClass: string;
    tag?: string;
}

export interface profileType {
    icon: keyof typeof Icon;
    path: string;
    text: string;
}

export type customizerDataType = {
    path: string;
    icon: string;
    name: string;
}

export type CheckLayoutDataType = {
    class?: string;
    image: string;
    title: string;
    attr: string;
}

export interface contextChildrenType {
    children: ReactNode
}


export  interface bookMarkContainPropsType {
    handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
    searchedItems:searchableMenuType[]
    handleBookmarkChange:(item:searchableMenuType)=>void
    searchWord:string
  }

  export  interface searchBarContainPropsType {
    handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
    suggestion: searchableMenuType[];
    searchValue: string;
    setSearchValue: Function;
    fieldTouch: boolean;
    setFieldTouch: Function;
  }