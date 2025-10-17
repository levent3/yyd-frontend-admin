export const RadialProgressWidgetData = [
    {
        title: 'Average Sales Per Day',
        average: '45,908',
        gros: 5.7,
        color: 'primary',
        subTitle: 'The point of using Lorem Ipsum',
        chart: {
            series: [70],
            color: 'var(--theme-deafult)',
        },
    },
    {
        title: 'Average Profit Per Day',
        average: '89.6%',
        gros: 5.7,
        color: 'secondary',
        subTitle: 'The point of using Lorem Ipsum',
        chart: {
            series: [80],
            color: 'var(--theme-secondary)',
        },
    },
    {
        title: 'Average Visits Per Day',
        average: '70k',
        gros: 1.5,
        color: 'success',
        subTitle: 'The point of using Lorem Ipsum',
        chart: {
            series: [48],
            color: '#54BA4A',
        },
    },
];

export const transactionTableData = [
    {
        title: 'Buy BTC',
        subTitle: '14 Mar, 2022',
        price: '0.018',
        coins: ' BTC',
        totalPrice: '236.89',
        trend: 'up',
    },
    {
        title: 'Sell ETH',
        subTitle: '25 Mar, 2022',
        price: '0.089',
        coins: 'ETH',
        totalPrice: '116.89',
        trend: 'down',
    },
    {
        title: 'Buy LTC',
        subTitle: '28 Mar, 2022',
        price: '0.018',
        coins: 'LTC',
        totalPrice: '236.89',
        trend: 'up',
    },
    {
        title: 'Buy LTC',
        subTitle: '05 Apr, 2022',
        price: '0.089',
        coins: 'LTC',
        totalPrice: '29.89',
        trend: 'down',
    },
    {
        title: 'Sell BTC',
        subTitle: '16 Apr, 2022',
        price: '0.012',
        coins: 'BTC',
        totalPrice: '236.89',
        trend: 'down',
    },
    {
        title: 'Buy BTC',
        subTitle: '14 Mar, 2022',
        price: '0.018',
        coins: 'BTC',
        totalPrice: '236.89',
        trend: 'up',
    },
    {
        title: 'Sell ETH',
        subTitle: '25 Mar, 2022',
        price: '0.089',
        coins: 'ETH',
        totalPrice: '116.89',
        trend: 'down',
    },
    {
        title: 'Buy LTC',
        subTitle: '28 Mar, 2022',
        price: '0.018 ',
        coins: 'LTC',
        totalPrice: '236.89',
        trend: 'up',
    },
];

export const CurrenciesWidgets = [
    {
        title: 'Bitcoin',
        shortName: 'BTC',
        icon: 'beta',
        color: 'warning',
        price: '21,43',
        gros: 50,
        chart: {
            color: ['#FFA941'],
            label: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov'],
            series: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
        },
    },
    {
        title: 'Ethereum',
        shortName: 'ETC',
        icon: 'eth',
        color: 'primary',
        price: '7,450',
        gros: 35,
        chart: {
            color: ['var(--theme-deafult)'],
            label: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov'],
            series: [30, 25, 30, 25, 64, 40, 59, 52, 64],
        },
    },
    {
        title: 'Leave Travel',
        shortName: 'LTC',
        icon: 'ltc',
        color: 'success',
        price: '2,198',
        gros: 73,
        chart: {
            color: ['#54BA4A'],
            label: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov'],
            series: [30, 25, 36, 30, 64, 50, 45, 62, 60, 64],
        },
    },
];

export const MarketGraphLegend = [
    {
        title: 'Coinmarketcap',
        gros: 11.67,
        status: 'success',
    },
    {
        title: 'Binance',
        gros: 10.67,
        status: 'success',
    },
    {
        title: 'Coinbase',
        gros: 11.67,
        status: 'secondary',
    },
    {
        title: 'Yobit',
        gros: 13.67,
        status: 'success',
    },
];

export const CurrencyTablehead = [
    {
        class: 'f-light',
        name: 'Coin Name'
    },
    {
        class: 'f-light',
        name: 'Price'
    },
    {
        class: 'f-light',
        name: '24h Change'
    },
    {
        class: 'f-light',
        name: 'Total Balance'
    },
    {
        class: 'f-light',
        name: 'Total Coin'
    },
    {
        class: 'f-light',
        name: 'Action'
    }
]

