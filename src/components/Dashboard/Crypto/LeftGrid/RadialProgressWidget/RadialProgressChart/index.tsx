import { WidgetsRadialChart } from 'Data/Dashboard/CryptoData/Chart';
import { cryptoLeftType } from 'Types/DashboardType';
import dynamic from 'next/dynamic';
import React from 'react'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

type propsType = {
    chartOption: cryptoLeftType
    chartHeight: number
}

const RadialProgressChart = ({ chartOption, chartHeight }: propsType) => {
    const updatedOption = {
        ...WidgetsRadialChart,
        series: chartOption.chart.series,
        options: {
            ...WidgetsRadialChart.options,
            chart: {
                ...WidgetsRadialChart.options.chart,
                dropShadow: {
                    ...WidgetsRadialChart.options.chart?.dropShadow,
                    color: chartOption.chart.color,
                },
            },
            colors: [chartOption.chart.color],
        },
    };
    return <ReactApexChart type='radialBar' height={chartHeight} series={updatedOption.series} options={updatedOption.options} />;
}

export default RadialProgressChart