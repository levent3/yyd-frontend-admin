interface commonCurrencyWidgetDataType {
  title: string;
  sortName: string;
  icon: string;
  color: string;
  price: string;
  gros: number;
  chart: {
    color: string[];
    label: string[];
    series: number[];
  };
}
export interface commonCurrencyWidgetPropsType {
  data: commonCurrencyWidgetDataType;
}

interface chartDataInterFace {
  color: string[];
  label: string[];
  series: number[];
}
export interface currencyWidgetChartPropsType {
  chartData: chartDataInterFace;
}
interface radialProgressData {
  title: string;
  average: string;
  gros: number;
  color: string;
  subTitle: string;
  chart: {
    series: number[];
    color: string;
  };
}
export interface CommonRadialProgressPropsType {
  data: radialProgressData;
}

export interface interFaceCommonSocialCharts {
  color: string[];
  dropshadowColor: string;
  radialYseries: number[];
}
