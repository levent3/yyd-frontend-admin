import { AdditionalAAlertType, AlertColorType } from "Types/UikitesType";

export const AlertColorData: AlertColorType[] = [
    {
        data: [
            {
                text: 'Primary Alert',
                class: 'alert-primary',
                alertText: <p>This is a   <a className="alert-link text-white" href="#">primary alert</a> with an example link.Check it out.</p>
            },
            {
                text: 'Secondary Alert',
                class: 'alert-secondary',
                alertText: <p>This is a   <a className="alert-link text-white" href="#">secondary alert</a>  with an example link. Check it out.</p>
            },
            {
                text: 'Success Alert',
                class: 'alert-success',
                alertText: <p>This is a  <a className="alert-link text-white" href="#">success alert </a>  with an example link. Check it out.</p>
            },
            {
                text: 'Info Alert',
                class: 'alert-info',
                alertText: <p>This is a  <a className="alert-link text-white" href="#">info alert </a>  with an example link. Check it out.</p>
            }
        ]
    },
    {
        data: [
            {
                text: 'Warning Alert',
                class: 'alert-warning',
                alertText: <p>This is a  <a className="alert-link text-white" href="#">warning alert </a>  with an example link. Check it out.</p>
            },
            {
                text: 'Danger Alert',
                class: 'alert-danger',
                alertText: <p>This is a  <a className="alert-link text-white" href="#">danger alert </a>  with an example link. Check it out.</p>
            },
            {
                text: 'Light Alert',
                class: 'alert-light',
                alertText: <p>This is a  <a className="alert-link" href="#">light alert </a>  with an example link. Check it out.</p>
            },
            {
                text: 'Dark Alert',
                class: 'alert-dark',
                alertText: <p>This is a  <a className="alert-link text-white" href="#">dark alert </a>  with an example link. Check it out.</p>
            }
        ]
    }
]

export const AlertLightColorData: AlertColorType[] = [
    {
        data: [
            {
                text: 'Primary Light Alert',
                class: 'alert-light-primary',
                textClass: 'txt-primary',
                alertText: <p className="txt-primary">This is a  <a className="alert-link txt-primary" href="#">primary alert</a> with an example link.Check it out.</p>
            },
            {
                text: 'Secondary Light Alert',
                class: 'alert-light-secondary',
                textClass: 'txt-secondary',
                alertText: <p className="txt-secondary">This is a   <a className="alert-link txt-secondary" href="#">secondary alert</a>  with an example link. Check it out.</p>
            },
            {
                text: 'Success Light Alert',
                class: 'alert-light-success',
                textClass: 'txt-success',
                alertText: <div className="txt-success">This is a  <a className="alert-link txt-success" href="#">success alert </a>  with an example link. Check it out.</div>
            },
            {
                text: 'Info Light Alert',
                class: 'alert-light-info',
                textClass: 'txt-info',
                alertText: <div className="txt-info">This is a  <a className="alert-link txt-info" href="#">info alert </a>  with an example link. Check it out.</div>
            }
        ]
    },
    {
        data: [
            {
                text: 'Warning Light Alert',
                class: 'alert-light-warning',
                textClass: 'txt-warning',
                alertText: <p className="txt-warning">This is a  <a className="alert-link txt-warning" href="#">warning alert </a>  with an example link. Check it out.</p>
            },
            {
                text: 'Danger Light Alert',
                class: 'alert-light-danger',
                textClass: 'txt-danger',
                alertText: <p className="txt-danger">This is a  <a className="alert-link txt-danger" href="#">danger alert </a>  with an example link. Check it out.</p>
            },
            {
                text: 'Light Light Alert',
                class: 'alert-light-light',
                textClass: 'txt-dark',
                alertText: <p className="txt-dark">This is a  <a className="alert-link txt-dark" href="#">light alert </a>  with an example link. Check it out.</p>
            },
            {
                text: 'Dark Light Alert',
                class: 'alert-light-dark',
                textClass: 'txt-dark',
                alertText: <p className="txt-dark">This is a  <a className="alert-link txt-dark" href="#">dark alert </a>  with an example link. Check it out.</p>
            }
        ]
    }
]

export const AdditionalAlertData: AdditionalAAlertType[] = [
    {
        class: 'alert-light-primary',
        head: 'Please! Check your notifications',
        headclass: 'txt-primary',
        text: 'The duty of notification is imposed upon the head of the family, and also upon the medical practitioner who may be in attendance on the patient.',
        subtext: 'The emergency notification system is free and is available in all 50 states.',
    },
    {
        class: 'alert-light-secondary',
        head: 'Something went wrong! Please, chrome update.',
        headclass: 'txt-secondary',
        text: 'The duty of notification is imposed upon the head of the family, and also upon the medical practitioner who may be in attendance on the patient.',
        subtext: 'Whenever you need to, be sure to use margin utilities to keep things nice and tidy.',
    },
    {
        class: 'alert-light-success',
        head: 'Please! Hidden cameras were not installed.',
        headclass: 'txt-success',
        text: 'Due to increasingly accessible technology, hidden cameras have grown in popularity among regular people in recent years.',
        subtext: 'Consider moving clocks and plush animals from your area if you think they may be concealing cameras because they are both portable items.',
    }
]