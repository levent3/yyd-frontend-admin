
import React from 'react';
import { RadialProgressChart } from 'Data/Dashboard/Social/Chart';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

type propsType = {
    chartData: {
        color: string[]
        series: ApexOptions['series']
    }
}

const RadialChart = ({ chartData }: propsType) => {
    const updatedOption = {
        ...RadialProgressChart,
        series: chartData.series,
        options: {
            ...RadialProgressChart.options,
            chart: {
                dropShadow: {
                    ...RadialProgressChart.options.chart?.dropShadow,
                    color: chartData.color[0],
                },
            },
            colors: chartData.color,
        },
    };
    return <ReactApexChart type='radialBar' height={130} options={updatedOption.options} series={updatedOption.series} />;
};

export default RadialChart;
