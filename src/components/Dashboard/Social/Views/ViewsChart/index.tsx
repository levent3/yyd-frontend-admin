import { ViewChartOption } from 'Data/Dashboard/Social/Chart'
import dynamic from 'next/dynamic'
import React from 'react'
import { CardBody } from 'reactstrap'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const ViewsChart = () => {
    return (
        <CardBody className='pt-0'>
            <div className='view-container'>
                <ReactApexChart type='line' height={305} series={ViewChartOption.series} options={ViewChartOption.options} />
            </div>
        </CardBody>
    )
}

export default ViewsChart