export const MyCurrenciesTableData = [
    {
        color: 'warning',
        icon: 'beta',
        title: 'Bitcoin',
        price: '13,098.09',
        gros: '5.90',
        totalBalance: '74,871.470',
        totalCoin: 1.09634721,
        badge: 'Trade',
        status: 'success',
    },
    {
        color: 'success',
        icon: 'ltc',
        title: 'Litecoin',
        price: '11,098.04',
        gros: '2.90',
        totalBalance: '87,897.098',
        totalCoin: 1.09675432,
        badge: 'Trade',
        status: 'secondary',
    },
    {
        color: 'primary',
        icon: 'eth',
        title: 'Eathereum',
        price: '45,198.09',
        gros: '0.12',
        totalBalance: '45,178.010',
        totalCoin: 1.41557127,
        badge: 'Trade',
        status: 'success',
    },
    {
        color: 'secondary',
        icon: 'bin',
        title: 'Binance',
        price: '35,098.34',
        gros: '3.56',
        totalBalance: '64,100.066',
        totalCoin: 1.78142254,
        badge: 'Trade',
        status: 'success',
    },
    {
        color: 'dark-green',
        icon: 'te',
        title: 'Tether',
        price: '56,898.91',
        gros: '1.23',
        totalBalance: '61,574.218',
        totalCoin: 1.574215,
        badge: 'Trade',
        status: 'secondary',
    },
];


export const YourBalanceTransaction = [
    {
        title: 'Investment',
        price: '78.8K',
        color: 'danger',
        badge: '-11.67%',
    },
    {
        title: 'Cash Back',
        price: '19.7K',
        color: 'success',
        badge: '+10.67%',
    },
];

export const portfolioLegend = [
    {
        title: 'Bitcoin',
        subTitle: 'BTC',
        color: 'warning',
        status: 'success',
        price: 0.00876543,
        totalPrice: '14,987.13',
        icon: 'beta',
    },
    {
        title: 'Ethereum',
        subTitle: 'ETH',
        color: 'success',
        status: 'danger',
        price: 1.60876543,
        totalPrice: '49,987.13',
        icon: 'ltc',
    },
    {
        title: 'Litecoin',
        subTitle: 'LTC',
        color: 'primary',
        status: 'success',
        price: 1.60876543,
        totalPrice: '35,571.25',
        icon: 'eth',
    },
    {
        title: 'Dash',
        subTitle: 'DSH',
        color: 'light-blue',
        status: 'success',
        price: '1.80741510',
        totalPrice: '17,047.30',
        icon: 'dash',
    },
];

export const activitiesMyOption = [
    {
        title: 'Anna K.',
        subTitle: 'To : 0x187...12bb',
        image: 'dashboard/user/3.jpg',
        price: '+0.3BNB',
        total: '29.09.22',
        status: 'success',
    },
    {
        title: 'Guy Hawkins',
        subTitle: 'To : 0x187...12bb',
        image: 'dashboard/user/12.jpg',
        price: '+0.3BNB',
        total: '29.09.22',
        status: 'success',
    },
    {
        title: 'Jenny Wilson',
        subTitle: 'To : 0x187...12bb',
        image: 'dashboard/user/10.jpg',
        price: '-0.1BNB',
        total: '29.09.22',
        status: 'danger',
    },
    {
        title: 'Jacob B.',
        subTitle: 'To : 0x187...12bb',
        image: 'dashboard/user/11.jpg',
        price: '+0.3BNB',
        total: '29.09.22',
        status: 'success',
    },
    {
        title: 'Esther Howard',
        subTitle: 'To : 0x187...12bb',
        image: 'dashboard/user/13.jpg',
        price: '-0.2BNB',
        total: '29.09.22',
        status: 'danger',
    },
    {
        title: 'Leslie Alexander',
        subTitle: 'To : 0x187...12bb',
        image: 'dashboard/user/5.jpg',
        price: '+0.3BNB',
        total: '29.09.22',
        status: 'success',
    },
];