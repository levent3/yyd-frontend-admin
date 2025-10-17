import { PopoverType } from "Types/UikitesType";


export const BasicpopoverData: PopoverType[] = [
    {
        id: '1',
        placement: 'bottom',
        Popoverheader: 'Hover Popover',
        Popoverbody: ' Several utility instruction sets have been featured in the Bootstrap 4 to promote very easy learning for beginners in the business of web building.',
        btncolor: 'success',
        btntext: 'Hover tooltip',
        trigger: 'hover'
    },
    {
        id: '2',
        placement: 'right',
        Popoverheader: 'Dismissible popover',
        Popoverbody: 'You are able to even develop and suggest improvements to the Bootstrap 4 before its final version is delivered.',
        btncolor: 'secondary btn-lg',
        btntext: 'Dismissible popover',
        trigger: 'focus'
    },
]

export const PopoverPositions: PopoverType[] = [
    {
        id: '3',
        placement: 'right',
        Popoverheader: 'Popover On Right',
        Popoverbody: 'Popovers are opt-in for effectiveness causes, in this way you have to initialize them yourself.',
        btncolor: 'danger',
        btntext: 'Popover on right',
        trigger: 'click',
    },
    {
        id: '4',
        placement: 'bottom',
        Popoverheader: 'Popover On Bottom',
        Popoverbody: 'Identify container:to evade rendering problems in more complex components (like Bootstrap input groups, button groups, etc).',
        btncolor: 'info',
        btntext: 'Popover on bottom',
        trigger: 'click',
    },
    {
        id: '5',
        placement: 'left',
        Popoverheader: 'Popover On Left',
        Popoverbody: 'Popovers are opt-in for effectiveness causes, in this way you have to initialize them yourself.',
        btncolor: 'dark',
        btntext: 'Popover on left',
        trigger: 'click',
    }
]