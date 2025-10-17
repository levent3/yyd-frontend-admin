import { BasicProgresstype, CustomProgressType, MultipleBarType } from "Types/UikitesType";

export const BasicProgressData: BasicProgresstype[] = [
    {
        class: '',
        length: '0%'
    },
    {
        class: 'bg-primary',
        length: '25%'
    },
    {
        class: 'bg-secondary',
        length: '50%'
    },
    {
        class: 'bg-success',
        length: '75%'
    },
    {
        class: 'bg-info',
        length: '100%'
    }
]

export const StripedProgressData: BasicProgresstype[] = [
    {
        class: 'bg-primary',
        length: '10%'
    },
    {
        class: 'bg-warning',
        length: '25%'
    },
    {
        class: 'bg-danger',
        length: '50%'
    },
    {
        class: 'bg-success',
        length: '75%'
    }
]

export const MultipleBarData: MultipleBarType[] = [
    {
        data: [
            {
                class: 'bg-primary',
                length: '30%'
            },
            {
                class: 'bg-secondary',
                length: '20%'
            },
            {
                class: 'bg-success',
                length: '15%'
            }
        ]
    },
    {
        data: [
            {
                class: 'bg-primary',
                length: '10%'
            },
            {
                class: 'bg-secondary',
                length: '10%'
            },
            {
                class: 'bg-success',
                length: '10%'
            },
            {
                class: 'bg-info',
                length: '10%'
            },
            {
                class: 'bg-warning',
                length: '10%'
            },
            {
                class: 'bg-danger',
                length: '10%'
            },
            {
                class: 'bg-primary',
                length: '10%'
            },
            {
                class: 'bg-light',
                length: '10%'
            }
        ]
    },
]

export const CustomProgressData: CustomProgressType[] = [
    {
        text: '0% Getting Started ',
        class: '',
        length: '0'
    },
    {
        text: '30% Getting Uploading...',
        class: 'bg-primary',
        length: '30%'
    },
    {
        text: '60% Getting Pause...',
        class: 'bg-secondary',
        length: '60%'
    },
    {
        text: '70% Getting Uploading...',
        class: 'bg-success',
        length: '70%'
    },
    {
        text: '100% Completed',
        class: 'bg-dark',
        length: '100%'
    }
]

export const SmallProgressData: CustomProgressType[] = [
    {
        length: '30%',
        text: '30 MB Data'
    },
    {
        length: '50%',
        text: '50 MB Data'
    },
    {
        length: '75%',
        text: '75 MB Data'
    },
    {
        length: '100%',
        text: '100 MB Data'
    }
]

export const LargeProgressData: BasicProgresstype[] = [
    {
        class: 'bg-primary',
        length: '25%'
    },
    {
        class: 'bg-secondary',
        length: '50%'
    },
    {
        class: 'bg-success',
        length: '75%'
    },
    {
        class: 'bg-info',
        length: '100%'
    }
]

export const CustomHeightData: CustomProgressType[] = [
    {
        text: ' 1px',
        class: 'bg-primary',
        length: '25%'
    },
    {
        text: ' 5px',
        class: 'bg-warning',
        length: '50%'
    },
    {
        text: ' 11px',
        class: 'bg-danger',
        length: '75%'
    },
    {
        text: ' 19px',
        class: 'bg-info',
        length: '100%'
    }
]