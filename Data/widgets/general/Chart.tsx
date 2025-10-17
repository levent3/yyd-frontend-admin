import { interFaceCommonSocialCharts } from "Types/GeneralWidget";
import { ApexOptions } from "apexcharts";
import ConfigDB from "config/ThemeConfig";
const primary = ConfigDB.data.color.primary_color;

export const widgetsLineChart: ApexOptions = {
  chart: {
    width: 120,
    height: 120,
    type: "line",
    toolbar: {
      show: false,
    },
    offsetY: 10,
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 6,
      left: 0,
      blur: 6,
      // color: [],
      opacity: 0.1,
    },
  },
  grid: {
    show: false,
  },
  colors: [],
  stroke: {
    width: 2,
    curve: "smooth",
  },
  // labels: '',
  markers: {
    size: 0,
  },
  xaxis: {
    // type: 'datetime',
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  tooltip: {
    marker: {
      show: false,
    },
    x: {
      show: false,
    },
    y: {
      // show: false,
      // labels: {
      //   show: false,
      // },
    },
  },
  responsive: [
    {
      breakpoint: 1790,
      options: {
        chart: {
          width: 100,
          height: 100,
        },
      },
    },
    {
      breakpoint: 1661,
      options: {
        chart: {
          width: "100%",
          height: 100,
        },
      },
    },
  ],
};

export const WidgetsRadialChart: ApexOptions = {
  chart: {
    height: 150,
    type: "radialBar",
    dropShadow: {
      enabled: true,
      top: 3,
      left: 0,
      blur: 10,
      color: "",
      opacity: 0.35,
    },
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: "60%",
      },
      track: {
        strokeWidth: "45%",
        opacity: 1,
        margin: 5,
      },
      dataLabels: {
        // showOn: "always",
        value: {
          color: "var(--chart-text-color)",
          fontSize: "18px",
          show: true,
          offsetY: -8,
        },
      },
    },
  },
  colors: [],
  stroke: {
    lineCap: "round",
  },
  responsive: [
    {
      breakpoint: 1500,
      options: {
        chart: {
          height: 130,
        },
      },
    },
  ],
};

export const orderChartDataWidgets: ApexOptions = {
  series: [
    {
      name: "Daily",
      data: [
        2.15, 3, 1.5, 2, 2.4, 3, 2.4, 2.8, 1.5, 1.7, 3, 2.5, 3, 2, 2.15, 3, 1.1,
      ],
    },
    {
      name: "Weekly",
      data: [
        -2.15, -3, -1.5, -2, -2.4, -3, -2.4, -2.8, -1.5, -1.7, -3, -2.5, -3, -2,
        -2.15, -3, -1.1,
      ],
    },
    {
      name: "Monthly",
      data: [
        -2.25, -2.35, -2.45, -2.55, -2.65, -2.75, -2.85, -2.95, -3.0, -3.1,
        -3.2, -3.25, -3.1, -3.0, -2.95, -2.85, -2.75,
      ],
    },
    {
      name: "Yearly",
      data: [
        2.25, 2.35, 2.45, 2.55, 2.65, 2.75, 2.85, 2.95, 3.0, 3.1, 3.2, 3.25,
        3.1, 3.0, 2.95, 2.85, 2.75,
      ],
    },
  ],
  chart: {
    type: "bar",
    width: 180,
    height: 120,
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      // vertical: true,
      columnWidth: "40%",
      barHeight: "80%",
      // startingShape: 'rounded',
      // endingShape: 'rounded',
    },
  },
  colors: [primary, primary, "#F2F3F7", "#F2F3F7"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 0,
  },
  legend: {
    show: false,
  },
  grid: {
    xaxis: {
      // offsetX: -2,
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  yaxis: {
    min: -5,
    max: 5,
    show: false,
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  tooltip: {
    shared: false,
    x: {
      show: false,
    },
    y: {
      // show: false,
    },
    z: {
      // show: false,
    },
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    offsetX: 0,
    offsetY: 0,
    labels: {
      offsetX: 0,
      offsetY: 0,
      show: false,
    },
    axisBorder: {
      offsetX: 0,
      offsetY: 0,
      show: false,
    },
    axisTicks: {
      offsetX: 0,
      offsetY: 0,
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1760,
      options: {
        chart: {
          width: 160,
        },
      },
    },
    {
      breakpoint: 1601,
      options: {
        chart: {
          height: 110,
        },
      },
    },
    {
      breakpoint: 1560,
      options: {
        chart: {
          width: 140,
        },
      },
    },
    {
      breakpoint: 1460,
      options: {
        chart: {
          width: 120,
        },
      },
    },
    {
      breakpoint: 1400,
      options: {
        chart: {
          width: 150,
        },
      },
    },
    {
      breakpoint: 1110,
      options: {
        chart: {
          width: 200,
        },
      },
    },
    {
      breakpoint: 700,
      options: {
        chart: {
          width: 150,
        },
      },
    },
    {
      breakpoint: 576,
      options: {
        chart: {
          width: 220,
        },
      },
    },
    {
      breakpoint: 420,
      options: {
        chart: {
          width: 150,
        },
      },
    },
  ],
};

// radial chart js
export const radialCommonOption = (data: interFaceCommonSocialCharts) => {
  return {
    series: data.radialYseries,
    options: {
      chart: {
        height: 130,
        type: "radialBar",
        dropShadow: {
          enabled: true,
          top: 3,
          left: 0,
          blur: 10,
          color: data.dropshadowColor,
          opacity: 0.35,
        },
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "60%",
          },
          track: {
            strokeWidth: "60%",
            opacity: 1,
            margin: 5,
          },
          dataLabels: {
            showOn: "always",
            value: {
              color: "var(--body-font-color)",
              fontSize: "14px",
              show: true,
              offsetY: -10,
            },
          },
        },
      },
      colors: data.color,
      stroke: {
        lineCap: "round",
      },
      responsive: [
        {
          breakpoint: 1500,
          options: {
            chart: {
              height: 130,
            },
          },
        },
      ],
    },
  };
};

