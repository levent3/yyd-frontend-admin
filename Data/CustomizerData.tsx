import { CheckLayoutDataType, customizerDataType } from "Types/LayoutDataType";

export const navLinkList: customizerDataType[] = [
    {
        path: 'https://support.pixelstrap.com/',
        icon: 'icon-support',
        name: 'Support'
    },
    {
        path: 'https://docs.pixelstrap.com/cuba/all_in_one/document/index.html',
        icon: 'icon-settings',
        name: 'Document'
    },
    {
        path: 'http://admin.pixelstrap.com/cuba/theme/landing-page.html#frameworks',
        icon: 'icon-panel',
        name: 'Check Features'
    },
    {
        path: 'https://themeforest.net/user/pixelstrap/portfolio',
        icon: 'icon-shopping-cart-full',
        name: 'Buy Now'
    }
]

export const CheckLayoutData: CheckLayoutDataType[] = [
    {
        image: '/landing/layout-images/dubai.jpg',
        title: 'Dubai',
        attr: 'compact-sidebar'
    },
    {
        image: '/landing/layout-images/los-angle.png',
        title: 'Los Angeles',
        attr: 'material-layout'
    },
    {
        image: '/landing/layout-images/paris.jpg',
        title: 'Paris',
        attr: 'dark-sidebar'
    },
    {
        image: '/landing/layout-images/tokyo.jpg',
        title: 'Tokyo',
        attr: 'compact-wrap'
    },
    {
        image: '/landing/layout-images/moscow.jpg',
        title: 'Moscow',
        attr: 'compact-small'
    },
    {
        image: '/landing/layout-images/singapore.jpg',
        title: 'Singapore',
        attr: 'enterprice-type'
    },
    {
        class: 'box-layout',
        image: '/landing/layout-images/newyork.png',
        title: 'New York',
        attr: 'compact-small'
    },
    {
        image: '/landing/layout-images/singapore.jpg',
        title: 'Barcelona',
        attr: 'advance-type'
    },
    {
        image: '/landing/layout-images/paris.jpg',
        title: 'Madrid',
        attr: 'color-sidebar'
    },
    {
        image: '/landing/layout-images/rome.jpg',
        title: 'Rome',
        attr: 'material-icon'
    },
    {
        image: '/landing/layout-images/dubai.jpg',
        title: 'Seoul',
        attr: 'modern-layout'
    },
    {
        class: 'only-body',
        image: '/landing/layout-images/landon.png',
        title: 'London',
        attr: 'default-body'
    }
]