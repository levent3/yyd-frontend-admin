//@ts-nocheck
import { widgetsLineChart } from 'Data/Dashboard/CryptoData/Chart';
import { mainChartDatatype } from 'Types/DashboardType';
import dynamic from 'next/dynamic';
import React from 'react'


type propsType = {
    chartData: mainChartDatatype
}

const CurrencyWidgetChart = ({ chartData }: propsType) => {
    const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })
    const updatedOptions = {
        ...widgetsLineChart,
        series: [
            {
                data: chartData.series,
            },
        ],
        options: {
            ...widgetsLineChart.options,
            chart: {
                ...widgetsLineChart.options.chart,
                dropShadow: {
                    ...widgetsLineChart.options.chart?.dropShadow,
                    color: chartData.color.flat(),
                },
            },
            colors: chartData.color,
            labels: chartData.label,
        },
    };
    return <ReactApexChart type='line' height={120} width={120} options={updatedOptions.options} series={updatedOptions.series} />;
}

export default CurrencyWidgetChart