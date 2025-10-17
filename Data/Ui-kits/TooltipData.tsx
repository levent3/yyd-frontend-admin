import { HtmltooltipType, ModalcommonType, TooltipType } from "Types/UikitesType";

export const ColorTooltipData: ModalcommonType[] = [
    {
        class: 'primary',
        text: 'Primary'
    },
    {
        class: 'secondary',
        text: 'Secondary'
    },
    {
        class: 'success',
        text: 'Success'
    },
    {
        class: 'warning',
        text: 'Warning'
    },
    {
        class: 'danger',
        text: 'Danger'
    }
]

export const TooltipPosition: TooltipType[] = [
    {
        class: 'primary',
        text: 'Tooltip on top',
        tooltip: 'Tooltip on top',
        position: 'top'
    },
    {
        class: 'secondary',
        text: 'Tooltip on right',
        tooltip: 'Tooltip on right',
        position: 'right'
    },
    {
        class: 'success',
        text: 'Tooltip on bottom',
        tooltip: 'Tooltip on bottom',
        position: 'bottom'
    },
    {
        class: 'warning',
        text: 'Tooltip on left',
        tooltip: 'Tooltip on left',
        position: 'left'
    }
]

export const HtmlTooltipData: HtmltooltipType[] = [
    {
        class: 'primary',
        text: 'Notifications Received',
        tooltip: <><em>Thank</em> <u>you</u></>
    },
    {
        class: 'warning',
        text: 'Last Warning',
        tooltip: <><b>Thank</b> <em>you</em></>
    },
    {
        class: 'danger',
        text: "It's Danger",
        tooltip: <><em>Thank</em> <u>you</u></>
    },
    {
        class: 'info',
        text: 'Coming soon',
        tooltip: <><b>Thank</b> <em>you</em></>
    }
]

export const FlippedtooltipData: TooltipType[] = [
    {
        class: 'btn-outline-primary',
        text: 'Tooltip Primary',
        tooltip: 'Tooltip Primary'
    },
    {
        class: 'btn-outline-secondary',
        text: 'Tooltip Secondary',
        tooltip: 'Tooltip Secondary'
    },
    {
        class: 'btn-outline-success',
        text: 'Tooltip Success',
        tooltip: 'Tooltip Success'
    },
    {
        class: 'btn-outline-info',
        text: 'Tooltip Info',
        tooltip: 'Tooltip Info'
    }
]