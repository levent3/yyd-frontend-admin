import { ReactNode } from "react";

export type tableHeadType = {
    class?: string;
    name: string;
}

export interface commonCardHeadingPropsType {
    bigHeadingClassName?: string;
    Heading?:string
    smallHeading?:string
    span?:string
    headingClassName?:string
    span2?:string
}

export  interface headerWithIconPropsTypes {
    setIsOpen: (parameter: boolean) => void;
    isOpen: boolean;
    Heading: string;
  }

  export  interface socialMediaIconsPropsTypes {
    listClassName?: string;
  }

  export interface commonContextType {
    children: ReactNode;
  }