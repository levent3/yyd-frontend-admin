import { Placement, } from '@popperjs/core';
import * as Icon from 'react-feather';
import { Direction } from 'reactstrap/types/lib/Dropdown';

export type textColorDataType = {
    class: string;
    text: string;
    code: string
}

export type blockQuotesDataType = {
    class: string;
    text: string;
    footer: string
}

export type AvatarSizetype = {
    class: string;
    image: string;
}

export type AvatarStatusType = {
    class: string;
    image: string;
    status: string
}

export type AdditiveBorderType = {
    class: string;
    text: string;
    textClass?: string;
    alertText?: string | JSX.Element
}
export type ImageClass = {
    class: string
}

export type GridTableHeadType = {
    class?: string;
    text1: string;
    text2: string
}

export type BadgeIconType = {
    class: string;
    iconName: keyof typeof Icon
}

export type BadgeButtonType = {
    class: string
    text: string
    iconName: keyof typeof Icon
}

export type BasicProgresstype = {
    class: string;
    length: string;
}

export type MultipleBarType = {
    data: BasicProgresstype[]
}

export type CustomProgressType = {
    text: string;
    class?: string;
    length: string;
}

export type AlertColorType = {
    data: AdditiveBorderType[]
}

export type AdditionalAAlertType = {
    class: string;
    head: string;
    headclass: string;
    text: string;
    subtext: string;
}

export type FullscreenModalType = {
    title: string;
    text: string
}

export type LargeModalTyep = {
    text: string
}

export type ModalcommonType = {
    class: string;
    text: string
}

export type PopoverType = {
    id: string;
    placement: string;
    Popoverheader: string;
    Popoverbody: string;
    btncolor: string;
    btntext: string;
    trigger?: string;
}

export type TooltipType = {
    class: string;
    text: string;
    tooltip: string;
    position?: Placement
}

export type HtmltooltipType = {
    class: string;
    text: string;
    tooltip: string | JSX.Element | JSX.Element[]
}
export type BasicDropdownType = {
    class: string;
    bodyClass?: string;
    position?: Direction
    text: string;
    menulist: string[]
}

export type TabDatatype = {
    id: string;
    text: string | JSX.Element | JSX.Element[]
}

export type justifyDataType = {
    img: string;
    head: string;
    text: string;
}

export type JustifyTabType = {
    data: justifyDataType[],
    id: string
}

export type ListDataType = {
    class: string;
    data: string[];
}

export type ContectualListDataType = {
    id?: string;
    class: string
    htmlText: string | JSX.Element | JSX.Element[]
}

export type CustomlistType = {
    class: string;
    head: string;
    mail: string;
    image: string;
    span: string;
    subtext: string;
    follower: string;
}

export type CheckboxListType = {
    class: string;
    labelClass?: string;
    text: string;
    idFor?:string
}

export type badgeListType = {
    text: string;
    badgeClass: string;
    badgeText: string;
}

export type DisableListType = {
    class: string;
    img: string;
    text: string;
}

export type ScrollableListType = {
    img: string;
    head: string;
    mail: string;
    small: string;
}