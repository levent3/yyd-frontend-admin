import ConfigDB from "config/ThemeConfig";
import { widgetCommonOption } from "./Chart";
import { TrendingUp, TrendingDown, UserPlus } from "react-feather";
import { Button } from "reactstrap";
import Image from "next/image";
import { ImgPath } from "utils/Constant";
import { ApexOptions } from "apexcharts";
const primary = ConfigDB.data.color.primary_color;

export const trendingCreatorTableData = [
  { heading: "Project", items: "12.090", price: 200 },
  { heading: "The Aston", items: "12.098", price: 340 },
  { heading: "Narkey X", items: "19.998", price: 879 },
];

export const weeklySalesStatusTableData = [
  { heading: "3d Artwork", sale: 12, earnings: 120.9 },
  { heading: "3d Writing", sale: 20, earnings: 180.5 },
  { heading: "Themedev.", sale: 27, earnings: 190.2 },
];

const widget1 = {
  color: [primary],
  dropShadowColor: primary,
  label: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct"],
  widgetYseries: [30, 25, 64, 30, 45, 35, 64, 15, 30, 20],
};
const widget2 = {
  color: ["#FFAA05"],
  dropShadowColor: "#FFAA05",
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
  widgetYseries: [64, 10, 50, 20, 45, 35, 50, 5, 30, 20, 30],
};

const widget3 = {
  color: ["#54BA4A"],
  dropShadowColor: "#54BA4A",
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
    "dec",
  ],
  widgetYseries: [15, 10, 40, 20, 64, 10, 30, 0, 40, 10, 50, 20],
};
interface ProgressCardsData {
  heading: string;
  sale: string;
  saleClassName: string;
  saleGrowth: number;
  totalSale: number;
  chartId: string;
  chartOptions: ApexOptions;
}
export const ProgressCardsData: ProgressCardsData[] = [
  {
    heading: "Earned by Artists",
    sale: "2.78",
    saleClassName: "font-primary",
    saleGrowth: 5.7,
    totalSale: 4987,
    chartId: "artist-chart",
    chartOptions: widgetCommonOption(widget1),
  },
  {
    heading: "Secondary Sales",
    sale: "3.90",
    saleClassName: "font-warning",
    saleGrowth: 2.7,
    totalSale: 3897,
    chartId: "sale-chart",
    chartOptions: widgetCommonOption(widget2),
  },
  {
    heading: "Avg release Value",
    sale: "2.78",
    saleClassName: "font-success",
    saleGrowth: 2.7,
    totalSale: 4987,
    chartId: "release-chart",
    chartOptions: widgetCommonOption(widget3),
  },
];

export const topNFTData = [
  {
    imageName: 4,
    name: "The X Takashih",
    nfts: "Manfers nfts",
    amount: "$13,098.09",
    icon: <TrendingUp className="me-2" />,
    items: "17.09K",
    value: "5.90",
  },
  {
    imageName: 5,
    name: "Williamson",
    nfts: "Manfers nfts",
    amount: "$10,050.00",
    icon: <TrendingUp className="me-2" />,
    items: "16.15K",
    value: "4.5",
  },
  {
    imageName: 6,
    name: "Jenny Wilson",
    nfts: "Manfers nfts",
    amount: "$8,547.05",
    icon: <TrendingDown className="me-2" />,
    items: "14.12K",
    fontClassName: "danger",
    value: "2.65",
  },
];

export const nftDetailsCardData = [
  {
    imageName: 8,
    id: 1,
    header: "Top Artist",
    userEmail: "curtis@example.com",
    userName: "Williamson",
    content: (
      <Button
        color=""
        className="badge-light-primary d-flex align-items-center g-2"
      >
        <UserPlus className="me-1" />
        <span>Follow</span>
      </Button>
    ),
  },
  {
    imageName: 9,
    id: 2,
    header: "Top Seller",
    userEmail: "Wilson@example.com",
    userName: "Jenny Wilson",
    content: (
      <Image
        width={34}
        height={46}
        className="img-fluid medal-img"
        src={`${ImgPath}/dashboard-6/author/medal.svg`}
        alt="Batch icon"
      />
    ),
  },
  {
    imageName: 10,
    id: 3,
    header: "Recent Activity",
    colClassName: "col-xl-4 d-xxl-block d-xl-none d-block",
    userName: "Jenny Wilson",
    spanText: true,
    content: (
      <div className="d-flex align-items-center justify-content-end">
        {" "}
        <span className="status-success me-2"> </span>
        <span className="f-light">12m ago</span>
      </div>
    ),
  },
];

export const trendingNFTData = [
  { heading: "Art", imageName: "1.png" },
  { heading: "Music", imageName: "2.png" },
  { heading: "Games", imageName: "3.png" },
  { heading: "Music", imageName: "4.png" },
  { heading: "Metavereses", imageName: "5.png" },
  { heading: "Games", imageName: "3.png" },
  { heading: "Art", imageName: "1.png" },
  { heading: "Music", imageName: "2.png" },
  { heading: "Games", imageName: "3.png" },
  { heading: "Music", imageName: "4.png" },
  { heading: "Metavereses", imageName: "5.png" },
  { heading: "Games", imageName: "3.png" },
  { heading: "Art", imageName: "1.png" },
  { heading: "Music", imageName: "2.png" },
  { heading: "Games", imageName: "3.png" },
  { heading: "Music", imageName: "4.png" },
  { heading: "Metavereses", imageName: "5.png" },
  { heading: "Games", imageName: "3.png" },
];