export var ordersOptions: ApexOptions = {
  series: [
    {
      name: "Daily",
      data: [
        2.15, 3, 1.5, 2, 2.4, 3, 2.4, 2.8, 1.5, 1.7, 3, 2.5, 3, 2, 2.15, 3, 1.1,
      ],
    },
    {
      name: "Weekly",
      data: [
        -2.15, -3, -1.5, -2, -2.4, -3, -2.4, -2.8, -1.5, -1.7, -3, -2.5, -3, -2,
        -2.15, -3, -1.1,
      ],
    },
    {
      name: "Monthly",
      data: [
        -2.25, -2.35, -2.45, -2.55, -2.65, -2.75, -2.85, -2.95, -3.0, -3.1,
        -3.2, -3.25, -3.1, -3.0, -2.95, -2.85, -2.75,
      ],
    },
    {
      name: "Yearly",
      data: [
        2.25, 2.35, 2.45, 2.55, 2.65, 2.75, 2.85, 2.95, 3.0, 3.1, 3.2, 3.25,
        3.1, 3.0, 2.95, 2.85, 2.75,
      ],
    },
  ],
  chart: {
    type: "bar",
    width: 180,
    height: 120,
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "40%",
      barHeight: "80%",
      // startingShape: 'rounded',
      // endingShape: 'rounded'
    },
  },
  colors: [primary, primary, "#F2F3F7", "#F2F3F7"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 0,
  },
  legend: {
    show: false,
  },
  grid: {
    xaxis: {
      // offsetX: -2,
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  yaxis: {
    min: -5,
    max: 5,
    show: false,
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  tooltip: {
    shared: false,
    x: {
      show: false,
    },
    y: {
      // show: false,
    },
    z: {
      // show: false,
    },
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    offsetX: 0,
    offsetY: 0,
    labels: {
      offsetX: 0,
      offsetY: 0,
      show: false,
    },
    axisBorder: {
      offsetX: 0,
      offsetY: 0,
      show: false,
    },
    axisTicks: {
      offsetX: 0,
      offsetY: 0,
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1760,
      options: {
        chart: {
          width: 160,
        },
      },
    },
    {
      breakpoint: 1601,
      options: {
        chart: {
          height: 110,
        },
      },
    },
    {
      breakpoint: 1560,
      options: {
        chart: {
          width: 140,
        },
      },
    },
    {
      breakpoint: 1460,
      options: {
        chart: {
          width: 120,
        },
      },
    },
    {
      breakpoint: 1400,
      options: {
        chart: {
          width: 140,
        },
      },
    },
    {
      breakpoint: 1110,
      options: {
        chart: {
          width: 200,
        },
      },
    },
    {
      breakpoint: 700,
      options: {
        chart: {
          width: 150,
        },
      },
    },
    {
      breakpoint: 576,
      options: {
        chart: {
          width: 220,
        },
      },
    },
    {
      breakpoint: 420,
      options: {
        chart: {
          width: 150,
        },
      },
    },
  ],
};

export var ProfitOptions: ApexOptions = {
  series: [
    {
      name: "Desktops",
      data: [210, 180, 650, 200, 600, 100, 800, 300, 500],
    },
  ],
  chart: {
    width: 200,
    height: 150,
    type: "line",
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 5,
      left: 0,
      blur: 3,
      color: "#16C7F9",
      opacity: 0.3,
    },
    zoom: {
      enabled: false,
    },
  },
  colors: ["#16C7F9"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 2,
    curve: "smooth",
  },
  grid: {
    show: false,
  },
  tooltip: {
    x: {
      show: false,
    },
    y: {
      //  show: false,
    },
    z: {
      //  show: false,
    },
    marker: {
      show: false,
    },
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1780,
      options: {
        chart: {
          width: 180,
        },
      },
    },
    {
      breakpoint: 1680,
      options: {
        chart: {
          width: 160,
        },
      },
    },
    {
      breakpoint: 1601,
      options: {
        chart: {
          height: 110,
        },
      },
    },
    {
      breakpoint: 1560,
      options: {
        chart: {
          width: 140,
        },
      },
    },
    {
      breakpoint: 1460,
      options: {
        chart: {
          width: 120,
        },
      },
    },
    {
      breakpoint: 1400,
      options: {
        chart: {
          width: 150,
        },
      },
    },
    {
      breakpoint: 1110,
      options: {
        chart: {
          width: 200,
        },
      },
    },
    {
      breakpoint: 700,
      options: {
        chart: {
          width: 150,
        },
      },
    },
    {
      breakpoint: 576,
      options: {
        chart: {
          width: 220,
        },
      },
    },
    {
      breakpoint: 420,
      options: {
        chart: {
          width: 150,
        },
      },
    },
  ],
};
