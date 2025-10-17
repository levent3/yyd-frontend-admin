import { LessonChartOption } from 'Data/Dashboard/OnlineCourseData/Chart';
import dynamic from 'next/dynamic'
import React from 'react'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

type propsType = {
    chartData: {
        color: string[];
        series: number[];
    }
}

const LessonCharts = ({ chartData }: propsType) => {
    const updateChartOption = {
        ...LessonChartOption,
        series: chartData.series,
        options: {
            ...LessonChartOption.options,
            colors: chartData.color,
        },
    };
    return <ReactApexChart type='donut' height={80} options={updateChartOption.options} series={updateChartOption.series} />;
}

export default LessonCharts