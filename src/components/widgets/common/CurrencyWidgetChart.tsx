import { widgetsLineChart } from 'Data/widgets/general/Chart';
import { currencyWidgetChartPropsType } from 'Types/GeneralWidget';
import ReactApexChart from 'react-apexcharts';

const CurrencyWidgetChart = ({ chartData }:currencyWidgetChartPropsType) => {
  const updatedOptions = {
    ...widgetsLineChart,
    series: [
      {
        data: chartData.series,
      },
    ],
    options: {
      ...widgetsLineChart,
      chart: {
        ...widgetsLineChart.chart,
        dropShadow: {
          ...widgetsLineChart.chart?.dropShadow,
        },
      },
      colors: chartData.color,
      labels: chartData.label,
    },
  };
  return <ReactApexChart type='line' height={120} width={120} options={updatedOptions.options} series={updatedOptions.series} />;
};

export default CurrencyWidgetChart;
