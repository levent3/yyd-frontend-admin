import { BasicDropdownType } from "Types/UikitesType";

export const BasicDropdownData: BasicDropdownType[] = [
    {
        class: 'secondary',
        text: 'Ecommerce',
        menulist: ['Product', 'Product details', 'Cart']
    },
    {
        class: 'warning',
        text: 'Ui kits',
        menulist: ['Typography', 'Avatars', 'Grid']
    },
    {
        class: 'danger',
        text: 'Error page',
        menulist: ['Error 400', 'Error 403', 'Error 500']
    }
]

export const RoundedDropdownData: BasicDropdownType[] = [
    {
        class: 'success rounded-pill',
        text: 'Success',
        menulist: ['Dark', 'Light', 'Lighter']
    },
    {
        class: 'info rounded-pill',
        text: 'Info',
        menulist: ['Dark', 'Light', 'Lighter']
    },
    {
        class: 'warning rounded-pill',
        text: 'Warning',
        menulist: ['Dark', 'Light', 'Lighter']
    },
    {
        class: 'danger rounded-pill',
        text: 'Danger',
        menulist: ['Dark', 'Light', 'Lighter']
    },
]

export const SplitDropdownData: BasicDropdownType[] = [
    {
        class: 'secondary',
        text: 'Animations',
        menulist: ['Animate', 'AOS animations']
    },
    {
        class: 'success',
        text: 'Charts',
        menulist: ['Echarts', 'Apex chart']
    },
    {
        class: 'info',
        text: 'Email',
        menulist: ['Email app', 'Email compose']
    },
    {
        class: 'warning',
        text: 'Icons',
        menulist: ['Flag icons', 'Fontawesome icons', 'Ico icons', 'Feather icons']
    },
    {
        class: 'danger',
        text: 'Learning',
        menulist: ['Learning List', 'Detailed Course']
    }
]

export const JustifyData: BasicDropdownType[] = [
    {
        class: 'info',
        bodyClass: 'text-center',
        text: 'Text-center',
        menulist: ["Chocolate", "Ice-cream", "Trophy"]
    },
    {
        class: 'primary',
        bodyClass: 'text-end',
        text: 'Text-right',
        menulist: ["I'm fine.", "ohh wow!!", "That's the good news! "]
    },
]

export const AlignmentData: BasicDropdownType[] = [
    {
        class: 'success',
        position: 'down',
        text: 'Success right',
        menulist: ["Good luck ", "Good job ", "Done!"]
    },
    {
        class: 'primary',
        position: 'start',
        text: 'Primary bottom',
        menulist: ["It's important", "Happy life ", "Another work"]
    },
    {
        class: 'danger',
        position: 'end',
        text: 'Danger left',
        menulist: ["Threat ", "Dangerous", "Alert "]
    }
]

export const HelperCardData: BasicDropdownType[] = [
    {
        class: 'secondary',
        text: 'Helper Card',
        menulist: ["Learn More!", "There is a lot of information available here"]
    },
    {
        class: 'warning',
        text: 'Warning Card',
        menulist: ["Warning!", "Please! Check your notifications."]
    },
    {
        class: 'info',
        text: 'Alert Card',
        menulist: ["Danger", "It's a danger path."]
    }
]

export const DividerCommonData: BasicDropdownType[] = [
    {
        class: 'success rounded-pill',
        text: 'Wishlist',
        menulist: ["Shoes", "Bag", "Clothes ", "", "Separated link"]
    },
    {
        class: 'primary rounded-pill',
        text: 'Sports ',
        menulist: ["Badminton", "Tenis ", "Kho-Kho", "", "Separated link"]
    },
    {
        class: 'secondary rounded-pill',
        text: 'Colors ',
        menulist: ["Orange", "Yellow ", "Red ", "", "Separated link"]
    }
]