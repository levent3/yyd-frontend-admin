import { ChartCardType } from 'Types/DashboardType';
import dynamic from 'next/dynamic'
import React from 'react'
import { Card, CardBody } from 'reactstrap'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

type propsType = {
    data: ChartCardType
    chartClass?: string;
    mainClass?: string;
}

const Widgets2 = ({ data, chartClass, mainClass }: propsType) => {
    return (
        <Card className={`widget-1 widget-with-chart ${mainClass ? mainClass : ''}`}>
            <CardBody>
                <div>
                    <h4 className='mb-1'>{data.total}</h4>
                    <span className='f-light'>{data.title}</span>
                </div>
                <div className={`${chartClass ? chartClass : 'order-chart'}`}>
                    <ReactApexChart type={data.type} height={data.chart.options.chart?.height} options={data.chart.options} series={data.chart.series} />
                </div>
            </CardBody>
        </Card>
    )
}

export default Widgets2