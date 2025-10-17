import { ApexOptions } from "apexcharts";
import {
  ProfitOptions,
  orderChartDataWidgets,
  ordersOptions,
  radialCommonOption,
} from "./Chart";
export const CurrenciesWidgetsData = [
  {
    title: "Bitcoin",
    sortName: "BTC",
    icon: "beta",
    color: "warning",
    price: "21,43",
    gros: 50,
    chart: {
      color: ["#FFA941"],
      label: [
        "jan",
        "feb",
        "mar",
        "apr",
        "may",
        "jun",
        "jul",
        "aug",
        "sep",
        "oct",
        "nov",
      ],
      series: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
    },
  },
  {
    title: "Ethereum",
    sortName: "ETC",
    icon: "eth",
    color: "primary",
    price: "7,450",
    gros: 35,
    chart: {
      color: ["var(--theme-deafult)"],
      label: [
        "jan",
        "feb",
        "mar",
        "apr",
        "may",
        "jun",
        "jul",
        "aug",
        "sep",
        "oct",
        "nov",
      ],
      series: [30, 25, 30, 25, 64, 40, 59, 52, 64],
    },
  },
  {
    title: "Leave Travel",
    sortName: "LTC",
    icon: "ltc",
    color: "success",
    price: "2,198",
    gros: 73,
    chart: {
      color: ["#54BA4A"],
      label: [
        "jan",
        "feb",
        "mar",
        "apr",
        "may",
        "jun",
        "jul",
        "aug",
        "sep",
        "oct",
        "nov",
      ],
      series: [30, 25, 36, 30, 64, 50, 45, 62, 60, 64],
    },
  },
];

export const RadialProgressWidgetDataWidgetPage = [
  {
    title: "Average Sales Per Day",
    average: "45,908",
    gros: 5.7,
    color: "primary",
    subTitle: "The point of using Lorem Ipsum",
    chart: {
      series: [70],
      color: "var(--theme-deafult)",
    },
  },
  {
    title: "Average Profit Per Day",
    average: "89.6%",
    gros: 5.7,
    color: "secondary",
    subTitle: "The point of using Lorem Ipsum",
    chart: {
      series: [80],
      color: "var(--theme-secondary)",
    },
  },
];

export const salesReportData = [
  {
    title: "Purchase",
    gros: 50,
    total: "10,000",
    color: "secondary",
    icon: "cart",
  },
  {
    title: "Sales",
    gros: 70,
    total: "4,200",
    color: "primary",
    icon: "tag",
  },
  {
    title: "Sales return",
    gros: 20,
    total: 7000,
    color: "warning",
    icon: "return-box",
  },

  {
    title: "Purchase rate",
    gros: 70,
    total: 5700,
    color: "success",
    icon: "rate",
  },
];

export const courseBoxData = [
  {
    title: "Completed Courses",
    course: "100+",
    icon: "course-1",
    link: "View course",
  },
  {
    title: "In Progress Courses",
    course: "50+",
    icon: "course-2",
    link: "View course",
    color: "warning",
  },
];

