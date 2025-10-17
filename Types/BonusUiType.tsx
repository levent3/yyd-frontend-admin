import * as Icon from 'react-feather';

export type BadgeScrolltype = {
    text: string;
    class: string;
    badge: string;
}

export type ProfileListType = {
    img: string;
    text: string;
}

export type TourDataType = {
    link: string
    icon: string
}

export type ProfileLikeType = {
    class: string;
    icon: string;
    text: string | JSX.Element;
}

export type RibbonType = {
    classMain: string;
    ribbonClass: string;
    ribbonText: string | JSX.Element;
    subText: string | JSX.Element;
}

export type FlushDatatype = {
    id: string;
    head: string;
    text: string | JSX.Element | JSX.Element[]
}

export type IconDataType = {
    id: string
    icon: keyof typeof Icon,
    head: string
    text: string | JSX.Element | JSX.Element[]
}

export type OutlineDataType = {
    id: string;
    head: string
    text: string | JSX.Element | JSX.Element[]
}

export type BasicTimelineType = {
    class: string;
    date: string;
    time: string;
    title: string;
    text: string;
}

export interface BasicTreesProp {
    variant?: string;
    isOpen?: boolean;
    className?: string;
    onClick?: (e: {}) => void;
  }