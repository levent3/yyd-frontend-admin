import { languageDatatype, profileType } from "Types/LayoutDataType";
import { Deutsch, English, Español, Français, Português, لعربية, 简体中文 } from "utils/Constant";

export const countryClassName: Record<string,string> ={
    en:"us",
    du:"de",
    es:"es",
    fr:"fr",
    pt:"pt",
    cn:"cn",
    ae:"ae",

}

export const LanguageData: languageDatatype[] = [
    {
        name: English,
        shortName: 'en',
        iconClass: 'flag-icon flag-icon-us',
        tag: '(UA)'
    },
    {
        name: Deutsch,
        shortName: 'du',
        iconClass: 'flag-icon flag-icon-de'
    },
    {
        name: Español,
        shortName: 'es',
        iconClass: 'flag-icon flag-icon-es'
    },
    {
        name: Français,
        shortName: 'fr',
        iconClass: 'flag-icon flag-icon-fr'
    },
    {
        name: Português,
        shortName: 'pt',
        iconClass: 'flag-icon flag-icon-pt',
        tag: '(BR)'
    },
    {
        name: 简体中文,
        shortName: 'cn',
        iconClass: 'flag-icon flag-icon-cn'
    },
    {
        name: لعربية,
        shortName: 'ae',
        iconClass: 'flag-icon flag-icon-ae',
        tag: '(ae)'
    }
]

export const profileListData: profileType[] = [
    {
        icon: 'User',
        text: 'Account',
        path: '/app/users/profile'
    },
    {
        icon: 'Mail',
        text: 'Inbox',
        path: '/dashboard'
    },
    {
        icon: 'FileText',
        text: 'Taskboard',
        path: '/app/task'
    },
    {
        icon: 'Settings',
        text: 'Settings',
        path: '/app/users/edit'
    }
]