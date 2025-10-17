import { ApexOptions } from "apexcharts";

export type ChartOptionType = {
  series: ApexOptions["series"];
  options: ApexOptions;
};

export type cryptoLeftType = {
  title: string;
  average: string;
  gros: number;
  color: string;
  subTitle: string;
  chart: {
    series: ApexOptions["series"];
    color: string;
  };
};
export type mainChartDatatype = {
  color: string[];
  label: string[];
  series: ApexOptions["series"];
};

export type mainGridtype = {
  title: string;
  shortName: string;
  icon: string;
  color: string;
  price: string;
  gros: number;
  chart: mainChartDatatype;
};

export type socialChartType = {
  title: string;
  image: string;
  gros: number;
  total: string;
  subTitle: string;
  status: string;
  sm?: number;
  chart: {
    color: string[];
    series: ApexOptions["series"];
  };
};

export type ChartCardType = {
  title: string;
  total: string;
  chart: ChartOptionType;
  type: any;
};

export type DropdownType = {
  title: string;
  icon: string;
  price: string;
  gros?: string;
  color?: string;
  option?: string[];
};
export interface customerSidebarModalProps {
  modal?: boolean;
  toggle: () => void;
}

export interface commonChartType {
  color: string[];
  dropShadowColor: string;
  label: string[];
  widgetYseries: number[];
}

export interface dropDownPropsType {
  Heading: string;
  headerClassName?: string;
  headingclassName?: string;
}

export interface commonHeaderWithDropDownPropsType {
  heading: string;
  headerClassName?: string;
  headingClassName?: string;
  dropDownList: string[];
  dropDownClass: string;
  dropDownIcon: boolean;
  caret: boolean;
  dropDownToggleClassName?: string;
  tag?: string;
}
interface dataInterFace {
  imageName: string;
  productName: string;
  productPrice: number;
}
export interface productContentData {
  data: dataInterFace;
}
