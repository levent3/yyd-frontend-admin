import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarController,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Colors,
} from "chart.js";
import ConfigDB from "config/ThemeConfig";

const primary = ConfigDB.data.color.primary_color;
const secondary = ConfigDB.data.color.secondary_color;


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  LineElement,
  Colors,
  Title,
  Tooltip,
  Legend,
  BarController,
  BarElement,
  ArcElement,
  RadialLinearScale
);
export const barChartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(115, 102 ,255, 0.4)",
      borderColor: primary,
      highlightFill: "rgba(115, 102 ,255, 0.6)",
      highlightStroke: primary,
      borderWidth: 2,
      data: [35, 59, 80, 81, 56, 55, 40],
    },
    {
      label: "My Second dataset",
      backgroundColor: "rgba(247, 49, 100, 0.4)",
      borderColor: secondary,
      highlightFill: "rgba(247, 49, 100, 0.6)",
      highlightStroke: secondary,
      data: [28, 48, 40, 19, 86, 27, 90],
      borderWidth: 2,
    },
  ],
};

export const barChartOptions = {
  responsive: true,
  legend: {
    display: false,
  },
};

export const lineChartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      strokeColor: primary,
      pointColor: primary,
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "#000",
      data: [10, 59, 80, 81, 56, 55, 40],
      fill: {
        target: "origin",
        above: "rgba(115, 102 ,255, 0.3)",
      },
    },
    {
      label: "My Second dataset",
      strokeColor: secondary,
      pointColor: secondary,
      pointStrokeColor: "#fff",
      pointHighlightFill: "#000",
      pointHighlightStroke: secondary,
      data: [28, 48, 40, 19, 86, 27, 90],
      fill: {
        target: "origin",
        above: "rgba(247, 49, 100, 0.3)",
      },
    },
  ],
};

export const lineChartOptions = {
  scales: {
    x: {
      grid: {
        display: true,
        color: "rgba(0,0,0,.05)",
        lineWidth: 1,
      },
      display: true,
    },
    y: {
      grid: {
        display: true,
        color: "rgba(0,0,0,.05)",
        lineWidth: 1,
      },
      display: true,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    point: {
      radius: 4,
      borderWidth: 1,
      hoverRadius: 20,
    },
    line: {
      tension: 0.4,
    },
  },
};

export const doughnutData = {
  labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
  datasets: [
    {
      data: [350, 450, 100],
      backgroundColor: [primary, secondary, "#51bb25"],
    },
  ],
};
export const doughnutOption = {
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
};
export const polarData = {
  labels: [
    "Download Sales",
    "In-Store Sales",
    "Mail Sales",
    "Telesales",
    "Corporate Sales",
  ],
  datasets: [
    {
      data: [300, 500, 100, 40, 120],
      backgroundColor: [primary, secondary, "#f8d62b", "#51bb25", "#a927f9"],
    },
  ],
};

export const polarOption = {
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
};

export const radarChartData = {
  labels: ["Ford", "Chevy", "Toyota", "Honda", "Mazda"],
  datasets: [
    {
      label: "My First dataset",
      fillColor: "rgba(115, 102 ,255, 0.4)",
      strokeColor: primary,
      pointColor: primary,
      pointStrokeColor: primary,
      pointHighlightFill: primary,
      pointHighlightStroke: "rgba(115, 102 ,255, 0.4)",
      data: [12, 3, 5, 18, 7],
    },
  ],
};
export const lineChart2Data = {
  labels: ["", "10", "20", "30", "40", "50", "60", "70", "80"],
  datasets: [
    {
      backgroundColor: "rgba(20, 141, 246, 0.2)",
      strokeColor: "#717171",
      pointColor: "#717171",
      borderColor: secondary,
      data: [10, 20, 40, 30, 0, 20, 10, 30, 10],
      fill: {
        target: "origin",
        above: "rgba(20, 141, 246, 0.2)",
      },
    },
    {
      backgroundColor: "rgba(94, 187, 37, 0.2)",
      strokeColor: secondary,
      pointColor: secondary,
      borderColor: "#51bb25",
      data: [20, 40, 10, 20, 40, 30, 40, 10, 20],
      fill: {
        target: "origin",
        above: "rgba(94, 187, 37, 0.2)",
      },
    },
    {
      backgroundColor: "rgba(101, 90, 243, 0.2)",
      borderColor: primary,
      pointColor: primary,
      data: [60, 10, 40, 30, 80, 30, 20, 90, 0],
      fill: {
        target: "origin",
        above: "rgba(101, 90, 243, 0.2)",
      },
    },
  ],
};

export const lineChart2option = {
  responsive: true,

  animation: {
    duration: 0,
  },
  legend: {
    display: false,
  },
  scaleShowVerticalLines: false,
};

export const LineChartData = [
  ["Month", "Guardians of the Galaxy", "The Avengers", "Transformers: Age of Extinction"],
  [1, 37.8, 80.8, 41.8],
  [2, 30.9, 10.5, 32.4],
  [3, 40.4, 57, 25.7],
  [4, 11.7, 18.8, 10.5],
  [5, 20, 17.6, 10.4],
  [6, 8.8, 13.6, 7.7],
  [7, 7.6, 12.3, 9.6],
  [8, 12.3, 29.2, 10.6],
  [9, 16.9, 42.9, 14.8],
  [10, 12.8, 30.9, 11.6],
  [11, 5.3, 7.9, 4.7],
];

export const LineChartDataOption: any = {
  chart: {
    title: "Box Office Earnings in First Two Weeks of Opening",
    subtitle: "in millions of dollars (USD)",
  },
  colors: [primary, secondary, "#51bb25"],
  height: 500,
  width: "100%",
};