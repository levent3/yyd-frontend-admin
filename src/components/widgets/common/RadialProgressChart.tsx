import { WidgetsRadialChart } from 'Data/widgets/general/Chart';
import { CommonRadialProgressPropsType } from 'Types/GeneralWidget';
import ReactApexChart from 'react-apexcharts';

const RadialProgressChart = ({ data }:CommonRadialProgressPropsType) => {
  const updatedOption = {
    ...WidgetsRadialChart,
    series: data.chart.series,
    options: {
      ...WidgetsRadialChart,
      chart: {
        ...WidgetsRadialChart.chart,
        dropShadow: {
          ...WidgetsRadialChart.chart?.dropShadow,
          color: data.chart.color,
        },
      },
      colors: [data.chart.color],
    },
  };
  return <ReactApexChart type='radialBar' height={130} series={updatedOption.series} options={updatedOption.options} />;
};

export default RadialProgressChart;
