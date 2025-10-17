import ConfigDB from "config/ThemeConfig";
import { ApexOptions } from "apexcharts";
import { commonChartType } from "Types/DashboardType";
const primary = ConfigDB.data.color.primary_color;

export const incomeOptions: ApexOptions = {
  series: [
    {
      name: "Income",
      data: [
        15, 14.5, 15, 14.5, 14.2, 14.5, 14.2, 15, 14.8, 14.5, 14.6, 14.4, 14.5,
        14.4, 14.6, 14.3, 14.4, 14.3, 14.35, 14.2, 14.4, 14.3, 14.2, 14.3, 14,
        15, 14.8, 14.9, 14.5, 14.6, 14.5, 14.7, 15, 14.5, 12.2,
      ],
    },
  ],
  chart: {
    height: 250,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 3,
  },
  xaxis: {
    type: "category",
    categories: ["10", "11", "12", "13", "14", "15"],
    tickAmount: 15,
    tickPlacement: "between",
    labels: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  yaxis: {
    labels: {
      formatter: function (val: number) {
        return val + "k";
      },
    },
    tooltip: {
      // show: false,
      enabled: false,
    },
  },
  grid: {
    borderColor: "rgba(82, 82, 108, 0.2)",
    strokeDashArray: 5,
    padding: {
      right: -15,
    },
  },
  colors: [primary],
  fill: {
    gradient: {
      type: "vertical",
      opacityFrom: 0.7,
      opacityTo: 0,
      stops: [0, 100],
      colorStops: [],
    },
  },
};

export const widgetCommonOption = (data: commonChartType) => {
  return {
    series: [
      {
        data: data.widgetYseries,
      },
    ],
    chart: {
      width: 180,
      height: 100,
      toolbar: {
        show: false,
      },
      offsetY: 10,
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 3,
        left: 0,
        blur: 3,
        color: data.dropShadowColor,
        opacity: 0.4,
      },
    },
    grid: {
      show: false,
    },
    colors: data.color,
    stroke: {
      width: 2,
      // curve: "smooth",
    },
    labels: data.label,
    markers: {
      size: 0,
    },
    xaxis: {
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
    // tooltip: {
    //   marker: {
    //     show: false,
    //   },
    //   x: {
    //     show: false,
    //   },
    //   y: {
    //     show: false,
    //     labels: {
    //       show: false,
    //     },
    //   },
    // },
    responsive: [
      {
        breakpoint: 1660,
        options: {
          chart: {
            width: 120,
          },
        },
      },
      {
        breakpoint: 768,
        options: {
          chart: {
            width: 300,
          },
        },
      },
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 150,
          },
        },
      },
    ],
  };
};

// statistic chart
export const statisticOptions: ApexOptions = {
  series: [
    {
      name: "Earning",
      data: [80, 40, 100, 40, 70, 45, 120, 60, 0],
    },
  ],
  chart: {
    height: 170,
    // type: "area",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 3,
  },
  xaxis: {
    type: "category",
    categories: ["Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep"],
    tickAmount: 15,
    tickPlacement: "between",
    labels: {
      show: true,
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
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
    tooltip: {
      // show: false,
    },
  },
  grid: {
    show: false,
    padding: {
      right: -40,
    },
  },
  colors: ["#7366ff"],
  fill: {
    gradient: {
      type: "vertical",
      opacityFrom: 0.7,
      opacityTo: 0,
      stops: [0, 100],
      colorStops: [],
    },
  },
  responsive: [
    {
      breakpoint: 1499,
      options: {
        chart: {
          height: 150,
        },
      },
    },
    {
      breakpoint: 1454,
      options: {
        chart: {
          height: 130,
        },
        grid: {
          padding: {
            right: -20,
          },
        },
      },
    },
    {
      breakpoint: 1400,
      options: {
        chart: {
          height: 170,
        },
      },
    },
    {
      breakpoint: 992,
      options: {
        chart: {
          height: 190,
        },
      },
    },
  ],
};