export const optionsVisitorChartWidget: ApexOptions = {
  series: [
    {
      name: "Active",
      data: [18, 10, 65, 18, 28, 10],
    },
    {
      name: "Bounce",
      data: [25, 50, 30, 30, 25, 45],
    },
  ],
  chart: {
    type: "bar",
    height: 270,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "50%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 6,
    colors: ["transparent"],
  },
  grid: {
    show: true,
    borderColor: "var(--chart-border)",
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  colors: ["#FFA941", "var(--theme-deafult)"],
  xaxis: {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    tickAmount: 4,
    tickPlacement: "between",
    labels: {
      style: {
        fontFamily: "Rubik, sans-serif",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    min: 0,
    max: 100,
    tickAmount: 5,
    // tickPlacement: "between",
    labels: {
      style: {
        fontFamily: "Rubik, sans-serif",
      },
    },
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
    fontFamily: "Rubik, sans-serif",
    fontSize: "14px",
    fontWeight: 500,
    labels: {
      colors: "var(--chart-text-color)",
    },
    markers: {
      width: 6,
      height: 6,
      radius: 12,
    },
    itemMargin: {
      horizontal: 10,
    },
  },
  responsive: [
    {
      breakpoint: 1366,
      options: {
        plotOptions: {
          bar: {
            columnWidth: "80%",
          },
        },
        grid: {
          padding: {
            right: 0,
          },
        },
      },
    },
    {
      breakpoint: 1200,
      options: {
        plotOptions: {
          bar: {
            columnWidth: "50%",
          },
        },
        grid: {
          padding: {
            right: 0,
          },
        },
      },
    },
    {
      breakpoint: 576,
      options: {
        plotOptions: {
          bar: {
            columnWidth: "60%",
          },
        },
        grid: {
          padding: {
            right: 5,
          },
        },
      },
    },
  ],
};

const radial1 = {
  color: ["var(--theme-deafult)"],
  dropshadowColor: "var(--theme-deafult)",
  radialYseries: [78],
};

const radial2 = {
  color: ["#FFA941"],
  dropshadowColor: "#FFA941",
  radialYseries: [70],
};

const radial3 = {
  color: ["#57B9F6"],
  dropshadowColor: "#57B9F6",
  radialYseries: [50],
};

const radial4 = {
  color: ["#FF3364"],
  dropshadowColor: "#FF3364",
  radialYseries: [80],
};

interface socialDataWidget {
  title: string;
  image: string;
  gros: number;
  total: string;
  subTitle: string;
  status: string;
  chartData: ApexOptions;
}

export const socialDataWidget: socialDataWidget[] = [
  {
    title: "Facebook",
    image: "1.png",
    gros: 22.9,
    total: "12,098",
    subTitle: "Followers",
    status: "success",
    chartData: radialCommonOption(radial1),
  },
  {
    title: "Instagram",
    image: "2.png",
    gros: 27.4,
    total: "15,080",
    subTitle: "Followers",
    status: "success",
    chartData: radialCommonOption(radial2),
  },
  {
    title: "Twitter",
    image: "3.png",
    gros: 14.09,
    total: "12,564",
    subTitle: "Followers",
    status: "success",
    chartData: radialCommonOption(radial3),
  },
  {
    title: "Youtube",
    image: "4.png",
    gros: 14.09,
    total: "68,954",
    subTitle: "Followers",
    status: "secondary",
    chartData: radialCommonOption(radial4),
  },
];

export const smallWidgetsData = [
  {
    title: "New Orders",
    color: "primary",
    total: 2_435,
    gros: 50,
    icon: "new-order",
  },
  {
    title: "New Customers",
    color: "warning",
    total: 2_908,
    gros: 20,
    icon: "customers",
  },
  {
    title: "Average Sale",
    color: "secondary",
    total: 389,
    gros: 10,
    prefix: "$",
    icon: "sale",
    suffix: "k",
  },
  {
    title: "Gross Profit",
    color: "success",
    total: 3_908,
    gros: 80,
    prefix: "$",
    icon: "profit",
  },
];

export const widgetsWithChartData = [
  { amount: "1,80k", tittle: "Orders", chartOption: ordersOptions },
  { amount: "6,90k", tittle: "Profit", chartOption: ProfitOptions },
];

export const Widgets2DataWidgets = {
  title: "Orders",
  total: "1,80k",
  chart: orderChartDataWidgets,
};

export const yourBalanceTransaction = [
  {
    title: "Investment",
    price: "78.8K",
    color: "danger",
    badge: "-11.67%",
  },
  {
    title: "Cash Back",
    price: "19.7K",
    color: "success",
    badge: "+10.67%",
  },
];

export const squareGroupData = [
  {
    id: 1,
    color: "warning",
  },
  {
    id: 1,
    color: "primary",
  },
  {
    id: 2,
    color: "warning1",
  },
  {
    id: 3,
    color: "danger",
  },
  {
    id: 4,
    color: "light",
  },
  {
    id: 5,
    color: "warning",
  },
  {
    id: 6,
    color: "success",
  },
  {
    id: 7,
    color: "success",
  },
];
